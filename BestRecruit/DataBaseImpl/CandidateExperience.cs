//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DataBaseImpl
{
    using System;
    using System.Collections.Generic;
    
    public partial class CandidateExperience
    {
        public int Id { get; set; }
        public int CandidateId { get; set; }
        public string EmployerName { get; set; }
        public Nullable<System.DateTime> StartDate { get; set; }
        public Nullable<System.DateTime> EndDate { get; set; }
        public string Description { get; set; }
    
        public virtual Candidate Candidate { get; set; }
    }
}
