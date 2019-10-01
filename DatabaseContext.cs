using System;
using System.Text.RegularExpressions;
using FortyNineRideChallenge.Models;
using Microsoft.EntityFrameworkCore;

namespace FortyNineRideChallenge
{
  public partial class DatabaseContext : DbContext
  {
    public DatabaseContext()
    {
    }

    public DatabaseContext(DbContextOptions<DatabaseContext> options)
        : base(options)
    {
    }

    private string ConvertPostConnectionToConnectionString(string connection)
    {
      var _connection = connection.Replace("postgres://", String.Empty);
      var output = Regex.Split(_connection, ":|@|/");
      return $"server={output[2]};database={output[4]};User Id={output[0]}; password={output[1]}; port={output[3]}";
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
      if (!optionsBuilder.IsConfigured)
      {
        var envConn = Environment.GetEnvironmentVariable("DATABASE_URL");
        // #warning Be sure to update to your correct connection string to the point to the correct database
        var conn = "server=localhost;database=FortyNineRideChallenge";
        if (envConn != null)
        {
          conn = ConvertPostConnectionToConnectionString(envConn);
        }
        optionsBuilder.UseNpgsql(conn);
      }
    }



    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
      modelBuilder.HasAnnotation("ProductVersion", "2.2.0-rtm-35687");

      // Disney World Parks Data
      modelBuilder.Entity<DisneyWorldParks>().HasData(new DisneyWorldParks
      { Id = -1, ParkName = "Magic Kingdom" });
      modelBuilder.Entity<DisneyWorldParks>().HasData(new DisneyWorldParks
      { Id = -2, ParkName = "Animal Kingdom" });
      modelBuilder.Entity<DisneyWorldParks>().HasData(new DisneyWorldParks
      { Id = -3, ParkName = "Hollywood Studios" });
      modelBuilder.Entity<DisneyWorldParks>().HasData(new DisneyWorldParks
      { Id = -4, ParkName = "Epcot" });


