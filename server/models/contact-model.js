const { Schema, model } = require('mongoose');

const contactSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  profession: { type: String, required: true },
  companyName: { type: String, required: function() { return this.profession === 'salaried'; } },
  salary: { type: Number, required: function() { return this.profession === 'salaried'; } },
  annualIncome: { type: Number, required: function() { return this.profession === 'business'; } },
  loanAmount: { type: Number, required: true },
  loanType: { type: String, required: true } // Added loanType field
});

// Create a model or collection
const Contact = model('Contact', contactSchema);
module.exports = Contact;
