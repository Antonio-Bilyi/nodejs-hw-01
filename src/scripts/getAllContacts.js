import {readContacts} from "../utils/readContacts.js"
export const getAllContacts = async () => { 
    try {
        const contacts = await readContacts();

        console.log("There are contacts:", contacts);
        return contacts;
    } catch (error) {
        console.error("Get all contacts error:", error);
        throw error;
    }
};


getAllContacts();