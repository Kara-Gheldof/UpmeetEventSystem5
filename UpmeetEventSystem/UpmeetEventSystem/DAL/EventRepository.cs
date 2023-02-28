using Microsoft.EntityFrameworkCore;
using UpmeetEventSystem.Models;

namespace UpmeetEventSystem.DAL
{
  public class EventRepository
  {
    private EventContext _dbContext = new EventContext();

    public List<Event> GetAllEvents()
    {
      return _dbContext.Events.ToList();
    }
    public List<Favorite> GetAllFavorites()
    {
      return _dbContext.Favorites.ToList();
    }
    public Event AddEvent(Event newEvent)
    {
      _dbContext.Events.Add(newEvent);
      _dbContext.SaveChanges();
      return ReturnLastestEvent();
    }
    private Event ReturnLastestEvent()
    {
      return _dbContext.Events.OrderByDescending(x => x.EventId).FirstOrDefault();
    }
    public Favorite GetFavoriteById(int id)
    {
      return _dbContext.Favorites.AsNoTracking().FirstOrDefault(x => x.FavoriteId == id);
    }
    public Event GetEventById(int id)
    {
      return _dbContext.Events.AsNoTracking().FirstOrDefault(x => x.EventId == id);
    }
    public bool RemoveFavorite(int id)
    {
      Favorite favorite = GetFavoriteById(id);
      if (favorite == null)
      {
        return false;
      }
      _dbContext.Favorites.Remove(favorite);
      _dbContext.SaveChanges();
      return true;
    }

  }
}
