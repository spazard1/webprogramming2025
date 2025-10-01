using Hobbits.Services;
using Microsoft.AspNetCore.Mvc.Filters;

namespace Hobbits.Filters
{
    public class RequestLoggingFilter : IActionFilter
    {
        private readonly HobbitLogger hobbitLogger;

        public RequestLoggingFilter(HobbitLogger hobbitLogger)
        {
            this.hobbitLogger = hobbitLogger;
        }

        public void OnActionExecuted(ActionExecutedContext context)
        {
            hobbitLogger.Log("Ending " + context.HttpContext.Request.Method + " " + context.HttpContext.Request.Path);
        }

        public void OnActionExecuting(ActionExecutingContext context)
        {
            hobbitLogger.Log("Starting " + context.HttpContext.Request.Method + " " + context.HttpContext.Request.Path);
        }
    }
}
