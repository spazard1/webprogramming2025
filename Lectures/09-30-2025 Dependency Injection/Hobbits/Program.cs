using Hobbits.Filters;
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
            builder.Services.AddScoped<TimeOfDataGenerator>();
            builder.Services.AddScoped<GuidGenerator>();
            builder.Services.AddScoped<NumberGenerator>();
            builder.Services.AddScoped<HobbitLogger>();

            builder.Services.AddScoped<RequestLoggingFilter>();
            builder.Services.AddScoped<RequestIdFilter>();

#if DEBUG
            builder.Services.AddTransient<IRequestIdGenerator, GuidGenerator>();
#else
            builder.Services.AddTransient<IRequestIdGenerator, GuidGenerator>();
#endif

            _ = builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            _ = builder.Services.AddEndpointsApiExplorer();
            _ = builder.Services.AddSwaggerGen();

            var app = builder.Build();

            app.UseCors(policy => policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod().WithExposedHeaders("*"));

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