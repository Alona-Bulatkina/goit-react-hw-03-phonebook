import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { Label, Input, Form, Button } from './ContactForm.styled';

class ContactForm extends React.Component {
  // PropTypes как статическое свойство
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  // Стейт формы
  state = {
    name: '',
    number: '',
  };

  // Метод, наблюдающий за инпутами и записывающий в стейт их значения
  hanldeChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  // Метод на отправке формы. Формирует из стейта контакт и передает во внешний метод
  hanldeSubmit = event => {
    event.preventDefault();

    const { name, number } = this.state;

    const contact = {
      id: uuidv4(),
      name: name,
      number: number,
    };

    this.props.onSubmit(contact); // Внешний метод в пропсах класса

    this.resetForm();
  };

  // Сброс полей формы (после отправки)
  resetForm = () => {
    this.setState({
      id: '',
      name: '',
      number: '',
    });
  };
  
// Проверка на дубли
filterContacts = () => {
  return this.state.contacts.filter(contact =>
    contact.name.toLowerCase().includes(this.state.filter.toLowerCase()),
  );
};

  render() {
    return (
      <Form onSubmit={this.hanldeSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            value={this.state.name} // Пишем значение в стейт
            onChange={this.hanldeChange} // Наблюдающий метод
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            value={this.state.number} // Пишем значение в стейт
            onChange={this.hanldeChange} // Наблюдающий метод
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
            required
          />
        </Label>
        <div>
          <Button type="submit">
            Add contact
          </Button>
        </div>
      </Form>
    );
  }
}

export default ContactForm;