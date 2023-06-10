import { ContactItem, DeleteBtn } from './Contact__List.styled';
import { BsFillBookmarkCheckFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectError, selectVisibleContacts } from 'redux/selectors';

const ContactsList = () => {
  const dispatch = useDispatch(); 
  const error = useSelector(selectError);
  const userFilteredContacts = useSelector(selectVisibleContacts);
  
  return (
    <ul>
      {userFilteredContacts && !error &&
        userFilteredContacts.map(({ id, name, phone }) => {
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
