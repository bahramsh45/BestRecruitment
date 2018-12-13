namespace DataBaseImpl
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("CandidateEducation")]
    public partial class CandidateEducation
    {
        public int Id { get; set; }

        public int CandidateId { get; set; }

        [StringLength(100)]
        public string InstitutionName { get; set; }

        public DateTime? StartDate { get; set; }

        public DateTime? EndDate { get; set; }

        public virtual Candidate Candidate { get; set; }
    }
}
