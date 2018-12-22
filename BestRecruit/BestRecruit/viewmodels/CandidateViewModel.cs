using DataBaseImpl;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BestRecruit.viewmodels
{
    public class CandidateViewModel
    {
        public Candidate candidate { get; set; }
        public Address address { get; set; }
        public Contact contact { get; set; }
    }
}
