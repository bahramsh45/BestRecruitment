namespace DataBaseImpl
{
   
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
 

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
