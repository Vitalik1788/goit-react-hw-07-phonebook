import { ContactItem, DeleteBtn } from './Contact__List.styled';
import { BsFillBookmarkCheckFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

const ContactsList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectContacts);

  return (
    <ul>
      {filteredContacts &&
        filteredContacts.map(({ id, name, phone }) => {
          return (
            <ContactItem key={id}>
              <BsFillBookmarkCheckFill
                style={{ color: 'blue', marginRight: '15px' }}
              />
              {name}: {phone}
              <DeleteBtn
                type="button"
                onClick={() => dispatch(deleteContact(id))}
              >
                Delete
              </DeleteBtn>
            </ContactItem>
          );
        })}
    </ul>
  );
};

export default ContactsList;
