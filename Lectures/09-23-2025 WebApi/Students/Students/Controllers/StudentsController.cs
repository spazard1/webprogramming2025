using Microsoft.AspNetCore.Mvc;
using Students.Entities;
using Students.Models;
using System.Net;

namespace Students.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class StudentsController : Controller
    {

        /*
         * THIS IS WRONG. We have a MUCH better way of doing this once we know dependency injection.
         */
        private static List<StudentModel> students = new List<StudentModel>();

        [HttpGet]
        public StudentsEntity Get()
        {
            return new StudentsEntity()
            {
                Students = students.Select(student => new StudentEntity(student)).ToList()
            };
        }

        [HttpPost]
        public StudentEntity Post(StudentEntity studentEntity)
        {
            students.Add(studentEntity.ToModel());

            return studentEntity;
        }

        [HttpPut("{index:int}")]
        public IActionResult Put(int index, StudentEntity studentEntity)
        {
            if (index < 0 || index >= students.Count)
            {
                return StatusCode((int)HttpStatusCode.NotFound);
            }

            students[index] = studentEntity.ToModel();

            return Json(studentEntity);
        }

        [HttpDelete("{index:int}")]
        public IActionResult Delete(int index)
        {
            if (index < 0 || index >= students.Count)
            {
                return StatusCode((int)HttpStatusCode.NotFound);
            }

            students.RemoveAt(index);

            return StatusCode((int)HttpStatusCode.NoContent);
        }

        [HttpPatch("{index:int}")]
        public IActionResult Patch(int index, StudentEntity studentEntity)
        {
            if (index < 0 || index >= students.Count)
            {
                return StatusCode((int)HttpStatusCode.NotFound);
            }

            /*
             * This will not work because the fields are required.
             * This method will not work with the entity class as it is currently written.
             */

            if (!string.IsNullOrWhiteSpace(studentEntity.FirstName))
            {
                students[index].FirstName = studentEntity.FirstName;
            }

            if (!string.IsNullOrWhiteSpace(studentEntity.LastName))
            {
                students[index].LastName = studentEntity.LastName;
            }

            return Json(studentEntity);
        }
    }
}
