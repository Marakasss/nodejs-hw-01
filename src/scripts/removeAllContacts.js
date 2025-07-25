import { writeFile } from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  try {
    await writeFile(PATH_DB, '[]', 'utf-8');
  } catch (err) {
    throw new Error(`Removing error: ${err.message}`);
  }
};

removeAllContacts();
