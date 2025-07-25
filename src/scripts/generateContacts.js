import { faker } from '@faker-js/faker';
import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

export const generateContacts = async (number) => {
  const newContacts = faker.helpers.multiple(createFakeContact, {
    count: number,
  });
  if (newContacts.length !== 0) {
    try {
      const currentData = await readContacts();
      const newData = Array.isArray(currentData)
        ? [...currentData, ...newContacts]
        : [...newContacts];
      await writeContacts(newData);
    } catch (err) {
      throw new Error(`Writing error ${err.message}`);
    }
  }
};

generateContacts(5);
