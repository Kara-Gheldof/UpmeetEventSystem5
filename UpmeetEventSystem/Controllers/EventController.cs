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
    public List<Event> GetFavorites()
    {
      return repo.GetAllFavorites();
    }

    [HttpPost("AddFavorite")]
    public Favorite AddFavorite(Favorite newFavorite)
    {
      Favorite addFavorite = new Favorite
      {
        FavoriteEventId = newFavorite.FavoriteEventId
      };
      return repo.AddFavoriteEvent(addFavorite);
    }

    //[HttpGet("GetFavoriteId/{id}")]
    //public Favorite GetFavoriteById(int id)
    //{
    //  return repo.GetFavoriteById(id);
    //}

    //[HttpPost("RemoveFavoriteId/{id}")]
    //public HttpResponseMessage RemoveFavoriteById(int id)
    //{
    //  try
    //  {
    //    if (repo.RemoveFavoriteById(id) == true)
    //    {
    //      return new HttpResponseMessage(HttpStatusCode.NoContent);
    //    }
    //    else
    //    {
    //      return new HttpResponseMessage(HttpStatusCode.NotFound);
    //    }
    //  }
    //  catch (Exception ex)
    //  {
    //    return new HttpResponseMessage(HttpStatusCode.ServiceUnavailable);
    //  }
    //}

    [HttpGet("GetFavoriteEventId/{id}")]
    public Favorite GetFavoriteByEventId(int id)
    {
      return repo.GetFavoriteByEventId(id);
    }

    [HttpPost("RemoveFavoriteEventId/{id}")]
    public HttpResponseMessage RemoveFavoriteByEventId(int id)
    {
      try
      {
        if (repo.RemoveFavoriteByEventId(id) == true)
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
