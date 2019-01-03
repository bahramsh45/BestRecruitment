
using DataBaseImpl;
using System.Linq;

namespace DataRepository
{
    public class AddressRepository : GenericRepository<Recruitment, Address>, IAddressRepository
    {
        public int AddAddress(Address address)
        {
            Add(address);
            Save();
            return address.Id;
        }

        public void EditAddress(Address address)
        {
            Edit(address);
            Save();
        }

        public Address GetAddress(int AddressId)
        {
            var query = GetAll().FirstOrDefault(x => x.Id == AddressId);
            return query;
        }

        public void SaveAddress()
        {
            Save();
        }

       
    }
}
