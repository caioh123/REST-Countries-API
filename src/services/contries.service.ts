import API from '../config/api';
import { AxiosResponse } from 'axios';

import { ENDPOINTS } from '../config/endpoints';
import { Country } from './country.types';

export async function getCountries() {
  const result: AxiosResponse<Country[]> = await API.get(ENDPOINTS.countries);

  return result;
}
