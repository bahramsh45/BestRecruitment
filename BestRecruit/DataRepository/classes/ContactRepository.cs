
using DataBaseImpl;
using System.Linq;

namespace DataRepository
{
    public class ContactRepository : GenericRepository<Recruitment, Contact>, IContactRepository
    {
        public void AddContact(Contact contact)
        {
            Add(contact);
        }

        public void EditContact(Contact contact)
        {
            Edit(contact);
        }

        public Contact GetContact(int ContactId)
        {
            var query = GetAll().FirstOrDefault(x => x.Id == ContactId);
            return query;
        }

        public void SaveContact()
        {
            Save();
        }

       
    }
}
