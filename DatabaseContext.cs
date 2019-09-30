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
      modelBuilder.Entity<DisneyWorldRides>().HasData(new DisneyWorldRides
      { Id = -1, DisneyWorldParkId = -1, RideName = "Main Street Vehicles" });
    }
    public DbSet<DisneyWorldParks> DisneyWorldPark { get; set; }

    public DbSet<DisneyWorldRides> DisneyWorldRide { get; set; }

  }
}
