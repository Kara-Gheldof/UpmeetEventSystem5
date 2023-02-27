using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Net;
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

    [HttpGet("ViewFavorites")]
    public List<Favorite> GetFavorites()
    {
      return repo.GetAllFavorites();
    }

    [HttpPost("AddFavorite")]
    public Favorite AddFavorite(Favorite newFavorite)
    {
      Favorite addFavorite = new Favorite
      {
        EventId = newFavorite.EventId,
        Events = newFavorite.Events
      };
      return addFavorite;
    }

    [HttpGet("GetFavorite/{id}")]
    public Favorite GetFavoriteById(int id)
    {
      return repo.GetFavoriteById(id);
    }

    [HttpPost("RemoveFavorite/{id}")]
    public HttpResponseMessage RemoveFavoriteById(int id)
    {
      try
      {
        if (repo.RemoveFavorite(id) == true)
        {
          return new HttpResponseMessage(HttpStatusCode.NoContent);
        }
        else
        {
          return new HttpResponseMessage(HttpStatusCode.NotFound);
        }
      }
      catch (Exception ex)
      {
        return new HttpResponseMessage(HttpStatusCode.ServiceUnavailable);
      }
    }
  }
}
