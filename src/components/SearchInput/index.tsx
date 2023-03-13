import { Container } from './styles';
import { AiOutlineSearch } from 'react-icons/ai';
import { theme } from '../../static/theme';

export function SearchInput() {
  return (
    <Container>
      <div>
        <AiOutlineSearch
          size={20}
          color={theme.pallete.icon}
          style={{ backgroundColor: theme.pallete.white }}
        />
        <input type='text' placeholder='Search for a country...' />
      </div>
    </Container>
  );
}
