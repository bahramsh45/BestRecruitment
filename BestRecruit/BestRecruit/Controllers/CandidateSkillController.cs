
using Microsoft.AspNetCore.Mvc;
using DataBaseImpl;
using DataRepository;
using Microsoft.AspNetCore.Http;

namespace BestRecruit.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CandidateSkillController : ControllerBase
    {
        ICandidateSkillsRepository _candidateSkillsRepository;

        public CandidateSkillController(
                                   ICandidateSkillsRepository candidateSkillsRepository)
        {
            _candidateSkillsRepository = candidateSkillsRepository;
        }
        
        [HttpGet]
        [Route("GetCandidateSkills/{id}")]
        public IActionResult GetCandidateSkills(int id)
        {
            var result = _candidateSkillsRepository.GetCandidateSkills(id);
            return Ok(result);
        }

        [HttpGet]
        [Route("GetCandidateSkill/{id}")]
        public IActionResult GetCandidateEducation([FromRoute] int id)
        {
            var result = _candidateSkillsRepository.GetCandidateSkill(id);
            return Ok(result);
        }


        [HttpPost]
        public IActionResult PostCandidateSkill([FromBody] CandidateSkill candidateSkill)
        {
            candidateSkill.CandidateId = HttpContext.Session.GetInt32("CandidateId").Value;
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            candidateSkill.Id = _candidateSkillsRepository.AddCandidateSkill(candidateSkill);

            return CreatedAtAction("PostCandidateSkill", new { id = candidateSkill.Id }, candidateSkill);
        }


        [HttpPut]
        public IActionResult PutCandidateSkill([FromBody] CandidateSkill candidateSkill)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);

            }

            _candidateSkillsRepository.EditCandidateSkill(candidateSkill);


            return Ok(candidateSkill);
        }




        [HttpDelete]
        [Route("DeleteCandidateSkill/{id}")]
        public IActionResult DeleteCandidateSkill([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var candidateSkill = _candidateSkillsRepository.GetCandidateSkill(id);
            if (candidateSkill == null)
            {
                return NotFound();
            }

            _candidateSkillsRepository.DeleteCandidateSkill(candidateSkill);
           

            return Ok(candidateSkill);
        }
    }
}

        