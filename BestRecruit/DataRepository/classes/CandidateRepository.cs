
using DataBaseImpl;
using System.Linq;

namespace DataRepository
{
    public class CandidateRepository : GenericRepository<Recruitment, Candidate>, ICandidateRepository
    {

        public int AuthenticateUser(string userName, string passWord)
        {
            var result = GetAll().FirstOrDefault(x => x.UserName == userName &&  x.Password == passWord); 
            if (result != null)
            {
                return result.Id;
            }

            return 0;
        }

        public int AddCandidate(Candidate candidate)
        {
            Add(candidate);
            Save();
            return candidate.Id;
        }

        public void EditCandidate(Candidate candidate)
        {
            Edit(candidate);
            Save();
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
