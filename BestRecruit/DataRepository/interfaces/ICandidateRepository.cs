using DataBaseImpl;


namespace DataRepository
{
    public interface ICandidateRepository : IGenericRepository<Candidate>
    {
        bool IsPasswordValid(string PassWord);
        Candidate GetCandidate(int CandidateId);
        int AddCandidate(Candidate candidate);
        void EditCandidate(Candidate candidate);
        void SaveCandidate();
    }
}
