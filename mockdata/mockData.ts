import {faker} from '@faker-js/faker'

function generateUserRegFormData(){
  return {
    fullName: faker.person.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    date: faker.number.int({ min: 1, max: 31 }).toString(),
    month:faker.date.month().toString(),
    year:faker.date.birthdate({ min: 18, max: 60, mode: 'age' }).getFullYear().toString(),
    firstName : faker.person.firstName(),
    lastName : faker.person.lastName(),
    address1: faker.location.streetAddress(),
    address2: faker.location.buildingNumber(),
    state : faker.location.state(),
    city : faker.location.city(),
    zipCode : faker.location.zipCode(),
    phone: faker.phone.number(),
    company:faker.company.buzzNoun()
  }
   
}
export default generateUserRegFormData