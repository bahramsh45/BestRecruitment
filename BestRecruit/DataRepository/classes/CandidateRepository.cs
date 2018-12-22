
using DataBaseImpl;
using System.Linq;

namespace DataRepository
{
    public class CandidateRepository : GenericRepository<Recruitment, Candidate>, ICandidateRepository
    {
        public void AddCandidate(Candidate candidate)
        {
            Add(candidate);
        }

        public void EditCandidate(Candidate candidate)
        {
            Edit(candidate);
        }

        public Candidate GetCandidate(int CandidateId)
        {
            if (CandidateId == 0)
            {
                return new Candidate();
            }
            var query = GetAll().FirstOrDefault(x => x.Id == CandidateId);
            return query;
        }

        public void SaveCandidate()
        {
            Save();
        }

       
    }
}
