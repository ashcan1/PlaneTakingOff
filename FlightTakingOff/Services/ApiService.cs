using FlightTakingOff.Interfaces;
using System;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Microsoft.Extensions.Options;

namespace FlightTakingOff.Services
{

    public class ApiService : IHttpClientService
    {
        private readonly ApiSettings _settings;
        private readonly HttpClient _httpClient;

    public ApiService(IOptions<ApiSettings> apiSettings, HttpClient httpClient)
    {
      _settings = apiSettings.Value;
      _httpClient = httpClient;
    }
      public async Task <RootObject>GetData() {
      var URL = _settings.AccessKey;
      string iataCode = "BHX";
      string type = "departure";
      var requestUrl = $"{URL}&iataCode={iataCode}&type={type}";
      var response = await _httpClient.GetAsync(requestUrl);
        var json = await response.Content.ReadAsStringAsync();
        if (_settings == null)
        {
        throw new Exception("The _settings object is null.");
        }

        if (_httpClient == null)
        {
        throw new Exception("The _httpClient object is null.");
        }
        var rootObject = JsonConvert.DeserializeObject<RootObject>(json);
        rootObject.Data = rootObject.Data.Where(f => f.Departure.ScheduledTime > DateTime.Now.AddHours(2)).ToList();

        return rootObject;
      }
    }
  }


// 


