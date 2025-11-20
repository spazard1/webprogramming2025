using Microsoft.AspNetCore.Mvc.Filters;
using Portal.Services;

namespace Portal.Filters
{
    public class AuthorizationFilter : IAuthorizationFilter
    {
        private readonly SecurityProvider securityProvider;

        public AuthorizationFilter(SecurityProvider securityProvider)
        {
            this.securityProvider = securityProvider;
        }

        public void OnAuthorization(AuthorizationFilterContext context)
        {
            if (!context.HttpContext.Request.Headers.TryGetValue("Authorization", out var token))
            {
                // somehow stop the request here and return a 401
                return;
            }

            var authorization = token.ToString();

            if (!authorization.StartsWith("Bearer "))  {
                // somehow stop the request here and return a 401
                return;
            }

            authorization = authorization[7..];

            if (!securityProvider.ValidateToken(authorization))
            {
                // somehow stop the request here and return a 401
                return;
            }

            // if the code gets here, the request is authorized
        }
    }
}
