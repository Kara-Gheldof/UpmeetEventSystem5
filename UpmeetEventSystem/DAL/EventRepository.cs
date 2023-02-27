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
    //public List<Favorite> GetAllFavorites()
    //{
    //  return _dbContext.Favorites.ToList();
    //}
    public List <Event> GetAllFavorites()
    {
      List <Favorite> favorites = _dbContext.Favorites.ToList();
      List <Event> favoriteEventList= new List <Event>();
      foreach (Favorite favorite in favorites)
      {
        favoriteEventList.Add(_dbContext.Events.Where(x => x.EventId == favorite.FavoriteEventId).FirstOrDefault());
      }
      return favoriteEventList;
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

    private Favorite ReturnLastestFavorite(int id)
    {
      return _dbContext.Favorites.OrderByDescending(x => x.FavoriteEventId).FirstOrDefault();
    }

    public Favorite AddFavoriteEvent(Favorite newFavorite)
    {
      _dbContext.Favorites.Add(newFavorite);
      _dbContext.SaveChanges();
      return ReturnLastestFavorite(newFavorite.FavoriteEventId);
    }
    public Favorite GetFavoriteById(int id)
    {
      return _dbContext.Favorites.AsNoTracking().FirstOrDefault(x => x.Id == id);
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
