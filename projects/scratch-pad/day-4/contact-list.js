// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list. //research splice method
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) { //MAKE SURE TO GET THIS PASSING FIRST
    //return an object with the properties: id, namefirst, namelast
    return {
        id: id,
        nameFirst: nameFirst,
        nameLast: nameLast
    }
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        addContact: function(contact) {
            //use push method to add contact
            contacts.push(contact);
        },
        findContact: function(fullName) {
            //create for loop to iterate through contacts array
            for (let i = 0; i < contacts.length; i++) {
                //create if statement to determine if fullName is equal to namefirst and namelast
                if (contacts[i].nameFirst + " " + contacts[i].nameLast === fullName) {
                    //if true, return the contact
                    return contacts[i];
                //else, return undefined
                } else {
                    return undefined;
            }
        }
        },
        removeContact: function(contact) {
            //use slice method to remove contact
            contacts.splice(contact, 1);
        },
        printAllContactNames: function(){
            //declare an empty string for names
            let fullName = "";
            //create for loop to iterate over contacts array
            for (let i = 0; i < contacts.length; i++) {
                //fullName is equal to each contact namefirst plus space and namelast
                fullName += contacts[i].nameFirst + " " + contacts[i].nameLast;
                //create if statement to determine last name in list of contacts
                if (i !== contacts.length - 1) {
                    fullName += "\n";
                }
            }
            return fullName;
        }
    }
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
