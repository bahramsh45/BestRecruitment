
using Microsoft.AspNetCore.Mvc;
using DataBaseImpl;
using DataRepository;
using BestRecruit.viewmodels;

namespace BestRecruit.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CandidatesController : ControllerBase
    {
        ICandidateRepository _candidateRepository;
        IAddressRepository _addressRepository;
        IContactRepository _contactRepository;


        public CandidatesController(ICandidateRepository candidateRepsitory,
                                    IAddressRepository addressRepository,
                                    IContactRepository contactRepository
                                   )
        {
            _candidateRepository = candidateRepsitory;
            _addressRepository = addressRepository;
            _contactRepository = contactRepository;
        }


        [HttpGet]
        [Route("GetCandidate/{id}")]
        public IActionResult GetCandidate([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var candidateVW = new CandidateViewModel();
            var cand = _candidateRepository.GetCandidate(id);
            if (cand != null)
            {
                var addr = _addressRepository.GetAddress(cand.AddrId);
                var cont = _contactRepository.GetContact(cand.ContactId);

                candidateVW = new CandidateViewModel
                {
                    candidate = cand,
                    address = addr,
                    contact = cont
                };
            }

            return Ok(candidateVW);
        }

        
    }
}

        