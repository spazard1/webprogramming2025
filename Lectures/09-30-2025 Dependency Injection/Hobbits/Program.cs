using Hobbits.Services;

namespace Hobbits
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            builder.Services.AddSingleton<HobbitsDatabase>();
            builder.Services.AddTransient<TimeOfDataGenerator>();
            builder.Services.AddTransient<GuidGenerator>();
            builder.Services.AddTransient<NumberGenerator>();
            builder.Services.AddTransient<HobbitLogger>();

#if DEBUG
            builder.Services.AddTransient<IRequestIdGenerator, NumberGenerator>();
#else
            builder.Services.AddTransient<IRequestIdGenerator, GuidGenerator>();
#endif

            _ = builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            _ = builder.Services.AddEndpointsApiExplorer();
            _ = builder.Services.AddSwaggerGen();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                _ = app.UseSwagger();
                _ = app.UseSwaggerUI();
            }

            _ = app.UseHttpsRedirection();

            _ = app.UseAuthorization();

            _ = app.MapControllers();

            app.Run();
        }
    }
}