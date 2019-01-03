using DataBaseImpl;


namespace DataRepository
{
    public interface IAddressRepository : IGenericRepository<Address>
    {
        Address GetAddress(int AddressId);
        int AddAddress(Address candidate);
        void EditAddress(Address candidate);
        void SaveAddress();
    }
}
