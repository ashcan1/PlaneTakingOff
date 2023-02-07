namespace FlightTakingOff.Interfaces
{
    public interface IHttpClientService
    {
        Task<RootObject> GetData();

    }
}
