import { writeContacts } from "../utils/writeContacts.js"

export const removeAllContacts = async () => { 
    try {
        await writeContacts([]);

        console.log("All contacts removed");
        
    } catch (error) {
        console.error("Remove all contacts error:", error)

        throw error;
        
    }
};


removeAllContacts();
