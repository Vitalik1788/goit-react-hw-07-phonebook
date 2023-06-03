
export const selectContacts = state => state.contacts.items;

export const selectFilter = state => state.filter;



export const selectVisibleContacts = ({ items, filter }) => {
  if (filter === '') {
    return;
  }
  const normalizedFilter = filter.toLowerCase().trim();
  return items.filter(item =>
    item.name.toLowerCase().includes(normalizedFilter)
  );
};


