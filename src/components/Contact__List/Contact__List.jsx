import { ContactItem, DeleteBtn } from './Contact__List.styled';
import { BsFillBookmarkCheckFill } from 'react-icons/bs';
// import { removeUserContact } from 'redux/contactsReducer';
import {  useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';

const ContactsList = () => {
  // const dispatch = useDispatch();
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
                // onClick={() => dispatch(removeUserContact(id))}
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
