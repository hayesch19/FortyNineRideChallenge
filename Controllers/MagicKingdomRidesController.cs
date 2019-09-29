using System.Collections.Generic;
using System.Linq;
using FortyNineRideChallenge.Models;
using Microsoft.AspNetCore.Mvc;

namespace FortyNineRideChallenge.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class MagicKingdomRidesController : ControllerBase
  {
    private DatabaseContext context;
    public MagicKingdomRidesController(DatabaseContext _context)
    {
      this.context = _context;
    }

    // Add Ride
    [HttpPost]
    public ActionResult<MagicKingdomRides> CreateEntry([FromBody] MagicKingdomRides entry)
    {
      context.MagicKingdomRide.Add(entry);
      context.SaveChanges();
      return entry;
    }

    // Get All Rides
    [HttpGet]
    public ActionResult<IEnumerable<MagicKingdomRides>> GetAllItems()
    {
      var questions = context.MagicKingdomRide.OrderByDescending(ride => ride.Id);
      return questions.ToList();
    }

    // Get A Ride
    [HttpGet("{id}")]
    public ActionResult GetOneItem(int id)
    {
      var ride = context.MagicKingdomRide.FirstOrDefault(q => q.Id == id);
      if (ride == null)
      {
        return NotFound();
      }
      else
      {
        return Ok(ride);
      }
    }

    // Update Ride
    [HttpPut("{id}")]
    public ActionResult<MagicKingdomRides> UpdateQuestion(int id, [FromBody]MagicKingdomRides newDetails)
    {
      if (id != newDetails.Id)
      {
        return BadRequest();
      }
      context.Entry(newDetails).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
      context.SaveChanges();
      return newDetails;
    }

    // Delete A Ride
    [HttpDelete("{id}")]
    public ActionResult<MagicKingdomRides> DeleteEntry([FromBody]MagicKingdomRides entry, int id)
    {
      var rideToDelete = context.MagicKingdomRide.FirstOrDefault(ride => ride.Id == id);
      context.MagicKingdomRide.Remove(rideToDelete);
      context.SaveChanges();
      return rideToDelete;
    }
  }
}