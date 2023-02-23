namespace UpmeetEventSystem.Models
{
  public class Event
  {
    public virtual int Id { get; set; }
    public string Name { get; set; }
    public DateTime Date { get; set; }
    public string Description { get; set; }
    public string Location { get; set; }
  }
}
