import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const data = await readContacts();
  if (data && Array.isArray(data) && data.length !== 0) {
    try {
      data.pop();
      await writeContacts(data);
    } catch (err) {
      throw new Error(`Error: ${err.message}`);
    }
  } else {
    console.log('No contacts to remove.');
    return;
  }
};

removeLastContact();
