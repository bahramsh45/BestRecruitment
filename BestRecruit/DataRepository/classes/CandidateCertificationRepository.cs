
using DataBaseImpl;
using System.Collections.Generic;
using System.Linq;

namespace DataRepository
{
    public class CandidateCertificationRepository : GenericRepository<Recruitment, CandidateCertification>, ICandidateCertificationRepository
    {
        public int AddCandidateCertification(CandidateCertification candidateCertification)
        {
            Add(candidateCertification);
           
            Save();
            return candidateCertification.Id;
        }

        public void DeleteCandidateCertification(CandidateCertification candidateCertification)
        {
            Delete(candidateCertification);
            Save();
        }

        public void EditCandidateCertification(CandidateCertification candidateCertification)
        {
            Edit(candidateCertification);
            Save();
        }

        public List<CandidateCertification> GetCandidateCertifications(int CandidateId)
        {
            var query = GetAll().Where(x => x.CandidateId == CandidateId).ToList();
            return query;
        }

        public CandidateCertification GetCandidateCertification(int Id)
        {
            var query = GetAll().FirstOrDefault(x => x.Id == Id);
            return query;
        }

        public void SaveCandidateCertification()
        {
            Save();
        }

       
    }
}
