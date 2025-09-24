using Microsoft.AspNetCore.Mvc;
using Students.Entities;
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
        private static List<StudentEntity> students = new List<StudentEntity>();

        [HttpGet]
        public StudentsEntity Get()
        {
            return new StudentsEntity() { Students = students };
        }

        [HttpPost]
        public StudentEntity Post(StudentEntity studentEntity)
        {
            students.Add(studentEntity);

            return studentEntity;
        }

        [HttpPut("{index:int}")]
        public IActionResult Put(int index, StudentEntity studentEntity)
        {
            if (index < 0 || index >= students.Count)
            {
                return StatusCode((int)HttpStatusCode.NotFound);
            }

            students[index] = studentEntity;

            return Json(studentEntity);
        }
    }
}
