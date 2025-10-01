namespace Hobbits.Services
{
    public class NumberGenerator : IRequestIdGenerator
    {
        private static int requestId = 1;

        public string RequestId { get; } = requestId++.ToString();
    }
}
