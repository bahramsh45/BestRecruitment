
using Microsoft.AspNetCore.Mvc;
using DataBaseImpl;
using DataRepository;
using Microsoft.AspNetCore.Http;

namespace BestRecruit.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CandidateResumeController : ControllerBase
    {
        ICandidateResumeRepository _candidateResumeRepository;

        public CandidateResumeController(
                                   ICandidateResumeRepository candidateResumeRepository)
        {
            _candidateResumeRepository = candidateResumeRepository;
        }
        
        [HttpGet]
        [Route("GetCandidateResumes")]
        public IActionResult GetCandidateResumes()
        {
            var id = HttpContext.Session.GetInt32("CandidateId").Value;
            var result = _candidateResumeRepository.GetCandidateResumes(id);
            return Ok(result);
        }

        [HttpGet]
        [Route("GetCandidateResume/{id}")]
        public IActionResult GetCandidateResume([FromRoute] int id)
        {
            var result = _candidateResumeRepository.GetCandidateResume(id);
            return Ok(result);
        }


        [HttpPost]
        public IActionResult PostCandidateResume([FromBody] CandidateResume candidateResume)
        {
            candidateResume.CandidateId = HttpContext.Session.GetInt32("CandidateId").Value;
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            candidateResume.Id = _candidateResumeRepository.AddCandidateResume(candidateResume);

            return CreatedAtAction("PostCandidateResume", new { id = candidateResume.Id }, candidateResume);
        }


        [HttpPut]
        public IActionResult PutCandidateResume([FromBody] CandidateResume candidateResume)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);

            }

            _candidateResumeRepository.EditCandidateResume(candidateResume);


            return Ok(candidateResume);
        }




        [HttpDelete]
        [Route("DeleteCandidateResume/{id}")]
        public IActionResult DeleteCandidateResume([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var candidateResume = _candidateResumeRepository.GetCandidateResume(id);
            if (candidateResume == null)
            {
                return NotFound();
            }

            _candidateResumeRepository.DeleteCandidateResume(candidateResume);
           

            return Ok(candidateResume);
        }
    }
}

        