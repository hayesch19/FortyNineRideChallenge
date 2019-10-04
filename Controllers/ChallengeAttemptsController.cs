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

  }
}