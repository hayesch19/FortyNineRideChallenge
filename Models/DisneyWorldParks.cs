using System.Collections.Generic;

namespace FortyNineRideChallenge.Models
{
  public class DisneyWorldParks
  {
    public int Id { get; set; }
    public string ParkName { get; set; }


    public List<DisneyWorldRides> DisneyWorldRide { get; set; } = new List<DisneyWorldRides>();
  }

}