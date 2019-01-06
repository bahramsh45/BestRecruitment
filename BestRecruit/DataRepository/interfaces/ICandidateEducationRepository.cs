using DataBaseImpl;
using System.Collections.Generic;

namespace DataRepository
{
    public interface ICandidateEducationRepository : IGenericRepository<CandidateEducation>
    {
        List<CandidateEducation> GetCandidateEducations(int CandidateId);
        CandidateEducation GetCandidateEducation(int Id);
        int AddCandidateEducation(CandidateEducation candidateEducation);
        void DeleteCandidateEducation(CandidateEducation candidateEducation);
        void EditCandidateEducation(CandidateEducation candidateEducation);
        void SaveCandidateEducation();
    }
}
