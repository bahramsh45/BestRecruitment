using DataBaseImpl;
using System.Collections.Generic;

namespace DataRepository
{
    public interface ICandidateCertificationRepository : IGenericRepository<CandidateCertification>
    {
        List<CandidateCertification> GetCandidateCertifications(int CandidateId);
        CandidateCertification GetCandidateCertification(int Id);
        int AddCandidateCertification(CandidateCertification candidateCertification);
        void DeleteCandidateCertification(CandidateCertification candidateCertification);
        void EditCandidateCertification(CandidateCertification candidateCertification);
        void SaveCandidateCertification();
    }
}
