import css from './ContactForm.module.css';

export function ContactForm({ contacts, addFilter, filter, deleteContact }) {
  const filteredContacts = contacts.filter(cont =>
    cont.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div className={css.contacts_section}>
      <h2>Contacts list</h2>
      <input
        type="text"
        name="filter"
        onInput={event => {
          addFilter(event.target.value);
        }}
      />
      <ul className={css.contacts_list}>
        {filteredContacts.map(cont => (
          <li key={cont.id} className={css.contacts_item}>
            <span>
              {cont.name}: {cont.number}
            </span>
            <button
              id={cont.id}
              className={css.btn_contact}
              type="button"
              onClick={submit => {
                deleteContact(submit);
              }}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
