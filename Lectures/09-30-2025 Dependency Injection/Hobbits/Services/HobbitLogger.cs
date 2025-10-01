using System.Diagnostics;

namespace Hobbits.Services
{
    public class HobbitLogger
    {
        private readonly TimeOfDataGenerator timeOfDayGenerator;
        private readonly IRequestIdGenerator requestIdGenerator;

        public HobbitLogger(TimeOfDataGenerator timeOfDayGenerator, IRequestIdGenerator requestIdGenerator)
        {
            this.timeOfDayGenerator = timeOfDayGenerator;
            this.requestIdGenerator = requestIdGenerator;
        }

        public void Log(string message)
        {

            Debug.WriteLine(message + " " + requestIdGenerator.RequestId + " " + timeOfDayGenerator.TimeOfDay);
        }
    }
}
