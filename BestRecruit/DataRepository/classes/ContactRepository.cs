
using DataBaseImpl;
using System.Linq;

namespace DataRepository
{
    public class ContactRepository : GenericRepository<Recruitment, Contact>, IContactRepository
    {

        public bool IsUserNameValid(string userName)
        {
            return GetAll().Any(x => x.Email == userName);
        }
        public int AddContact(Contact contact)
        {
            Add(contact);
            Save();
            return contact.Id;
        }

        public void EditContact(Contact contact)
        {
            Edit(contact);
            Save();
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
