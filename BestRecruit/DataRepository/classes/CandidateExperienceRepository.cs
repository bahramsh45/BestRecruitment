
using DataBaseImpl;
using System.Collections.Generic;
using System.Linq;

namespace DataRepository
{
    public class CandidateExperienceRepository : GenericRepository<Recruitment, CandidateExperience>, ICandidateExperienceRepository
    {
        public void AddCandidateExperience(CandidateExperience candidateExperience)
        {
            Add(candidateExperience);
        }

        public void EditCandidateExperience(CandidateExperience candidateExperience)
        {
            Edit(candidateExperience);
        }

        public List<CandidateExperience> GetCandidateExperiences(int CandidateId)
        {
            var query = GetAll().Where(x => x.CandidateId == CandidateId).ToList();
            return query;
        }

        public CandidateExperience GetCandidateExperience(int Id)
        {
            var query = GetAll().FirstOrDefault(x => x.Id == Id);
            return query;
        }

        public void SaveCandidateExperience()
        {
            Save();
        }

       
    }
}
