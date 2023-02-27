using System.ComponentModel.DataAnnotations;

namespace UpmeetEventSystem.Models
{
  public class Event
  {
    [Key]
    public int EventId { get; set; }
    public string Name { get; set; }
    public DateTime StartDate { get; set; }
    public DateTime EndDate { get; set; }
    public string Description { get; set; }
    public string Venue { get; set; }
    public string City { get; set; }
    public string State { get; set; }
    public string Image { get; set; }

  }
}
