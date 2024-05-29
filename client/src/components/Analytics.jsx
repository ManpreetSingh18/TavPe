import React, { useState, useEffect } from 'react';

export const Analytics = () => {
  const [registeredCompanies, setRegisteredCompanies] = useState(0);
  const [happyClients, setHappyClients] = useState(0);
  const [collaborations, setCollaborations] = useState(0);
  const [application, setApplication] = useState(0);

  useEffect(() => {
    // Initialize values to zero on component mount
    setRegisteredCompanies(0);
    setHappyClients(0);
    setCollaborations(0);
    setApplication(0);

    const interval = setInterval(() => {
      // Update the state gradually until it reaches the specified values
      if (registeredCompanies < 10) {
        setRegisteredCompanies((prevCount) => Math.min(prevCount + 1, 10));
      }
      if (happyClients < 500) {
        setHappyClients((prevCount) => Math.min(prevCount +10, 500));
      }
      if (collaborations < 20) {
        setCollaborations((prevCount) => Math.min(prevCount + 1, 20));
      }
      if (application < 700) {
        setApplication((prevCount) => Math.min(prevCount + 20, 700));
      }

      // Check if all values have reached their targets, then clear the interval
      if (
        registeredCompanies === 10 &&
        happyClients === 10000 &&
        collaborations === 10 &&
        application === 10
      ) {
        clearInterval(interval);
      }
    }, 50); // Adjust the interval speed here (in milliseconds)

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="section-analytics">
        <div className="container">
          <div className="div1">
            <h2>{registeredCompanies}</h2>
            <p>Registered Company</p>
          </div>
          <div className="div1">
            <h2>{happyClients}</h2>
            <p>Happy Clients</p>
          </div>
          <div className="div1">
            <h2>{collaborations}</h2>
            <p>Well Known Collaboration</p>
          </div>
          <div className="div1">
            <h2>{application}</h2>
            <p>Application</p>
          </div>
        </div>
      </section>
    </>
  );
};
