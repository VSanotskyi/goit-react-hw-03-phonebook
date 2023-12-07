const ContactItem = ({ id, name, number, deleteContact }) => {
  return (
    <li>
      <p>name: {name}</p>
      <p>number: {number}</p>
      <button type='button'
              onClick={() => deleteContact(id)}
      >Delete
      </button>
    </li>
  );
};

export default ContactItem;
