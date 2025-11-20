using Microsoft.AspNetCore.Mvc;
using Portal.Filters;

namespace Portal.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [ServiceFilter(typeof(AuthorizationFilter))]
    public class GladosController : Controller
    {

        [HttpGet]
        public IActionResult Get()
        {


            return Ok("Some glados quote");
        }
    }
}
