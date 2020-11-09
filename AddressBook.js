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
f = prompt('Enter first name: ');
l = prompt('Enter last name: ');
a = prompt('Enter address: ');
c = prompt('Enter city: ');
s = prompt('Enter state: ');
z = prompt('Enter zip: ');
p = prompt('Enter phone number: ');
em = prompt('Enter email ID: ');
    
function checkfirstName(f)
{
        let firstNameRegex = RegExp('^[A-Z]{1}[a-zA-Z]{2,}$')
        if(firstNameRegex.test(f))
        return f;
        else
        console.error("First Name Invalid");
}

function checklastName(l)
{
        let lastNameRegex = RegExp('^[A-Z]{1}[a-zA-Z]{2,}$')
        if(lastNameRegex.test(l))
        return l;
        else
        console.error("Last Name Invalid");
}

function checkaddress(a)
{
        let addressRegex = RegExp('^[a-zA-Z0-9\\s.,\']{6,}$');
        if(addressRegex.test(a))
        return a;
        else
        console.error("Address Invalid");
}

function checkcity(c)
{        
        let cityRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$')
        if(cityRegex.test(c))
        return c;
        else
        console.error("City Invalid");
}

function checkstate(s)
{
        let stateRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$')
        if(stateRegex.test(s))
        return s;
        else
        console.error("State Invalid");
}

function check(z)
{    
        let zipRegex = RegExp('^[0-9]{6}$');
        if(zipRegex.test(z))
        return z;
        else
        console.error("Zip Invalid");
}

function checkphone(p)
{ 
        let phoneRegex = RegExp('^[0-9]{2,3}\\s[0-9]{10}$');
        if(phoneRegex.test(p))
        return p;  
        else
        console.error("Phone Number Invalid");
}

function checkemail(em)
{
        let emailRegex = RegExp('^[a-zA-Z]+[a-zA-Z_+.-]*[a-zA-Z]+@[a-zA-Z]+[.][a-zA-z]{2,}$');
        if(emailRegex.test(em))
        return em;  
        else
        console.error("Email ID Invalid");
}

try{
    let firstName=checkfirstName(f);
    let lastName=checklastName(l);
    let address=checkaddress(a);
    let city=checkcity(c);
    let state=checkstate(s);
    let zip=check(z);
    let phone=checkphone(p)
    let email=checkemail(em);
    let contact = new Contact(firstName,lastName,address,city,state,zip,phone,email);
    console.log(contact.toString());
}
catch(e)
{
    console.error(e);
}