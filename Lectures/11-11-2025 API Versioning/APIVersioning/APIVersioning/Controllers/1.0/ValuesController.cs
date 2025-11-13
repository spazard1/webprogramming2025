using APIVersioning.Entities.V1U0;
using Asp.Versioning;
using Microsoft.AspNetCore.Mvc;

namespace APIVersioning.Controllers.V1U0
{
    [ApiController]
    [Route("api/[controller]")]
    [ApiVersion(1.0)]
    public class ValuesController : Controller
    {
        [HttpGet]
        public IActionResult Get()
        {
            return Json(new ValueEntity());
        }

        [HttpPost]
        public IActionResult Post([FromBody] ValueEntity valueEntity)
        {
            // pretend we are saving to the database and then returning an entity based on that model.
            return Json(valueEntity.ToModel());
        }
    }
}
