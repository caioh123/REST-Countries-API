import axios from 'axios';
import { getCountries } from '../services/countries.service';

jest.mock('axios');

describe('fetchCountries', () => {
  it('returns a value', async () => {
    const response = await getCountries();

    expect(response).toBeDefined();
  });
});
