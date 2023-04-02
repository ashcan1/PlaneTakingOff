using FlightTakingOff.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace FlightTakingOff.FlightControllers
{


    [ApiController]
    public class FlightController :Controller
    {
        private readonly IHttpClientService _httpClientService;
        public FlightController(IHttpClientService httpClientService)
        {
            _httpClientService = httpClientService;
        }
         

        [HttpGet]
        [Route("[controller]")]
        public async Task<IActionResult> Get()
        {
          return Ok(await _httpClientService.GetData());

        }

    }
}
