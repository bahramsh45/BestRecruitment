namespace DataBaseImpl
{
    using System;

    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;


    [Table("CandidateEducation")]
    public partial class CandidateEducation
    {
        public int Id { get; set; }

        public int CandidateId { get; set; }

        [StringLength(100)]
        public string InstitutionName { get; set; }

        public DateTime? StartDate { get; set; }

        public DateTime? EndDate { get; set; }

        [StringLength(50)]
        public string Degree { get; set; }

        public virtual Candidate Candidate { get; set; }
    }
}
