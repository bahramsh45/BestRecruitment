
using Microsoft.AspNetCore.Mvc;
using DataBaseImpl;
using DataRepository;
using Microsoft.AspNetCore.Http;

namespace BestRecruit.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CandidateEducationController : ControllerBase
    {
        ICandidateEducationRepository _candidateEducationRepository;

        public CandidateEducationController(
                                   ICandidateEducationRepository candidateEducationRepository)
        {
            _candidateEducationRepository = candidateEducationRepository;
        }
        
        [HttpGet]
        [Route("GetCandidateEducations")]
        public IActionResult GetCandidateEducations()
        {
            var id = HttpContext.Session.GetInt32("CandidateId").Value;
            var result = _candidateEducationRepository.GetCandidateEducations(id);
            return Ok(result);
        }

        [HttpGet]
        [Route("GetCandidateEducation/{id}")]
        public IActionResult GetCandidateEducation([FromRoute] int id)
        {
            var result = _candidateEducationRepository.GetCandidateEducation(id);
            return Ok(result);
        }


        [HttpPost]
        public IActionResult PostCandidateEducation([FromBody] CandidateEducation candidateEducation)
        {
            candidateEducation.CandidateId = HttpContext.Session.GetInt32("CandidateId").Value;
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            candidateEducation.Id = _candidateEducationRepository.AddCandidateEducation(candidateEducation);

            return CreatedAtAction("PostCandidateEducation", new { id = candidateEducation.Id }, candidateEducation);
        }


        [HttpPut]
        public IActionResult PutCandidateEducation([FromBody] CandidateEducation candidateEducation)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);

            }

            _candidateEducationRepository.EditCandidateEducation(candidateEducation);


            return Ok(candidateEducation);
        }




        [HttpDelete]
        [Route("DeleteCandidateEducation/{id}")]
        public IActionResult DeleteCandidateEducation([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var candidateEducation = _candidateEducationRepository.GetCandidateEducation(id);
            if (candidateEducation == null)
            {
                return NotFound();
            }

            _candidateEducationRepository.DeleteCandidateEducation(candidateEducation);
           

            return Ok(candidateEducation);
        }
    }
}

        