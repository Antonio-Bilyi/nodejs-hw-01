import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";
import { createFakeContact } from "../utils/createFakeContact.js";

export const generateContacts = async (number) => {
  try {
    const contacts = await readContacts();

    const newContacts = Array.from({ length: number }, () => createFakeContact());

    const updatedContacts = [...contacts, ...newContacts];

    await writeContacts(updatedContacts);

    console.log(`Generated ${number} contacts`);
  } catch (error) {
    console.error("Generate contacts error", error);
    throw error;
  }
};

generateContacts();
