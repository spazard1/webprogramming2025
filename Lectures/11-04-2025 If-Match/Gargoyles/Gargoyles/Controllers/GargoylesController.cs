using Gargoyles.Entities;
using Gargoyles.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Primitives;
using System.Net;

namespace Gargoyles.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class GargoylesController : Controller
    {
        private readonly GargoylesDatabase database;

        public GargoylesController(GargoylesDatabase database)
        {
            this.database = database;
        }

        [HttpGet("{name}")]
        public IActionResult Get(string name)
        {
            var gargoyleModel = database.Get(name);

            if (gargoyleModel == null)
            {
                return NotFound();
            }

            Response.Headers["ETag"] = gargoyleModel.ETag();

            return Json(new GargoyleEntity(gargoyleModel));
        }

        [HttpPut("{name}")]
        public IActionResult Put(string name, [FromBody] GargoyleEntity gargoyleEntity)
        {
            if (name != gargoyleEntity.Name)
            {
                return BadRequest();
            }

            var gargoyleModel = this.database.Get(name);

            if (gargoyleModel != null)
            {
                if (Request.Headers.TryGetValue("if-match", out StringValues ifMatch))
                {
                    if (ifMatch != gargoyleModel.ETag())
                    {
                        return StatusCode((int)HttpStatusCode.PreconditionFailed);
                    }
                }
                else
                {
                    return StatusCode((int)HttpStatusCode.PreconditionFailed);
                }
            }

            var newGargoyleModel = gargoyleEntity.ToModel();
            this.database.AddOrReplace(newGargoyleModel);
            return Json(new GargoyleEntity(newGargoyleModel));
        }
    }
}
