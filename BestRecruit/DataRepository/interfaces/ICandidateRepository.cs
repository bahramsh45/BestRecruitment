using DataBaseImpl;


namespace DataRepository
{
    public interface ICandidateRepository : IGenericRepository<Candidate>
    {
        int AuthenticateUser(string userName, string passWord);
        Candidate GetCandidate(int CandidateId);
        int AddCandidate(Candidate candidate);
        void EditCandidate(Candidate candidate);
        void SaveCandidate();
    }
}
