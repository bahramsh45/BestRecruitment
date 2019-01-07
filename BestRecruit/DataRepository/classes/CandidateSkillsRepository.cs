
using DataBaseImpl;
using System.Collections.Generic;
using System.Linq;

namespace DataRepository
{
    public class CandidateSkillsRepository : GenericRepository<Recruitment, CandidateSkill>, ICandidateSkillsRepository
    {
        public int AddCandidateSkill(CandidateSkill candidateSkill)
        {
            Add(candidateSkill);
           
            Save();
            return candidateSkill.Id;
        }

        public void DeleteCandidateSkill(CandidateSkill candidateSkill)
        {
            Delete(candidateSkill);
            Save();
        }

        public void EditCandidateSkill(CandidateSkill candidateSkill)
        {
            Edit(candidateSkill);
            Save();
        }

        public List<CandidateSkill> GetCandidateSkills(int CandidateId)
        {
            var query = GetAll().Where(x => x.CandidateId == CandidateId).ToList();
            return query;
        }

        public CandidateSkill GetCandidateSkill(int Id)
        {
            var query = GetAll().FirstOrDefault(x => x.Id == Id);
            return query;
        }

        public void SaveCandidateSkill()
        {
            Save();
        }

       
    }
}
