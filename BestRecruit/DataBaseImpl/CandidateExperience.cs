namespace DataBaseImpl
{
    using System;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;


    [Table("CandidateExperience")]
    public partial class CandidateExperience
    {
        public int Id { get; set; }

        public int CandidateId { get; set; }

        [StringLength(100)]
        public string EmployerName { get; set; }

        public DateTime? StartDate { get; set; }

        public DateTime? EndDate { get; set; }

        public string Description { get; set; }

        public virtual Candidate Candidate { get; set; }
    }
}
