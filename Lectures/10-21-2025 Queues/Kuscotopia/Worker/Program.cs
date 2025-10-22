using Amazon;
using Amazon.Runtime;
using Amazon.SQS;
using Amazon.SQS.Model;
using Common;
using Common.Entities;
using Newtonsoft.Json;

namespace Worker
{
    internal class Program
    {
        private static BasicAWSCredentials credentials;

        private static AmazonSQSClient sqsClient;

        static async Task Main(string[] args)
        {
            credentials = new BasicAWSCredentials(Credentials.QueueKeyId, Credentials.QueueKey);
            sqsClient = new AmazonSQSClient(credentials, RegionEndpoint.USEast1);

            Console.WriteLine("Starting to read messages from the queue.");

            await ReadMessagesAsync();
        }

        public static async Task ReadMessagesAsync()
        {
            var request = new ReceiveMessageRequest()
            {
                QueueUrl = Credentials.QueueUrl,
                MaxNumberOfMessages = 10,
                WaitTimeSeconds = 10,
            };

            while (true)
            {
                var messages = await sqsClient.ReceiveMessageAsync(request);

                if (messages.Messages == null)
                {
                    continue;
                }

                foreach (var message in messages.Messages)
                {
                    Console.WriteLine(JsonConvert.DeserializeObject<WorkEntity>(message.Body));

                    _ = sqsClient.DeleteMessageAsync(new DeleteMessageRequest()
                    {
                        QueueUrl = Credentials.QueueUrl,
                        ReceiptHandle = message.ReceiptHandle
                    });
                }
            }
        }
    }
}
