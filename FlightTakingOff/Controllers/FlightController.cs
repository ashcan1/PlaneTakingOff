using FlightTakingOff.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace FlightTakingOff.FlightControllers
{


  [ApiController]
  [Route("[controller]")]
  public class FlightController : ControllerBase
    {
        private readonly IHttpClientService _httpClientService;
        public FlightController(IHttpClientService httpClientService)
        {
            _httpClientService = httpClientService;
        }
         

        [HttpGet]
     
        public async Task<IActionResult> Get()
        {
          return Ok(await _httpClientService.GetData());

        }

    }
}
