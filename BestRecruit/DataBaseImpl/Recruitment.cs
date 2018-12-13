namespace DataBaseImpl
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class Recruitment : DbContext
    {
        public Recruitment()
            : base("name=Recruitment")
        {
        }

        public virtual DbSet<Address> Addresses { get; set; }
        public virtual DbSet<Candidate> Candidates { get; set; }
        public virtual DbSet<CandidateCertification> CandidateCertifications { get; set; }
        public virtual DbSet<CandidateEducation> CandidateEducations { get; set; }
        public virtual DbSet<CandidateExperience> CandidateExperiences { get; set; }
        public virtual DbSet<CandidateResume> CandidateResumes { get; set; }
        public virtual DbSet<CandidateSkill> CandidateSkills { get; set; }
        public virtual DbSet<Contact> Contacts { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Address>()
                .Property(e => e.Address1)
                .IsUnicode(false);

            modelBuilder.Entity<Address>()
                .Property(e => e.Address2)
                .IsUnicode(false);

            modelBuilder.Entity<Address>()
                .Property(e => e.Country)
                .IsUnicode(false);

            modelBuilder.Entity<Address>()
                .Property(e => e.City)
                .IsUnicode(false);

            modelBuilder.Entity<Address>()
                .Property(e => e.PostalCode)
                .IsUnicode(false);

            modelBuilder.Entity<Address>()
                .HasMany(e => e.Candidates)
                .WithRequired(e => e.Address)
                .HasForeignKey(e => e.AddrId)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Candidate>()
                .Property(e => e.FirstName)
                .IsUnicode(false);

            modelBuilder.Entity<Candidate>()
                .Property(e => e.LastName)
                .IsUnicode(false);

            modelBuilder.Entity<Candidate>()
                .Property(e => e.EmploymentType)
                .IsUnicode(false);

            modelBuilder.Entity<Candidate>()
                .Property(e => e.Notice)
                .IsUnicode(false);

            modelBuilder.Entity<Candidate>()
                .Property(e => e.Note)
                .IsUnicode(false);

            modelBuilder.Entity<Candidate>()
                .HasMany(e => e.CandidateCertifications)
                .WithRequired(e => e.Candidate)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Candidate>()
                .HasMany(e => e.CandidateEducations)
                .WithRequired(e => e.Candidate)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Candidate>()
                .HasMany(e => e.CandidateExperiences)
                .WithRequired(e => e.Candidate)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Candidate>()
                .HasMany(e => e.CandidateResumes)
                .WithRequired(e => e.Candidate)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Candidate>()
                .HasMany(e => e.CandidateSkills)
                .WithRequired(e => e.Candidate)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<CandidateCertification>()
                .Property(e => e.CertificationName)
                .IsUnicode(false);

            modelBuilder.Entity<CandidateEducation>()
                .Property(e => e.InstitutionName)
                .IsUnicode(false);

            modelBuilder.Entity<CandidateExperience>()
                .Property(e => e.EmployerName)
                .IsUnicode(false);

            modelBuilder.Entity<CandidateExperience>()
                .Property(e => e.Description)
                .IsUnicode(false);

            modelBuilder.Entity<CandidateResume>()
                .Property(e => e.Name)
                .IsUnicode(false);

            modelBuilder.Entity<CandidateResume>()
                .Property(e => e.Path)
                .IsUnicode(false);

            modelBuilder.Entity<CandidateResume>()
                .Property(e => e.Status)
                .IsUnicode(false);

            modelBuilder.Entity<CandidateSkill>()
                .Property(e => e.SkillName)
                .IsUnicode(false);

            modelBuilder.Entity<Contact>()
                .Property(e => e.PhoneNumber)
                .IsUnicode(false);

            modelBuilder.Entity<Contact>()
                .Property(e => e.Mobile)
                .IsUnicode(false);

            modelBuilder.Entity<Contact>()
                .Property(e => e.Fax)
                .IsUnicode(false);

            modelBuilder.Entity<Contact>()
                .Property(e => e.Email)
                .IsUnicode(false);

            modelBuilder.Entity<Contact>()
                .Property(e => e.SkypId)
                .IsUnicode(false);

            modelBuilder.Entity<Contact>()
                .Property(e => e.Notes)
                .IsUnicode(false);

            modelBuilder.Entity<Contact>()
                .HasMany(e => e.Candidates)
                .WithRequired(e => e.Contact)
                .WillCascadeOnDelete(false);
        }
    }
}
