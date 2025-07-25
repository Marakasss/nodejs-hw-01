import { PATH_DB } from '../constants/contacts.js';
import { readFile } from 'node:fs/promises';

export const readContacts = async () => {
  try {
    const data = await readFile(PATH_DB, 'utf-8');
    return JSON.parse(data || '[]');
  } catch (err) {
    throw new Error(`Failed to read contacts: ${err.message}`);
  }
};
