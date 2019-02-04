
using Microsoft.AspNetCore.Mvc;
using DataBaseImpl;
using DataRepository;
using Microsoft.AspNetCore.Http;

namespace BestRecruit.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CandidateCertificationController : ControllerBase
    {
        ICandidateCertificationRepository _candidateCertificationRepository;

        public CandidateCertificationController(
                                   ICandidateCertificationRepository candidateCertificationRepository)
        {
            _candidateCertificationRepository = candidateCertificationRepository;
        }
        
        [HttpGet]
        [Route("GetCandidateCertifications/{id}")]
        public IActionResult GetCandidateCertifications(int id)
        {
            var result = _candidateCertificationRepository.GetCandidateCertifications(id);
            return Ok(result);
        }

        [HttpGet]
        [Route("GetCandidateCertification/{id}")]
        public IActionResult GetCandidateCertification([FromRoute] int id)
        {
            var result = _candidateCertificationRepository.GetCandidateCertification(id);
            return Ok(result);
        }


        [HttpPost]
        public IActionResult PostCandidateCertification([FromBody] CandidateCertification candidateCertification)
        {
  
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            candidateCertification.Id = _candidateCertificationRepository.AddCandidateCertification(candidateCertification);

            return CreatedAtAction("PostCandidateCertification", new { id = candidateCertification.Id }, candidateCertification);
        }


        [HttpPut]
        public IActionResult PutCandidateCertification([FromBody] CandidateCertification candidateCertification)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);

            }

            _candidateCertificationRepository.EditCandidateCertification(candidateCertification);


            return Ok(candidateCertification);
        }




        [HttpDelete]
        [Route("DeleteCandidateCertification/{id}")]
        public IActionResult DeleteCandidateCertification([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var candidateCertification = _candidateCertificationRepository.GetCandidateCertification(id);
            if (candidateCertification == null)
            {
                return NotFound();
            }

            _candidateCertificationRepository.DeleteCandidateCertification(candidateCertification);
           

            return Ok(candidateCertification);
        }
    }
}

        