
using Microsoft.AspNetCore.Mvc;
using DataRepository;
using DataBaseImpl;
using BestRecruit.viewmodels;
using System.Collections.Generic;

namespace BestRecruit.Controllers
{
    [Route("api/[controller]")]
    public class CandidateController : Controller
    {
        ICandidateRepository _candidateRepository;
        IAddressRepository _addressRepository;
        IContactRepository _contactRepository;
        ICandidateExperienceRepository _candidateExperienceRepository;

        public CandidateController(ICandidateRepository candidateRepsitory,
                                   IAddressRepository addressRepository,
                                   IContactRepository contactRepository,
                                   ICandidateExperienceRepository candidateExperienceRepository)
        {
            _candidateRepository = candidateRepsitory;
            _addressRepository = addressRepository;
            _contactRepository = contactRepository;
            _candidateExperienceRepository = candidateExperienceRepository;
        }

       
        [HttpGet("[action]")]
        public List<CandidateExperience> GetCandidateExperiences(int id)
        {
            var result = _candidateExperienceRepository.GetCandidateExperiences(id);
            return result;
        }

        [HttpGet("[action]")]
        public CandidateExperience GetCandidateExperience(int id)
        {
            var result = _candidateExperienceRepository.GetCandidateExperience(id);
            return result;
        }


        [HttpGet("[action]")]
        public CandidateViewModel GetCandidate(int id)
        {
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
            return candidateVW;
        }




    }
}
