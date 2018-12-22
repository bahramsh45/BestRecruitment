namespace DataBaseImpl
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
 

    [Table("CandidateResume")]
    public partial class CandidateResume
    {
        public int Id { get; set; }

        public int CandidateId { get; set; }

        [StringLength(200)]
        public string Name { get; set; }

        [StringLength(250)]
        public string Path { get; set; }

        public bool? Active { get; set; }

        [StringLength(20)]
        public string Status { get; set; }

        public virtual Candidate Candidate { get; set; }
    }
}
