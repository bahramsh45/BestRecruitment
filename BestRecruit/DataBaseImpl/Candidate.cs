namespace DataBaseImpl
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Candidate")]
    public partial class Candidate
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Candidate()
        {
            CandidateCertifications = new HashSet<CandidateCertification>();
            CandidateEducations = new HashSet<CandidateEducation>();
            CandidateExperiences = new HashSet<CandidateExperience>();
            CandidateResumes = new HashSet<CandidateResume>();
            CandidateSkills = new HashSet<CandidateSkill>();
        }

        public int Id { get; set; }

        [StringLength(50)]
        public string FirstName { get; set; }

        [StringLength(50)]
        public string LastName { get; set; }

        public int AddrId { get; set; }

        public int ContactId { get; set; }

        public bool? Authorized { get; set; }

        public bool? Relocation { get; set; }

        [StringLength(50)]
        public string EmploymentType { get; set; }

        public int? Rate { get; set; }

        public int? Salary { get; set; }

        public DateTime? ReaddyToWorkDate { get; set; }

        [StringLength(50)]
        public string Notice { get; set; }

        [StringLength(250)]
        public string Note { get; set; }

        public virtual Address Address { get; set; }

        public virtual Contact Contact { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<CandidateCertification> CandidateCertifications { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<CandidateEducation> CandidateEducations { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<CandidateExperience> CandidateExperiences { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<CandidateResume> CandidateResumes { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<CandidateSkill> CandidateSkills { get; set; }
    }
}
