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


    public Event GetEventById(int id)
    {
      return _dbContext.Events.AsNoTracking().FirstOrDefault(x => x.EventId == id);
    }

    public Favorite AddFavoriteEvent(Favorite newFavorite)
    {
      int favoriteId = newFavorite.FavoriteEventId;
      List<Favorite> favorites = _dbContext.Favorites.ToList();
      foreach (Favorite favorite in favorites)
      {
        if (favorite.FavoriteEventId == favoriteId)
        {
          return null;
        }
      }
      _dbContext.Favorites.Add(newFavorite);
      _dbContext.SaveChanges();
      return ReturnLastestFavorite(newFavorite.FavoriteEventId);
    }

    public List<Event> GetAllFavorites()
    {
      List<Favorite> favorites = _dbContext.Favorites.ToList();
      List<Event> favoriteEventList = new List<Event>();
      foreach (Favorite favorite in favorites)
      {
        favoriteEventList.Add(_dbContext.Events.Where(x => x.EventId == favorite.FavoriteEventId).FirstOrDefault());
      }
      return favoriteEventList.Distinct().ToList();
    }

    private Favorite ReturnLastestFavorite(int id)
    {
      return _dbContext.Favorites.OrderByDescending(x => x.FavoriteEventId).FirstOrDefault();
    }

    public Favorite GetFavoriteId(int id)
    {
      return _dbContext.Favorites.AsNoTracking().FirstOrDefault(x => x.Id == id);
    }

    public bool RemoveFavoriteId(int id)
    {
      Favorite favorite = GetFavoriteId(id);
      if (favorite == null)
      {
        return false;
      }
      _dbContext.Favorites.Remove(favorite);
      _dbContext.SaveChanges();
      return true;
    }

    public Favorite GetFavoriteEventId(int id)
    {
      return _dbContext.Favorites.AsNoTracking().FirstOrDefault(x => x.FavoriteEventId == id);
    }

    public bool RemoveFavoriteEventId(int id)
    {
      Favorite favorite = GetFavoriteEventId(id);
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