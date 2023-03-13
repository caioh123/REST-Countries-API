import { Container } from './styles';
import { AiOutlineSearch } from 'react-icons/ai';
import { theme } from '../../static/theme';

export function SearchFilter() {
  return (
    <Container>
      <div>
        <AiOutlineSearch
          size={20}
          color={theme.pallete.icon}
          style={{ backgroundColor: theme.pallete.white }}
        />
        <input type='text' placeholder='Search' />
      </div>
      <select id='cars'>
        <option value='volvo'>Filter by region</option>
      </select>
    </Container>
  );
}
