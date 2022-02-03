import PropTypes from 'prop-types';
import { Header, Input } from './filter.styled';

// Принимает значение с поля фильтра и метод пишущий в стейт
const Filter = ({ value, onChange }) => {
  return (
    <Header>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
    </Header>
  );
};
Filter.defaultProps = {
  value: '',
};
Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
export default Filter;