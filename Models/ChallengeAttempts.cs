using System;

namespace FortyNineRideChallenge.Models
{
  public class ChallengeAttempts
  {
    public int Id { get; set; }
    public DateTime TimeStarted { get; set; } = DateTime.Now;
    public DateTime? TimeEnded { get; set; }
    public int TotalTime { get; set; }
    public int RidesCompleted { get; set; }
  }
}