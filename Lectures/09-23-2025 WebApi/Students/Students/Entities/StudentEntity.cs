using Students.Models;
using System.ComponentModel.DataAnnotations;

namespace Students.Entities
{
    public class StudentEntity
    {
        public StudentEntity()
        {

        }

        public StudentEntity(StudentModel studentModel)
        {
            this.FirstName = studentModel.FirstName;
            this.LastName = studentModel.LastName;
        }

        [MinLength(3)]
        [Required]
        public string? FirstName { get; set; }

        [MinLength(3)]
        [Required]
        public string? LastName { get; set; }

        public StudentModel ToModel()
        {
            return new StudentModel()
            {
                FirstName = this.FirstName,
                LastName = this.LastName
            };
        }
    }
}
