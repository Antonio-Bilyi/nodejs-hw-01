import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const addOneContact = async () => { 
    try {
        const contacts = await readContacts();

        const newContact = createFakeContact();

        const updatedContacts = [...contacts, newContact];

        await writeContacts(updatedContacts);

        console.log("Add one contact:", newContact);
    } catch (error) {
        console.error("Add contact Error:", error);

        throw error;        
    }
};

addOneContact();