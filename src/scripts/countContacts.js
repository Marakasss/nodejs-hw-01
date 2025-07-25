import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const data = await readContacts();
    if (Array.isArray(data)) return data.length;
  } catch (err) {
    throw new Error(`Reading file error: ${err.message}`);
  }
};

console.log(await countContacts());
