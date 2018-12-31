﻿using DataBaseImpl;


namespace DataRepository
{
    public interface ICandidateRepository : IGenericRepository<Candidate>
    {
        Candidate GetCandidate(int CandidateId);
        void AddCandidate(Candidate candidate);
        void EditCandidate(Candidate candidate);
        void SaveCandidate();
    }
}