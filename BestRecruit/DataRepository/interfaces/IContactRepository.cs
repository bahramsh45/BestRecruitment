using DataBaseImpl;


namespace DataRepository
{
    public interface IContactRepository : IGenericRepository<Contact>
    {
        Contact GetContact(int AddressId);
        int AddContact(Contact candidate);
        void EditContact(Contact candidate);
        void SaveContact();
    }
}
