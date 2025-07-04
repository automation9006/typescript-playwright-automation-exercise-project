import { test, expect } from '@playwright/test';
import { createAccount, deleteUserIfExists } from '../../utils/apiHelpers';
import { faker } from '@faker-js/faker';

test.describe('tests to validate user registration journey', () => {
  let createdEmail = '';
  let createdPassword = '';

  test('Create new account via API', async () => {
    createdEmail = faker.internet.email();
    createdPassword = faker.internet.password();

    const payload = {
      name: faker.person.fullName(),
      email: createdEmail,
      password: createdPassword,
      title: faker.person.prefix(),
      birth_date: faker.number.int({ min: 1, max: 31 }).toString(),
      birth_month: (new Date(faker.date.month())).getMonth().toString(), 
      birth_year: faker.date.birthdate({ min: 18, max: 60, mode: 'age' }).getFullYear().toString(),
      firstname: faker.person.firstName(),
      lastname: faker.person.lastName(),
      company: faker.company.buzzNoun(),
      address1: faker.location.streetAddress(),
      address2: faker.location.buildingNumber(),
      country: 'India',
      state: faker.location.state(),
      city: faker.location.city(),
      zipcode: faker.location.zipCode(),
      mobile_number: faker.phone.number()
    };

    const responseBody = await createAccount(payload);  
    console.log('Response:', responseBody);
    expect(responseBody.responseCode).toBe(201);
  });

  test.afterEach(async () => {
    if (createdEmail && createdPassword) {
      await deleteUserIfExists(createdEmail, createdPassword);
    }
  });
});
