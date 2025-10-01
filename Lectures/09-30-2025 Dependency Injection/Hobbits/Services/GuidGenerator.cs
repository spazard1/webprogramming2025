namespace Hobbits.Services
{
    public class GuidGenerator : IRequestIdGenerator
    {
        public string RequestId { get; } = Guid.NewGuid().ToString();
    }
}
