import { PATH_DB } from '../constants/contacts.js';
import { writeFile } from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  if (!updatedContacts || updatedContacts.length === 0) {
    throw new Error('No contacts to write');
  }

  const data = JSON.stringify(updatedContacts, null, 2);

  try {
    await writeFile(PATH_DB, data, 'utf-8');
  } catch (err) {
    throw new Error(`Writing error: ${err.message}`);
  }
};
