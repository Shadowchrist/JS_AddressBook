class Contact{
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phone;
    email;

    constructor(...params)
    {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phone = params[6];
        this.email = params[7];
    }
    toString()
    {
        return "FirstName: "+this.firstName+"\nLastName: "+this.lastName+"\nAddress: "+this.address+
               "\nCity: "+this.city+"\nState: "+this.state+"\nZip: "+this.zip+"\nPhone Number: "+this.phone+
               "\nEmail ID: "+this.email+"\n";
    }
}
const prompt = require('./node_modules/prompt-sync')();
firstName = prompt('Enter first name: ');
lastName = prompt('Enter last name: ');
address = prompt('Enter address: ');
city = prompt('Enter city: ');
state = prompt('Enter state: ');
zip = prompt('Enter zip: ');
phone = prompt('Enter phone number: ');
email = prompt('Enter email ID: ');
let contact = new Contact(firstName,lastName,address,city,state,zip,phone,email);
console.log(contact.toString());