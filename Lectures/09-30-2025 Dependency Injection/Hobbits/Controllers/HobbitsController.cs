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
        private readonly HobbitLogger hobbitLogger;
        private readonly HobbitsDatabase hobbitsDatabase;

        public HobbitsController(HobbitLogger hobbitLogger, HobbitsDatabase hobbitsDatabase)
        {
            this.hobbitLogger = hobbitLogger;
            this.hobbitsDatabase = hobbitsDatabase;
        }

        [HttpGet]
        public IActionResult Get()
        {
            hobbitLogger.Log("Starting GET");

            var hobbits = hobbitsDatabase.GetAll().Select(hobbit => new HobbitEntity(hobbit));

            hobbitLogger.Log("Ending GET");

            return Json(hobbits);
        }

        [HttpGet("{index:int}")]
        public IActionResult Get(int index)
        {
            hobbitLogger.Log("Starting GET ONE");

            if (index < 0 || index >= hobbitsDatabase.Count)
            {
                return StatusCode((int)HttpStatusCode.NotFound);
            }

            hobbitLogger.Log("Ending GET ONE");

            return Json(new HobbitEntity(hobbitsDatabase.Get(index)));
        }

        [HttpPost]
        public IActionResult Post([FromBody] HobbitEntity hobbitEntity)
        {
            hobbitLogger.Log("Starting POST");

            hobbitsDatabase.Add(hobbitEntity.ToModel());

            hobbitLogger.Log("Ending POST");
            return Json(hobbitEntity);
        }
    }
}