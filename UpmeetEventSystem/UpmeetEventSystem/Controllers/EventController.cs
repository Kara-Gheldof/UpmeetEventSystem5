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
        Description = newEvent.Description,
        Image = newEvent.Image
      };
      return repo.AddEvent(addEvent);
    }

    [HttpGet("ViewEvents")]
    public List<Event> GetEvents()
    {
      return repo.GetAllEvents();
    }

    [HttpGet("GetEvent/{id}")]
    public Event GetEventById(int id)
    {
      return repo.GetEventById(id);
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

    [HttpGet("GetFavoriteId/{id}")]
    public Favorite GetFavoriteById(int id)
    {
      return repo.GetFavoriteId(id);
    }

    [HttpPost("RemoveFavoriteId/{id}")]
    public HttpResponseMessage RemoveFavoriteById(int id)
    {
      try
      {
        if (repo.RemoveFavoriteId(id) == true)
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

    [HttpGet("GetFavoriteEventId/{id}")]
    public Favorite GetFavoriteByEventId(int id)
    {
      return repo.GetFavoriteEventId(id);
    }

    [HttpPost("RemoveFavoriteEventId/{id}")]
    public HttpResponseMessage RemoveFavoriteByEventId(int id)
    {
      try
      {
        if (repo.RemoveFavoriteEventId(id) == true)
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

    [HttpGet("ViewContacts")]
    public List<Contact> GetAllContacts()
    {
      return repo.GetAllContacts();
    }

    [HttpPost("AddContact")]
    public Contact AddContact(Contact newContact)
    {
      Contact addContact = new Contact
      {
        Name = newContact.Name,
        Email = newContact.Email,
        Subject = newContact.Subject,
        Comment = newContact.Comment
      };
      return repo.AddContact(addContact);
    }
  }
}
