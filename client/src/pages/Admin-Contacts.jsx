import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from 'react-toastify';
import { baseUrl } from "../../Urls";


export const AdminContacts = () => {
    const [contactData, setContactData] = useState([]);
    const { authorizationToken } = useAuth();

    const getContactsData = async () => {
        try {
            const response = await fetch(`${baseUrl}/api/admin/contacts`, {
                method: "GET",
                headers: {
                    Authorization: authorizationToken
                }
            });
            const data = await response.json();
            console.log("contact data:", data);
            if (response.ok) {
                setContactData(data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const deleteContactById = async (id) => {
        console.log("Click")
        try {
            const response = await fetch(`${baseUrl}/api/admin/contacts/delete/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: authorizationToken
                }
            });
            if (response.ok) {
                getContactsData();
                toast.success("Deleted contact successfully");
            } else {
                toast.error("Failed to delete contact");
            }
        } catch (error) {
            console.log("Error:", error);
        }
    };

    useEffect(() => {
        getContactsData();
    }, []);

    return (
        <section className="admin-contacts-section">
            <h1>Admin Contact Data</h1>
            <div className="container admin-contacts">
                {contactData.map((curContactData, index) => {
                    const { name, username, email, contactNo, profession, companyName, salary, annualIncome, loanAmount, loanType, _id } = curContactData;

                    return (
                        <div key={index}>
                            <p>Name: {username}</p>
                            <p>Email: {email}</p>
                            <p>Contact No: {contactNo}</p>
                            <p>Profession: {profession}</p>
                            <p>Company Name: {companyName}</p>
                            <p>Salary: {salary}</p>
                            <p>Annual Income: {annualIncome}</p>
                            <p>Loan Amount: {loanAmount}</p>
                            <p>Loan Type: {loanType}</p>
                            <button className="btn" onClick={() => deleteContactById(_id)}>Delete</button>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
