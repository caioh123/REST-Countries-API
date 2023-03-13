import { CountryCard } from '../../components/ContryCard';
import { Header } from '../../components/Header';
import { SearchFilter } from '../../components/SearchFilter';
import { Cards } from './styles';

export function Dashboard() {
  return (
    <>
      <Header />
      <SearchFilter />

      <Cards>
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
      </Cards>
    </>
  );
}
