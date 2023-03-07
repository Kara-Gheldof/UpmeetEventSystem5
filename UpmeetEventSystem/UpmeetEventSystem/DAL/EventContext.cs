using Microsoft.EntityFrameworkCore;
using UpmeetEventSystem.Models;

namespace UpmeetEventSystem.DAL
{
  public class EventContext : DbContext
  {

    public EventContext()
    {

    }

    public EventContext(DbContextOptions options) : base(options)
    {

    }

    public DbSet<Event> Events { get; set; }
    public DbSet<Favorite> Favorites { get; set; }
    public DbSet<Contact> Contacts { get; set; }

    private static IConfigurationRoot _configuration;

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
      if (!optionsBuilder.IsConfigured)
      {
        var builder = new ConfigurationBuilder()
            .SetBasePath(Directory.GetCurrentDirectory())
            .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true);

        _configuration = builder.Build();
        string cnstr = _configuration.GetConnectionString("EventDb");
        optionsBuilder.UseSqlServer(cnstr);
      }
    }

  }
}
