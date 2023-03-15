import API from '../config/api';
import { AxiosResponse } from 'axios';

import { ENDPOINTS } from '../config/endpoints';
import { Countries } from './country.types';

export async function getCountries() {
  const result: AxiosResponse<Countries> = await API.get(ENDPOINTS.countries);

  return result;
}
