import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const removeLastContact = async () => { 
    try {
        const contacts = await readContacts();

        if (contacts.length === 0) {
            console.log("Contacts array is empty!");
            return;
        }

        const removedContact = contacts.splice(-1, 1)[0];

        await writeContacts(contacts);

        console.log("Removed last contact:", removedContact);
    } catch (error) {
        console.error("Remove last contact error:", error);
        throw error;
        
    }
};

removeLastContact();