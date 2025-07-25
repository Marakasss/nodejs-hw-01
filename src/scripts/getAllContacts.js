import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const data = await readContacts();
    return data;
  } catch (err) {
    throw new Error(`Reading file error: ${err.message}`);
  }
};
console.log(await getAllContacts());
