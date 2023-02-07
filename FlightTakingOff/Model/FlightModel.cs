public class RootObject
{
    public bool Success { get; set; }
    public List<Data> Data { get; set; }
}
public class Data
{
    public string Type { get; set; }
    public string Status { get; set; }
    public Departure Departure { get; set; }
    public Arrival Arrival { get; set; }
    public Airline Airline { get; set; }
    public Flight Flight { get; set; }
    public Codeshared Codeshared { get; set; }
}

public class Departure
{
    public string IataCode { get; set; }
    public string IcaoCode { get; set; }
    public int Delay { get; set; }
    public string ScheduledTime { get; set; }
    public string EstimatedTime { get; set; }
    public string ActualTime { get; set; }
    public string EstimatedRunway { get; set; }
    public string ActualRunway { get; set; }
    public string Gate { get; set; }
}

public class Arrival
{
    public string IataCode { get; set; }
    public string IcaoCode { get; set; }
    public string Terminal { get; set; }
    public string Baggage { get; set; }
    public string Gate { get; set; }
    public int Delay { get; set; }
    public string ScheduledTime { get; set; }
    public string EstimatedTime { get; set; }
}

public class Airline
{
    public string Name { get; set; }
    public string IataCode { get; set; }
    public string IcaoCode { get; set; }
}

public class Flight
{
    public string Number { get; set; }
    public string IataNumber { get; set; }
    public string IcaoNumber { get; set; }
}

public class Codeshared
{
    public Airline Airline { get; set; }
    public Flight Flight { get; set; }
}




