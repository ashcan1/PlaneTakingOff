using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Http;
using FlightTakingOff;
using FlightTakingOff.Interfaces;
using FlightTakingOff.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.


builder.Services.AddCors((options) =>
{
  options.AddPolicy("AngularAppilication", (builder) =>
  {
    builder.WithOrigins("http://localhost:4200", "https://flighttracker-birmingham.web.app")
   .AllowAnyHeader()
   .WithMethods("GET", "POST", "PUT", "DELETE")
.WithExposedHeaders("*");
  });
});
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.Configure<ApiSettings>(builder.Configuration.GetSection("ApiSettings"));
builder.Services.AddScoped<IHttpClientService, ApiService>();
builder.Services.AddHttpClient();
var app = builder.Build();

string port = Environment.GetEnvironmentVariable("PORT") ?? "5000";
string url = $"http://0.0.0.0:{port}";

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
  app.UseSwagger();
  app.UseSwaggerUI();
}
app.UseRouting();
app.UseCors("AngularAppilication");
app.UseHttpsRedirection();
app.UseAuthorization();

app.MapControllers();

app.MapGet("/", async context =>
{
  await context.Response.WriteAsync("Welcome to Flight Tracker API");
});

app.Run();
