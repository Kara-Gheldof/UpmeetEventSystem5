using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace UpmeetEventSystem.Models
{
  public class Favorite
  {
    //[Key]
    //[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }

    //[ForeignKey("EventId")]
    public int FavoriteEventId { get; set; }
  }
}
