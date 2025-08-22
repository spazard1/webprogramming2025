using DependencyInjection.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.Filters;

namespace DependencyInjection.Filters
{
    public class RequestIdFilter : IActionFilter
    {
        private readonly string localId;

        public RequestIdFilter()
        {
            localId = "local-id";
        }

        public void OnActionExecuted(ActionExecutedContext context)
        {
            /*
			* TODO: This should use an IRequestIdGenerator, which is an interface that still needs to be created.
			*/
            ConsoleLogger.Instance.Log("Adding a request-id to the response: " + localId);
            context.HttpContext.Response.Headers.Append("request-id", new string[] { localId });
        }

        public void OnActionExecuting(ActionExecutingContext context)
        {
            // nothing to do here, but have to have this method because the interface requires it
        }
    }
}
