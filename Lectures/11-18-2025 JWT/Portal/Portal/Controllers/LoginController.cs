using Microsoft.AspNetCore.Mvc;
using Portal.Services;
using System.Security.Claims;

namespace Portal.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LoginController : Controller
    {
        private readonly SecurityProvider securityProvider;

        public LoginController(SecurityProvider securityProvider)
        {
            this.securityProvider = securityProvider;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var claims = new List<Claim>() { new Claim("username", "yacste") };
            var token = securityProvider.GetToken(claims);

            return new ContentResult()
            {
                Content = token
            };
        }
    }
}
