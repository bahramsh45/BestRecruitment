﻿
using Microsoft.AspNetCore.Mvc;
using DataRepository;
using BestRecruit.viewmodels;
using Microsoft.AspNetCore.Http;
using BestRecruit.Utility;
using System;

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
        [Route("LoginCandidate")]
        public IActionResult LoginCandidate([FromQuery] string userName, [FromQuery] string passWord)
        {
            var candidate = _candidateRepository.AuthenticateUser(userName,passWord);
            return Ok(candidate);
        }

        [HttpGet]
        [Route("GetCandidate/{id}")]
        public IActionResult GetCandidate(int id)
        {
           // var id = HttpContext.Session.GetInt32("CandidateId").Value;
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


        [HttpPost]
        public IActionResult PostCandidate([FromBody] CandidateViewModel candidateVW)
        {
            int Id;
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            candidateVW.candidate.AddrId = _addressRepository.AddAddress(candidateVW.address);
            candidateVW.candidate.ContactId = _contactRepository.AddContact(candidateVW.contact);
          
            Id = _candidateRepository.AddCandidate(candidateVW.candidate);
            var activationCode = new Guid();
            EmailService.SendVerificationLinkEmail(candidateVW.contact.Email, activationCode.ToString(), "http", "", "");
            

            return CreatedAtAction("PostCandidate", new { id = Id }, candidateVW.candidate);
        }

        [HttpPut]
        public IActionResult PutCandidate([FromBody] CandidateViewModel candidateVW)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);

            }
          
            _candidateRepository.EditCandidate(candidateVW.candidate);
            _addressRepository.EditAddress(candidateVW.address);
            _contactRepository.EditContact(candidateVW.contact);

            return Ok(candidateVW);
        }

    }
}

        