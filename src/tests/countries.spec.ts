import axios from 'axios';
import { getCountries } from '../services/contries.service';

jest.mock('axios');

describe('fetchCountries', () => {
  it('returns a value', async () => {
    const response = await getCountries();

    expect(response).toBeDefined();
  });
});
