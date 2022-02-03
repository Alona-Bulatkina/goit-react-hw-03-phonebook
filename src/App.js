import React from 'react';
import Container from './component/Container/Container';
import ContactForm from './component/ContactForm/ContactForm';
import Filter from './component/Filter/filter';
import ContactList from './component/ContactList/ContactList';

class App extends React.Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  // Добавляет контакт 
    addContact = newContact => {
      const {contacts} = this.state
  // Проверка на дубликат
    const duplicateName = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase(),
    );

    if (duplicateName) {
      alert(`${newContact.name} is already on contacts`);
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  // Следит за полем фильтрации и пишет в стейт
  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  // Фильтрует и возвращает результат фильтра
  filterContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase()),
    );
  };

  // Удаляет контакт
  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  componentDidMount() {
  console.log('App componentDidMount');

  // const contacts = JSON.parse(localStorage.getItem('contacts'));
const saveContacts = localStorage.getItem('contacts');
console.log(saveContacts);

    if (!saveContacts) return;
const contacts = JSON.parse(saveContacts);
    this.setState({ contacts });
    
  // const parsedContacts = JSON.parse(contacts);
  // this.setState({ contacts: parsedContacts });

  // if (parsedContacts) {
  //   this.setState({ contacts: parsedContacts});
  // }
 }

  componentDidUpdate(prevProps, prevState) {
    console.log('App componentDidUpdate');
    
  if (this.state.contacts !== prevState.todos) {
    console.log('Обновилось поле contacts');

    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }
  }

  render() {
    const { filter } = this.state;
    const filteredResults = this.filterContacts();

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={filteredResults}
          onDeleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}

export default App;
