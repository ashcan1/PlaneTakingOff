using FlightTakingOff.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace FlightTakingOff.Services
{

    public class ApiService : IHttpClientService
    {
        public async Task<string> GetData() {

            var URL = $"https://app.goflightlabs.com/historical/2023-01-02?access_key=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiMDdmZWFkZWUzMjdhZDdjZTZkMDdmNjA5MTI1NDZjY2I3YzE3MGEwY2ZlZjVkZjliYTA5MmQzOGFiOWJlYmRiOTRjYmJkYzg3NGIzZjIwNTYiLCJpYXQiOjE2NzUzNzMwMTMsIm5iZiI6MTY3NTM3MzAxMywiZXhwIjoxNzA2OTA5MDEzLCJzdWIiOiIxOTkzMCIsInNjb3BlcyI6W119.MIs_Nis2j9l2o9aZ3oavKJCi3msCm7VK8UE9vWnciXHefOYUVaYDPu3W1zr3jcjv2XrzMeXFWYVcQIoSJQP2cw&code=BHX&type=departure";
            var httpClinet = new HttpClient();
            var response = await httpClinet.GetAsync(URL);
            return await response.Content.ReadAsStringAsync();


        }
    }
}
