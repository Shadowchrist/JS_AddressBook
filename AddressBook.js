const prompt = require('./node_modules/prompt-sync')();
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

let addressbook = new Map();

function changeToArray(Map)
{
    let contactList = new Array();
    for([key,value] of addressbook)
    {
        contactList.push(value);
    }
    return contactList;
}

function addContact()
{
    n = prompt('Enter no. of contacts to be entered: ');
    while(n--)
    {
        f = prompt('Enter first name: ');
        l = prompt('Enter last name: ');
        a = prompt('Enter address: ');
        c = prompt('Enter city: ');
        s = prompt('Enter state: ');
        z = prompt('Enter zip: ');
        p = prompt('Enter phone number: ');
        em = prompt('Enter email ID: ');

        try{
            let firstName=checkfirstName(f);
            let lastName=checklastName(l);
            let address=checkaddress(a);
            let city=checkcity(c);
            let state=checkstate(s);
            let zip=checkzip(z);
            let phone=checkphone(p)
            let email=checkemail(em);
            if(!addressbook.has(firstName+lastName))
            {
                let contact = new Contact(firstName,lastName,address,city,state,zip,phone,email);
                let index = firstName + lastName;
                addressbook.set(index,contact);    
                console.log("Contact added.\n");
            }
            else
            {
                console.log("Contact already exists!");   
            }    
        }
        catch(e)
        {
            console.error(e);
        }
    }
}

function editContact()
{
    console.log("Editing function...");
    name1 = prompt('Enter first name: ');
    name2 = prompt('Enter last name: ');
    let index = name1 + name2;
    let contact = addressbook.get(index);
    console.log("What do you want to edit?");
    console.log("1. Address");
    console.log("2. City");
    console.log("3. State");
    console.log("4. Zipcode");
    console.log("5. Phone Number");
    console.log("6. Email ID");
    let n = prompt('Enter choice: ');
    if(n==1)
    {
        newA = prompt('Enter new address: ');
        let newaddress = checkaddress(newA);
        addressbook.set(index,new Contact(contact.firstName, contact.lastName, newaddress, contact.city, 
            contact.state, contact.zip, contact.phone, contact.email));
    }

    else if(n==2)
    {
        newC = prompt('Enter new city: ');
        let newcity = checkcity(newC);
        addressbook.set(index,new Contact(contact.firstName, contact.lastName, contact.address, newcity, 
            contact.state, contact.zip, contact.phone, contact.email));
    }

    else if(n==3)
    {
        newS = prompt('Enter new state: ');
        let newstate = checkstate(newS);
        addressbook.set(index,new Contact(contact.firstName, contact.lastName, contact.address, contact.city, 
            newstate, contact.zip, contact.phone, contact.email));
    }

    else if(n==4)
    {
        newZ = prompt('Enter new zip: ');
        let newzip = checkzip(newZ);
        addressbook.set(index,new Contact(contact.firstName, contact.lastName, contact.address, contact.city, 
            contact.state, newzip, contact.phone, contact.email));
    }

    else if(n==5)
    {
        newP = prompt('Enter new phone number: ');
        let newphone = checkphone(newP);
        addressbook.set(index,new Contact(contact.firstName, contact.lastName, contact.address, contact.city, 
            contact.state, contact.zip, newphone, contact.email));
    }
    
    else if(n==6)
    {
        newE = prompt('Enter new email ID: ');
        let newemail = checkemail(newE);
        addressbook.set(index,new Contact(contact.firstName, contact.lastName, contact.address, contact.city, 
            contact.state, contact.zip, contact.phone, newemail));
    }
    console.log("Details Updated. The new contact details are: ");
    console.log(addressbook.get(index).toString());
} 

function deleteContact()
{
    console.log("Deleting function...");
    name1 = prompt('Enter first name: ');
    name2 = prompt('Enter last name: ');
    let index = name1 + name2;
    if(addressbook.has(index)) 
        addressbook.delete(index);
    else
        console.log("No such contact present");    
}

function getNoOfContacts(){
    let contactList = changeToArray(addressbook);
    let count = contactList.reduce((totalCount,e)=>totalCount+1,0);
    console.log(`${count} contacts`);
}

function searchContactByCity(){
    let contactList = changeToArray(addressbook);
    city = prompt('Enter city: ');
    first = prompt('Enter first name: ');
    last = prompt('Enter last name: ');
    let contacts = contactList.filter(e=> e.city == city && e.firstName==first && e.lastName==last)
                   .reduce((totalCount,e)=>totalCount+1,0);
    if(contacts>0)
        console.log("Contact found.");
    else
        console.log("Contact not found.");
}

function viewContactsByCity(){
    
    let contactList = changeToArray(addressbook);
    city = prompt('Enter city: ');
    let contacts = contactList.filter(e=>e.city == city);
    for(let person of contacts)
    {
        console.log(person.toString());
    }
    console.log(`${contacts.length} contacts found.`);
}

function displayAddressbook()
{
    for([key,value] of addressbook)
    {
        console.log(value.toString());
    }
}
    
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

function checkzip(z)
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
addContact();
let check = true;
while(check)
{
    c = parseInt(prompt('Enter:\n1 to add more contacts.\n2 to edit a contact.\n3 to delete a contact.\n4 to get number of contacts.\n5 to display all contacts.\n6 to search a person in a city.\n7 to view contacts in a particular city.\n'));
    switch(c)
    {
        case 1:
            addContact();
        break;
        case 2:
            editContact();
        break;
        case 3:
            deleteContact();
        break;
        case 4:
            getNoOfContacts();
        break;
        case 5:
            displayAddressbook();
        break;
        case 6:
            searchContactByCity();
        break;  
        case 7:
            viewContactsByCity();
        break;      
        default:
        console.log('Exiting...');
        check = false;   
        break;
    }
}    