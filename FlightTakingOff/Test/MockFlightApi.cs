using FlightTakingOff.Services;
using FluentAssertions;
using Microsoft.Extensions.Options;
using Moq;
using Newtonsoft.Json;
using NUnit.Framework;
using RichardSzalay.MockHttp;
using System.Net;
using System.Text;

namespace FlightTakingOff.Test
{
  [TestFixture]
  public class MockFlightApi
  {
    [Test]
    public async Task Get_Heade_Of_StatuCode()
    {
      //arrange
      var mockHandeler = new MockHttpMessageHandler();
      var apiSettings = new ApiSettings
      {
        AccessKey = "https://app.goflightlabs.com/advanced-flights-schedules?access_key=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiMTNlNTMzZDA4ZDBjNGQ2ZjJkMDFhZjE0OWRjZDAzMzAwZmI0ZmEzZjIwMzM1YzU4YjFhYjcwMmVjMTFmZGRmZTQxOGEzZTFlNmYxZTFlOWUiLCJpYXQiOjE2ODA3NjgwMjcsIm5iZiI6MTY4MDc2ODAyNywiZXhwIjoxNzEyMzkwNDI3LCJzdWIiOiIyMDY5MCIsInNjb3BlcyI6W119.ebjM_eX5OEaRWR4fUz85Nw13rfwtwUZV5OjXuI43nVU918-KL810mgvB8H75FSUDyS7tKfD5K0fo8cmtQVvEfg",

      };
      var options = Options.Create(apiSettings);

      var expectedResponse = new RootObject
      {
        Success = true,
        Data = new List<Data>
    {
        new Data
        {
            Type = "departure",
            Status = "active",
            Airline = new Airline
            {
                IataCode = "AT",
                IcaoCode = "RAM",
                Name = "Royal Air Maroc"
            },
            Departure = new Departure
            {
                IataCode = "JFK",
                IcaoCode = "KJFK",
                Delay = 11,
                ScheduledTime = DateTime.Parse("2023-04-06T18:00:00.000"),
                EstimatedTime = "2023-04-06T18:00:00.000",
                ActualTime = "2023-04-06T18:10:00.000",
                EstimatedRunway = "2023-04-06T18:10:00.000",
                ActualRunway = "2023-04-06T18:10:00.000",
                Gate = "33"
            },
            Arrival = new Arrival
            {
                IataCode = "SFO",
                IcaoCode = "KSFO",
                Terminal = "1",
                Baggage = "2",
                Gate = "B16",
                ScheduledTime = "2023-04-06T21:36:00.000",
                EstimatedTime = "2023-04-06T21:20:00.000"
            },
            Flight = new Flight
            {
                Number = "5024",
                IataNumber = "AT5024",
                IcaoNumber = "RAM5024"
            },
            Codeshared = new Codeshared
            {
                Airline = new Airline
                {
                    IataCode = "aa",
                    IcaoCode = "aal",
                    Name = "american airlines"
                },
                Flight = new Flight
                {
                    Number = "2652",
                    IataNumber = "aa2652",
                    IcaoNumber = "aal2652"
                }
            }
        },
        // ... other Data objects for the other flights
    }
      };

      var testRequestUrl = "https://app.goflightlabs.com/advanced-flights-schedules?access_key=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiNTNiZDRhOTc4N2VlNGI1NDRiNWMzY2Y1ODM3ZGU0YWVjODM1ZjNjNTZhYThhMGI2ZGExNzQ2M2JkNTZmMjFhYTc1MGU5MmJkZGU5NjA3YTciLCJpYXQiOjE2ODA4NDg3NTYsIm5iZiI6MTY4MDg0ODc1NiwiZXhwIjoxNzEyNDcxMTU2LCJzdWIiOiIyMDY5MCIsInNjb3BlcyI6W119.HLsNzHnnY1qvqmFRiPuIYNPZTP0KYVFUHjw5fQEqzf2WfsnskqV4asn3S2vVwigxe-nC4H26WopDAIYKN7Ekqg&iataCode=JFK&type=departure";
      var expectedJson = JsonConvert.SerializeObject(expectedResponse);
      mockHandeler
          .When(testRequestUrl)
          .Respond(HttpStatusCode.OK, new StringContent(expectedJson, Encoding.UTF8, "application/json"));



      var httpClient = mockHandeler.ToHttpClient();
      var apiservice = new ApiService(options, httpClient);


      //act

      var result = await apiservice.GetData();

      //assert

      result.Should().BeEquivalentTo(expectedResponse);
      // Add more comparisons for other properties as needed


    }
  }
}












