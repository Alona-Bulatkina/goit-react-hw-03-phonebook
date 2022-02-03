import React from "react";
import { DeleteButton, List, Name } from './ContactItem.styled';

// Принимает один контакт и метод для удаления контакта
const ContactItem = ({ contact, onDeleteContact }) => {
    return (
      <List>
        <Name>{contact.name}: </Name>
        <a href={`tel:${contact.number}`}>
          {contact.number}
        </a>
        <DeleteButton
          type="button"
          onClick={() => onDeleteContact(contact.id)} // Метод на клике, принимает ID контакта
        >
          Delete
        </DeleteButton>
      </List>
    );
  };
  
  export default ContactItem;