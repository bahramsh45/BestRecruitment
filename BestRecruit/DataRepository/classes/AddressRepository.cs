
using DataBaseImpl;
using System.Linq;

namespace DataRepository
{
    public class AddressRepository : GenericRepository<Recruitment, Address>, IAddressRepository
    {
        public void AddAddress(Address address)
        {
            Add(address);
        }

        public void EditAddress(Address address)
        {
            Edit(address);
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
