namespace DataBaseImpl
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("CandidateCertification")]
    public partial class CandidateCertification
    {
        public int Id { get; set; }

        public int CandidateId { get; set; }

        [StringLength(200)]
        public string CertificationName { get; set; }

        public int? Year { get; set; }

        public virtual Candidate Candidate { get; set; }
    }
}
