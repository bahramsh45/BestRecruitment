namespace DataBaseImpl
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;


    [Table("CandidateSkill")]
    public partial class CandidateSkill
    {
        public int Id { get; set; }

        public int CandidateId { get; set; }

        [StringLength(100)]
        public string SkillName { get; set; }

        public int? YearsOfExperience { get; set; }

        public int? LastYearUsed { get; set; }

        public virtual Candidate Candidate { get; set; }
    }
}
