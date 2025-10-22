using Common.Entities;
using Kuscotopia.Services;
using Microsoft.AspNetCore.Mvc;

namespace Kuscotopia.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OverseerController
    {
        private readonly QueueService queueService;

        public OverseerController(QueueService queueService)
        {
            this.queueService = queueService;
        }

        [HttpPost]
        public async Task PostAsync([FromBody] WorkEntity workEntity)
        {
            await queueService.QueueWorkAsync(workEntity);
        }
    }
}