      // Disney World Rides Data
      // Magic Kingdom Rides
      modelBuilder.Entity<DisneyWorldRides>().HasData(new DisneyWorldRides
      { Id = -1, DisneyWorldParkId = -1, RideName = "Main Street Vehicles" });
      modelBuilder.Entity<DisneyWorldRides>().HasData(new DisneyWorldRides
      { Id = -2, DisneyWorldParkId = -1, RideName = "Walt Disney World Railroad" });
      modelBuilder.Entity<DisneyWorldRides>().HasData(new DisneyWorldRides
      { Id = -3, DisneyWorldParkId = -1, RideName = "Jungle Cruise" });
      modelBuilder.Entity<DisneyWorldRides>().HasData(new DisneyWorldRides
      { Id = -4, DisneyWorldParkId = -1, RideName = "Pirates of the Caribbean" });
      modelBuilder.Entity<DisneyWorldRides>().HasData(new DisneyWorldRides
      { Id = -5, DisneyWorldParkId = -1, RideName = "Magic Carpets of Aladdin" });
      modelBuilder.Entity<DisneyWorldRides>().HasData(new DisneyWorldRides
      { Id = -6, DisneyWorldParkId = -1, RideName = "Splash Mountain" });
      modelBuilder.Entity<DisneyWorldRides>().HasData(new DisneyWorldRides
      { Id = -7, DisneyWorldParkId = -1, RideName = "Big Thunder Mountain" });
      modelBuilder.Entity<DisneyWorldRides>().HasData(new DisneyWorldRides
      { Id = -8, DisneyWorldParkId = -1, RideName = "Rafts to Tom Sawyer Island" });
      modelBuilder.Entity<DisneyWorldRides>().HasData(new DisneyWorldRides
      { Id = -9, DisneyWorldParkId = -1, RideName = "Liberty Belle Riverboat" });
      modelBuilder.Entity<DisneyWorldRides>().HasData(new DisneyWorldRides
      { Id = -10, DisneyWorldParkId = -1, RideName = "Haunted Mansion" });
      modelBuilder.Entity<DisneyWorldRides>().HasData(new DisneyWorldRides
      { Id = -11, DisneyWorldParkId = -1, RideName = "It’s a Small World" });
      modelBuilder.Entity<DisneyWorldRides>().HasData(new DisneyWorldRides
      { Id = -12, DisneyWorldParkId = -1, RideName = "Peter Pan’s Flight" });
      modelBuilder.Entity<DisneyWorldRides>().HasData(new DisneyWorldRides
      { Id = -13, DisneyWorldParkId = -1, RideName = "Prince Charming Regal Carousel" });
      modelBuilder.Entity<DisneyWorldRides>().HasData(new DisneyWorldRides
      { Id = -14, DisneyWorldParkId = -1, RideName = "Many Adventures of Winnie the Pooh" });
      modelBuilder.Entity<DisneyWorldRides>().HasData(new DisneyWorldRides
      { Id = -15, DisneyWorldParkId = -1, RideName = "Under the Sea — Journey of the Little Mermaid" });
      modelBuilder.Entity<DisneyWorldRides>().HasData(new DisneyWorldRides
      { Id = -16, DisneyWorldParkId = -1, RideName = "Seven Dwarfs Mine Train" });
      modelBuilder.Entity<DisneyWorldRides>().HasData(new DisneyWorldRides
      { Id = -17, DisneyWorldParkId = -1, RideName = "Mad Tea Party" });
      modelBuilder.Entity<DisneyWorldRides>().HasData(new DisneyWorldRides
      { Id = -18, DisneyWorldParkId = -1, RideName = "Dumbo the Flying Elephant" });
      modelBuilder.Entity<DisneyWorldRides>().HasData(new DisneyWorldRides
      { Id = -19, DisneyWorldParkId = -1, RideName = "Barnstormer" });
      modelBuilder.Entity<DisneyWorldRides>().HasData(new DisneyWorldRides
      { Id = -20, DisneyWorldParkId = -1, RideName = "Tomorrowland Speedway" });
      modelBuilder.Entity<DisneyWorldRides>().HasData(new DisneyWorldRides
      { Id = -21, DisneyWorldParkId = -1, RideName = "Tomorrowland Transit Authority PeopleMover" });
      modelBuilder.Entity<DisneyWorldRides>().HasData(new DisneyWorldRides
      { Id = -22, DisneyWorldParkId = -1, RideName = "Space Mountain" });
      modelBuilder.Entity<DisneyWorldRides>().HasData(new DisneyWorldRides
      { Id = -23, DisneyWorldParkId = -1, RideName = "Buzz Lightyear Space Ranger Spin" });
      modelBuilder.Entity<DisneyWorldRides>().HasData(new DisneyWorldRides
      { Id = -24, DisneyWorldParkId = -1, RideName = "AstroOrbiter" });
      modelBuilder.Entity<DisneyWorldRides>().HasData(new DisneyWorldRides
      { Id = -25, DisneyWorldParkId = -1, RideName = "Carousel of Progress" });

      // Animal Kingdom Rides
      modelBuilder.Entity<DisneyWorldRides>().HasData(new DisneyWorldRides
      { Id = -26, DisneyWorldParkId = -2, RideName = "Kilimanjaro Safari" });
      modelBuilder.Entity<DisneyWorldRides>().HasData(new DisneyWorldRides
      { Id = -27, DisneyWorldParkId = -2, RideName = "Wildlife Express" });
      modelBuilder.Entity<DisneyWorldRides>().HasData(new DisneyWorldRides
      { Id = -28, DisneyWorldParkId = -2, RideName = "Kali River Rapids" });
      modelBuilder.Entity<DisneyWorldRides>().HasData(new DisneyWorldRides
      { Id = -29, DisneyWorldParkId = -2, RideName = "Expedition Everest" });
      modelBuilder.Entity<DisneyWorldRides>().HasData(new DisneyWorldRides
      { Id = -30, DisneyWorldParkId = -2, RideName = "Dinosaur" });
      modelBuilder.Entity<DisneyWorldRides>().HasData(new DisneyWorldRides
      { Id = -31, DisneyWorldParkId = -2, RideName = "Primeval Whirl" });
      modelBuilder.Entity<DisneyWorldRides>().HasData(new DisneyWorldRides
      { Id = -32, DisneyWorldParkId = -2, RideName = "TriceraTop Spin" });
      modelBuilder.Entity<DisneyWorldRides>().HasData(new DisneyWorldRides
      { Id = -33, DisneyWorldParkId = -2, RideName = "Flight of Passage" });
      modelBuilder.Entity<DisneyWorldRides>().HasData(new DisneyWorldRides
      { Id = -34, DisneyWorldParkId = -2, RideName = "Na’vi River Journey" });

