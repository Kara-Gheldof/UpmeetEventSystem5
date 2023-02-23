namespace UpmeetEventSystem.Models
{
  public class Favorite
  {
    public int Id { get; set; }
    public List<Event> FavoriteEvents { get; set; }
  }
}
