﻿
using Microsoft.AspNetCore.Mvc;
using DataBaseImpl;
using DataRepository;
using BestRecruit.viewmodels;

namespace BestRecruit.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CandidateExperienceController : ControllerBase
    {
        ICandidateExperienceRepository _candidateExperienceRepository;

        public CandidateExperienceController(
                                   ICandidateExperienceRepository candidateExperienceRepository)
        {
            _candidateExperienceRepository = candidateExperienceRepository;
        }
        
        [HttpGet]
        [Route("GetCandidateExperiences/{id}")]
        public IActionResult GetCandidateExperiences(int id)
        {
            var result = _candidateExperienceRepository.GetCandidateExperiences(id);
            return Ok(result);
        }

        [HttpGet]
        [Route("GetCandidateExperience/{id}")]
        public IActionResult GetCandidateExperience([FromRoute] int id)
        {
            var result = _candidateExperienceRepository.GetCandidateExperience(id);
            return Ok(result);
        }


        [HttpPost]
        public IActionResult PostCandidateExperience([FromBody] CandidateExperience candidateExperience)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            candidateExperience.Id = _candidateExperienceRepository.AddCandidateExperience(candidateExperience);

            return CreatedAtAction("PostCandidateExperience", new { id = candidateExperience.Id }, candidateExperience);
        }

        // PUT: api/CandidateExperience/5
        [HttpPut]
        public IActionResult PutCandidateExperience([FromBody] CandidateExperience candidateExperience)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);

            }

            _candidateExperienceRepository.EditCandidateExperience(candidateExperience);

           
            return NoContent();
        }




        [HttpDelete]
        [Route("DeleteCandidateExperience/{id}")]
        public IActionResult DeleteCandidateExperience([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var candidateExperience = _candidateExperienceRepository.GetCandidateExperience(id);
            if (candidateExperience == null)
            {
                return NotFound();
            }

            _candidateExperienceRepository.DeleteCandidateExperience(candidateExperience);
           

            return Ok(candidateExperience);
        }
    }
}

        