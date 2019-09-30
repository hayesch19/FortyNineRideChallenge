namespace FortyNineRideChallenge.Models
{
  public class DisneyWorldRides
  {
    public int Id { get; set; }
    public string RideName { get; set; }
    public bool Complete { get; set; }


    public int DisneyWorldParkId { get; set; }
    public DisneyWorldParks DisneyWorldParks { get; set; }
  }
}