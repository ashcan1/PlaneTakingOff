using FlightTakingOff.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json.Serialization;
using Newtonsoft.Json;
using Microsoft.Extensions.Options;

namespace FlightTakingOff.Services
{

    public class ApiService : IHttpClientService
    {
        private readonly ApiSettings _settings;

    public ApiService(IOptions<ApiSettings> apiSettings)
    {
      _settings = apiSettings.Value;
    }
        public async Task <RootObject>GetData() {
      var URL = _settings.AccessKey;
        string iataCode = "BHX";
        string type = "departure";
        using (var httpClient = new HttpClient())
        {
        var targetDateTime = DateTime.Now.AddHours(2); // For example, fetch flights in 2 hours
        var requestUrl = $"{URL}?iataCode={iataCode}&type={type}&date={targetDateTime.ToString("yyyy-MM-ddTHH:mm:ss")}";
        var response = await httpClient.GetAsync(requestUrl);
        var json = await response.Content.ReadAsStringAsync();
        var rootObject = JsonConvert.DeserializeObject<RootObject>(json);
        rootObject.Data = rootObject.Data.Where(f => f.Departure.ScheduledTime > DateTime.Now).ToList();

        return rootObject;
      }
    }
  }
}


// 
