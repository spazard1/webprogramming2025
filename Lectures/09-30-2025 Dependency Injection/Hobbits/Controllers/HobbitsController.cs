using Hobbits.Entities;
using Hobbits.Services;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace Hobbits.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class HobbitsController : Controller
    {
        private static readonly HobbitsDatabase hobbitsDatabase = new();


        [HttpGet]
        public IActionResult Get()
        {
            var hobbits = hobbitsDatabase.GetAll().Select(hobbit => new HobbitEntity(hobbit));

            return Json(hobbits);
        }

        [HttpGet("{index:int}")]
        public IActionResult Get(int index)
        {
            if (index < 0 || index >= hobbitsDatabase.Count)
            {
                return StatusCode((int)HttpStatusCode.NotFound);
            }

            return Json(new HobbitEntity(hobbitsDatabase.Get(index)));
        }

        [HttpPost]
        public IActionResult Post([FromBody] HobbitEntity hobbitEntity)
        {
            hobbitsDatabase.Add(hobbitEntity.ToModel());

            return Json(hobbitEntity);
        }
    }
}