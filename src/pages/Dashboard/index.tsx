import { useEffect, useState } from 'react';
import { CountryCard } from '../../components/ContryCard';
import { Header } from '../../components/Header';
import { SearchFilter } from '../../components/SearchFilter';
import { getCountries } from '../../services/contries.service';
import { Country } from '../../types/country.types';
import { Cards } from './styles';

export function Dashboard() {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    getCountries().then((response) => setCountries(response.data));
  }, []);
  return (
    <>
      <Header />
      <SearchFilter />

      <Cards>
        {countries.map((country) => (
          <CountryCard
            name={country.name}
            population={country.population}
            region={country.region}
            capital={country.capital}
            flags={country.flags}
          />
        ))}
      </Cards>
    </>
  );
}
