import { ChangeEvent } from 'react';
import { Container } from './styles';
import { AiOutlineSearch } from 'react-icons/ai';
import { theme } from '../../static/theme';
import { Regions, regionsOptions } from '../../static/regions';

type SearchFilterProps = {
  setSelectedRegion: Function;
  setSearchTerm: Function;
};

export function SearchFilter({
  setSelectedRegion,
  setSearchTerm,
}: SearchFilterProps) {
  function handleChange(event: ChangeEvent<HTMLSelectElement>) {
    const value = event.target.value as Regions;
    setSelectedRegion(value);
  }

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setSearchTerm(value);
  }

  return (
    <Container>
      <div>
        <AiOutlineSearch
          size={20}
          color={theme.pallete.icon}
          style={{ backgroundColor: theme.pallete.white }}
        />
        <input type='text' placeholder='Search' onChange={handleSearch} />
      </div>
      <select onChange={handleChange}>
        <option value=''>Filter by Region</option>
        {regionsOptions.map((option) => (
          <option key={option.value} value={option.value || ''}>
            {option.value}
          </option>
        ))}
      </select>
    </Container>
  );
}
