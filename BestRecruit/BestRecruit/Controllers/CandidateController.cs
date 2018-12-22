
using Microsoft.AspNetCore.Mvc;
using DataRepository;
using DataBaseImpl;
using BestRecruit.viewmodels;

namespace BestRecruit.Controllers
{
    [Route("api/[controller]")]
    public class CandidateController : Controller
    {
        ICandidateRepository _candidateRepository;
        IAddressRepository _addressRepository;
        IContactRepository _contactRepository;

        public CandidateController(ICandidateRepository candidateRepsitory,IAddressRepository addressRepository,IContactRepository contactRepository)
        {
            _candidateRepository = candidateRepsitory;
            _addressRepository = addressRepository;
            _contactRepository = contactRepository;
        }

       
        [HttpGet("[action]")]
        public CandidateViewModel GetCandidate(int id)
        {
            var candidateVW = new CandidateViewModel();
            var cand = _candidateRepository.GetCandidate(id);
            if (cand != null){
                var addr = _addressRepository.GetAddress(cand.AddrId);
                var cont = _contactRepository.GetContact(cand.ContactId);

                candidateVW = new CandidateViewModel
                {
                    candidate = cand,
                    address = addr,
                    contact = cont
                };
            }
            return candidateVW;
        }

        


    }
}
