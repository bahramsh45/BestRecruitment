using DataBaseImpl;
using System.Collections.Generic;

namespace DataRepository
{
    public interface ICandidateExperienceRepository : IGenericRepository<CandidateExperience>
    {
        List<CandidateExperience> GetCandidateExperiences(int CandidateId);
        CandidateExperience GetCandidateExperience(int Id);
        int AddCandidateExperience(CandidateExperience candidateExperience);
        void DeleteCandidateExperience(CandidateExperience candidateExperience);
        void EditCandidateExperience(CandidateExperience candidateExperience);
        void SaveCandidateExperience();
    }
}
