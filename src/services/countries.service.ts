import API from '../config/api';
import { AxiosResponse } from 'axios';

import { ENDPOINTS } from '../config/endpoints';
import { Country } from '../types/country.types';

export async function getCountries(region?: string, searchTerm?: string) {
  let endpoint = region ? `region/${region}` : ENDPOINTS.countries;

  if (searchTerm) {
    endpoint = `name/${searchTerm}`;
  }

  const result: AxiosResponse<Country[]> = await API.get(endpoint);

  return result;
}