      // Hollywood Studios Rides
      modelBuilder.Entity<DisneyWorldRides>().HasData(new DisneyWorldRides
      { Id = -35, DisneyWorldParkId = -3, RideName = "Toy Story Midway Mania" });
      modelBuilder.Entity<DisneyWorldRides>().HasData(new DisneyWorldRides
      { Id = -36, DisneyWorldParkId = -3, RideName = "Star Tours" });
      modelBuilder.Entity<DisneyWorldRides>().HasData(new DisneyWorldRides
      { Id = -37, DisneyWorldParkId = -3, RideName = "Rock ‘n’ Roller Coaster" });
      modelBuilder.Entity<DisneyWorldRides>().HasData(new DisneyWorldRides
      { Id = -38, DisneyWorldParkId = -3, RideName = "Twilight Zone Tower of Terror" });
      modelBuilder.Entity<DisneyWorldRides>().HasData(new DisneyWorldRides
      { Id = -39, DisneyWorldParkId = -3, RideName = "Slinky Dog Dash" });
      modelBuilder.Entity<DisneyWorldRides>().HasData(new DisneyWorldRides
      { Id = -40, DisneyWorldParkId = -3, RideName = "Alien Swirling Saucers" });
      modelBuilder.Entity<DisneyWorldRides>().HasData(new DisneyWorldRides
      { Id = -41, DisneyWorldParkId = -3, RideName = "Millennium Falcon Smugglers Run" });

      // Epcot Rides
      modelBuilder.Entity<DisneyWorldRides>().HasData(new DisneyWorldRides
      { Id = -42, DisneyWorldParkId = -4, RideName = "Spaceship Earth" });
      modelBuilder.Entity<DisneyWorldRides>().HasData(new DisneyWorldRides
      { Id = -43, DisneyWorldParkId = -4, RideName = "Mission: SPACE" });
      modelBuilder.Entity<DisneyWorldRides>().HasData(new DisneyWorldRides
      { Id = -44, DisneyWorldParkId = -4, RideName = "Test Track" });
      modelBuilder.Entity<DisneyWorldRides>().HasData(new DisneyWorldRides
      { Id = -45, DisneyWorldParkId = -4, RideName = "Journey Into Imagination" });
      modelBuilder.Entity<DisneyWorldRides>().HasData(new DisneyWorldRides
      { Id = -46, DisneyWorldParkId = -4, RideName = "Soarin’" });
      modelBuilder.Entity<DisneyWorldRides>().HasData(new DisneyWorldRides
      { Id = -47, DisneyWorldParkId = -4, RideName = "Living with the Land" });
      modelBuilder.Entity<DisneyWorldRides>().HasData(new DisneyWorldRides
      { Id = -48, DisneyWorldParkId = -4, RideName = "The Seas with Nemo and Friends" });
      modelBuilder.Entity<DisneyWorldRides>().HasData(new DisneyWorldRides
      { Id = -49, DisneyWorldParkId = -4, RideName = "Frozen Ever After" });
    }
    public DbSet<DisneyWorldParks> DisneyWorldPark { get; set; }

    public DbSet<DisneyWorldRides> DisneyWorldRide { get; set; }

  }
}
