using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using UpmeetEventSystem.DAL;
using UpmeetEventSystem.Models;

namespace UpmeetEventSystem.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class EventController : ControllerBase
  {
    EventRepository repo = new EventRepository();

    [HttpPost("AddEvent")]
    public Event AddEvent(Event newEvent)
    {
      Event addEvent = new Event
      {
        Name = newEvent.Name,
        StartDate = newEvent.StartDate,
        EndDate = newEvent.EndDate,
        Venue = newEvent.Venue,
        City = newEvent.City,
        State = newEvent.State,
        Description = newEvent.Description
      };
      return repo.AddEvent(addEvent);
    }
    [HttpGet("ViewEvents")]
    public List<Event> GetEvents()
    {
      return repo.GetAllEvents();
    }
  }
}
