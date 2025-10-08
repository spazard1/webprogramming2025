using Mario.Services;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace Mario.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class MarioController : Controller
    {
        private readonly MarioService marioService;

        public MarioController(MarioService marioService)
        {
            this.marioService = marioService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAsync()
        {
            try
            {
                return Json(await marioService.GetMarioLevelStatusAsync());
            }
            catch (Exception)
            {
                return new ContentResult()
                {
                    StatusCode = (int)HttpStatusCode.OK,
                    Content = "Mario died."
                };
            }
        }
    }
}
