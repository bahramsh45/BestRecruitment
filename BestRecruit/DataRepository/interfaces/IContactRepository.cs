using DataBaseImpl;


namespace DataRepository
{
    public interface IContactRepository : IGenericRepository<Contact>
    {
        bool IsUserNameValid(string userName);
        Contact GetContact(int AddressId);
        int AddContact(Contact candidate);
        void EditContact(Contact candidate);
        void SaveContact();
    }
}
