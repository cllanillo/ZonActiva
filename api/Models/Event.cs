public class Event
{
    public int EventId { get; private set; }
    public Organization Organizer { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public DateTime FromDate { get; set; }
    public DateTime UntilDate { get; set; }
    public GeoLocation Location { get; set; } // JSON + point
    public EventState State { get; set; }

    public void Start();
    public void End();
    public void Cancel();
    public bool IsOngoing();
    public bool IsUpcoming();
}
