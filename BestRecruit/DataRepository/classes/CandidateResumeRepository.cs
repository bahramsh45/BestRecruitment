
using DataBaseImpl;
using System.Collections.Generic;
using System.Linq;

namespace DataRepository
{
    public class CandidateResumeRepository : GenericRepository<Recruitment, CandidateResume>, ICandidateResumeRepository
    {
        public int AddCandidateResume(CandidateResume candidateResume)
        {
            Add(candidateResume);
           
            Save();
            return candidateResume.Id;
        }

        public void DeleteCandidateResume(CandidateResume candidateResume)
        {
            Delete(candidateResume);
            Save();
        }

        public void EditCandidateResume(CandidateResume candidateResume)
        {
            Edit(candidateResume);
            Save();
        }

        public List<CandidateResume> GetCandidateResumes(int CandidateId)
        {
            var query = GetAll().Where(x => x.CandidateId == CandidateId).ToList();
            return query;
        }

        public CandidateResume GetCandidateResume(int Id)
        {
            var query = GetAll().FirstOrDefault(x => x.Id == Id);
            return query;
        }

        public void SaveCandidateResume()
        {
            Save();
        }

       
    }
}
