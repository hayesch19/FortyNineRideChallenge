using System;
using System.Collections.Generic;
using System.Linq;
using FortyNineRideChallenge.Models;
using Microsoft.AspNetCore.Mvc;

namespace FortyNineRideChallenge.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class ChallengeAttemptsController : ControllerBase
  {
    private DatabaseContext context;
    public ChallengeAttemptsController(DatabaseContext _context)
    {
      this.context = _context;
    }

    // Add An Attempt
    [HttpPost]
    public ActionResult<ChallengeAttempts> CreateAttempt([FromBody] ChallengeAttempts entry)
    {
      context.ChallengeAttempt.Add(entry);
      context.SaveChanges();
      return entry;
    }

    // Get All Attempts
    [HttpGet]
    public ActionResult<IEnumerable<ChallengeAttempts>> GetAllAttempts()
    {
      var attempts = context.ChallengeAttempt.OrderByDescending(attempt => attempt.Id);
      return attempts.ToList();
    }

    // Get An Attempt
    [HttpGet("{id}")]
    public ActionResult GetOneAttempt(int id)
    {
      var attempt = context.ChallengeAttempt.FirstOrDefault(a => a.Id == id);
      if (attempt == null)
      {
        return NotFound();
      }
      else
      {
        return Ok(attempt);
      }
    }

    // Get A Current Attempt
    [HttpGet("current")]
    public ActionResult GetCurrentAttempt()
    {
      var attempt = context.ChallengeAttempt.FirstOrDefault(a => a.TimeStarted.Date == DateTime.Today);
      if (attempt != null)
      {
        return Ok(attempt);
      }
      else
      {
        return Ok(new { message = "Not Found" });
      }
    }

    // Delete Attempt
    [HttpDelete("{id}")]
    public ActionResult<ChallengeAttempts> DeleteRide([FromBody]ChallengeAttempts entry, int id)
    {
      var challengeToDelete = context.ChallengeAttempt.FirstOrDefault(attempt => attempt.Id == id);
      context.ChallengeAttempt.Remove(challengeToDelete);
      context.SaveChanges();
      return challengeToDelete;
    }

    // Updated Attempt Time Ended
    [HttpPatch("{id}/ended")]
    public ActionResult<ChallengeAttempts> UpdateStatus(int id)
    {
      var status = context.ChallengeAttempt.FirstOrDefault(s => s.Id == id);
      if (status == null)
      {
        return NotFound();
      }
      else
      {
        status.TimeEnded = DateTime.Now;
        context.SaveChanges();
        return status;

      }
    }

  }
}