using DataBaseImpl;


namespace DataRepository
{
    public interface IContactRepository : IGenericRepository<Contact>
    {
        Contact GetContact(int AddressId);
        void AddContact(Contact candidate);
        void EditContact(Contact candidate);
        void SaveContact();
    }
}
