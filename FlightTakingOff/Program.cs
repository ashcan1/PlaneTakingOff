using FlightTakingOff;
using FlightTakingOff.Interfaces;
using FlightTakingOff.Services;
using Newtonsoft.Json;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;





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

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
  app.UseSwagger();
  app.UseSwaggerUI();
}
app.UseCors("AngularAppilication");
app.UseHttpsRedirection();
app.UseAuthorization();

app.MapControllers();


app.Run();
