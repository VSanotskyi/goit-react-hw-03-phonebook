const SearchContact = ({ getContactForSearch }) => {
  return (
    <input type='text'
           onChange={({ target: { value } }) => getContactForSearch(value)}
    />
  );
};

export default SearchContact;
