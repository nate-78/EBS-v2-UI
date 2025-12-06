import { API_BASE_URL } from './config';

export async function fetchClientsForYear(year, isTestData = false) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/submissions?year=${year}&testData=${isTestData}`);
    const data = await response.json();
    return data;
  } catch(error) {
    throw new Error(error);
  }
}

export async function fetchSubmittedTaxYears() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/taxyears`);
    const data = await response.json();
    return data;
  } catch(error) {
    throw new Error(error);
  }
}