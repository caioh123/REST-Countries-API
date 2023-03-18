import { useEffect, useState, ChangeEvent } from 'react';
import { CountryCard } from '../../components/ContryCard';
import { Header } from '../../components/Header';
import { SearchFilter } from '../../components/SearchFilter';
import { getCountries } from '../../services/countries.service';
import { Country } from '../../types/country.types';
import { Cards } from './styles';
import { Regions } from '../../static/regions';

export function Dashboard() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedRegion, setSelectedRegion] = useState<Regions>();
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    getCountries(selectedRegion, searchTerm).then((response) =>
      setCountries(response.data)
    );
  }, [selectedRegion, searchTerm]);
  return (
    <>
      <Header />
      <SearchFilter
        setSelectedRegion={setSelectedRegion}
        setSearchTerm={setSearchTerm}
      />

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
