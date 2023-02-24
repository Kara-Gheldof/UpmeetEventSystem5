using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace UpmeetEventSystem.Models
{
  public class Favorite
  {
    [Key]
    public int UserId { get; set; }

    [Display(Name = "Event")]
    public virtual int EventId { get; set; }

    [ForeignKey("EventId")]
    public virtual Event Events { get; set; }
  }
}
