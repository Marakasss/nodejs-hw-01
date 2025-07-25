import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  const newContact = createFakeContact();
  if (newContact && typeof newContact === 'object') {
    try {
      const currentData = await readContacts();
      const newData = Array.isArray(currentData)
        ? [...currentData, newContact]
        : [newContact];
      await writeContacts(newData);
    } catch (err) {
      throw new Error(`Writing error ${err.message}`);
    }
  }
};
