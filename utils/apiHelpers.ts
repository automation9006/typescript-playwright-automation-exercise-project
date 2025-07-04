import { request, APIRequestContext, expect } from '@playwright/test';

export async function createAccount(payload: any) {
  const apiContext: APIRequestContext = await request.newContext();

  const response = await apiContext.post('https://automationexercise.com/api/createAccount', {
    form: payload,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });

  const responseBody = await response.json();
  console.log('Create Account Response:', responseBody);

  await apiContext.dispose();
  return responseBody; 
}

export async function deleteUserIfExists(email: string, password: string): Promise<void> {
  const apiContext: APIRequestContext = await request.newContext();

  const getResponse = await apiContext.get(`https://automationexercise.com/api/getUserDetailByEmail?email=${email}`);

  if (getResponse.ok()) {
    console.log(`User found for ${email}. Proceeding to delete.`);

    const deleteResponse = await apiContext.delete('https://automationexercise.com/api/deleteAccount', {
      form: { email, password },
    });

    const deleteResult = await deleteResponse.json();
    console.log('Delete Account Response:', deleteResult);

    expect(deleteResult.responseCode).toBe(200);

    console.log(`Existing user deleted: ${email}`);
  } else {
    console.log(`No existing user found for ${email}.`);
  }

  await apiContext.dispose();
}
