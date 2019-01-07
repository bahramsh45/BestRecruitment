using DataBaseImpl;
using System.Collections.Generic;

namespace DataRepository
{
    public interface ICandidateSkillsRepository : IGenericRepository<CandidateSkill>
    {
        List<CandidateSkill> GetCandidateSkills(int CandidateId);
        CandidateSkill GetCandidateSkill(int Id);
        int AddCandidateSkill(CandidateSkill candidateSkill);
        void DeleteCandidateSkill(CandidateSkill candidateSkill);
        void EditCandidateSkill(CandidateSkill candidateSkill);
        void SaveCandidateSkill();
    }
}
