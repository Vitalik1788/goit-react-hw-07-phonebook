import { ContactItem, DeleteBtn } from './Contact__List.styled';
import { BsFillBookmarkCheckFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { deleteContact } from 'redux/operations';
import { selectFilter, selectContacts, selectError } from 'redux/selectors';

const ContactsList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const items = useSelector(selectContacts);
  const error = useSelector(selectError);

  const selectVisibleContacts = () => {
  if (items.length === 0) {
    return;
  }
  const normalizedFilter = filter.toLowerCase().trim();
  return items.filter(item =>
    item.name.toLowerCase().includes(normalizedFilter)
  );
};

  const userFilteredContacts = selectVisibleContacts();
  
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
                onClick={() => { dispatch(deleteContact(id)); toast.success('Contact was delete') }}
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
