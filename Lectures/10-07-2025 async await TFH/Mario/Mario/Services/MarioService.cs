using Mario.Entities;
using Polly;
using System.Net;

namespace Mario.Services
{
    public class MarioService
    {
        private readonly HttpClient httpClient = new();

        public async Task<MarioEntity?> GetMarioLevelStatusAsync()
        {
            var policy = Policy.HandleInner<HttpRequestException>(ex =>
            {
                return ex?.StatusCode == HttpStatusCode.ServiceUnavailable;
            }).WaitAndRetryAsync(5, retryAttempt =>
                TimeSpan.FromMilliseconds(100 * Math.Pow(2, retryAttempt))
            );

            var marioEntity = await policy.ExecuteAsync(async () =>
            {
                var response = await httpClient.GetAsync("https://bethelwebprogrammingmario.azurewebsites.net/api/mario/jump");
                response.EnsureSuccessStatusCode();
                return await response.Content.ReadFromJsonAsync<MarioEntity?>();
            });

            return marioEntity;
        }
    }
}
