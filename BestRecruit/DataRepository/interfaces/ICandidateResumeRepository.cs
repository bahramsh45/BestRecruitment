using DataBaseImpl;
using System.Collections.Generic;

namespace DataRepository
{
    public interface ICandidateResumeRepository : IGenericRepository<CandidateResume>
    {
        List<CandidateResume> GetCandidateResumes(int CandidateId);
        CandidateResume GetCandidateResume(int Id);
        int AddCandidateResume(CandidateResume candidateResume);
        void DeleteCandidateResume(CandidateResume candidateResume);
        void EditCandidateResume(CandidateResume candidateResume);
        void SaveCandidateResume();
    }
}
