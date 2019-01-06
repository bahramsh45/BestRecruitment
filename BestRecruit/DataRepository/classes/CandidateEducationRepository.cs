
using DataBaseImpl;
using System.Collections.Generic;
using System.Linq;

namespace DataRepository
{
    public class CandidateEducationRepository : GenericRepository<Recruitment, CandidateEducation>, ICandidateEducationRepository
    {
        public int AddCandidateEducation(CandidateEducation candidateEducation)
        {
            Add(candidateEducation);
           
            Save();
            return candidateEducation.Id;
        }

        public void DeleteCandidateEducation(CandidateEducation candidateEducation)
        {
            Delete(candidateEducation);
            Save();
        }

        public void EditCandidateEducation(CandidateEducation candidateEducation)
        {
            Edit(candidateEducation);
            Save();
        }

        public List<CandidateEducation> GetCandidateEducations(int CandidateId)
        {
            var query = GetAll().Where(x => x.CandidateId == CandidateId).ToList();
            return query;
        }

        public CandidateEducation GetCandidateEducation(int Id)
        {
            var query = GetAll().FirstOrDefault(x => x.Id == Id);
            return query;
        }

        public void SaveCandidateEducation()
        {
            Save();
        }

       
    }
}
