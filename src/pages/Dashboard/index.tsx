import { useEffect, useState } from 'react';
import { CountryCard } from '../../components/ContryCard';
import { Header } from '../../components/Header';
import { SearchFilter } from '../../components/SearchFilter';
import { getCountries } from '../../services/contries.service';
import { Cards } from './styles';

export function Dashboard() {
  const [countries, setCountries] = useState([]);
  console.log(countries);

  useEffect(() => {
    getCountries().then((response) => setCountries(response.data));
  }, []);
  return (
    <>
      <Header />
      <SearchFilter />

      <Cards>
        {countries.map((country) => (
          <CountryCard />
        ))}
      </Cards>
    </>
  );
}
