namespace Hobbits.Services
{
    public class TimeOfDataGenerator
    {
        public string TimeOfDay { get; } = DateTime.UtcNow.ToString();
    }
}
