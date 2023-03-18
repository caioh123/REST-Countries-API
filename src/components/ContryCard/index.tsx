import { Container } from './styles';
import { Country } from '../../types/country.types';

export function CountryCard({
  name,
  population,
  region,
  capital,
  flags,
}: Country) {
  return (
    <Container>
      <img src={flags.png} alt='' />
      <h3>{name.official}</h3>
      <strong>Population</strong>
      <p>{population}</p>
      <strong>Region</strong>
      <p>{region}</p>
      <strong>Capital</strong>
      <p>{capital}</p>
    </Container>
  );
}
