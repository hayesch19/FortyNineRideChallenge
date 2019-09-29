using System.Collections.Generic;
using System.Linq;
using FortyNineRideChallenge.Models;
using Microsoft.AspNetCore.Mvc;

namespace FortyNineRideChallenge.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class AnimalKingdomRidesController : ControllerBase
  {
    private DatabaseContext context;
    public AnimalKingdomRidesController(DatabaseContext _context)
    {
      this.context = _context;
    }

    // Add Ride
    [HttpPost]
    public ActionResult<AnimalKingdomRides> CreateEntry([FromBody] AnimalKingdomRides entry)
    {
      context.AnimalKingdomRide.Add(entry);
      context.SaveChanges();
      return entry;
    }

    // Get All Rides
    [HttpGet]
    public ActionResult<IEnumerable<AnimalKingdomRides>> GetAllItems()
    {
      var rides = context.AnimalKingdomRide.OrderByDescending(ride => ride.Id);
      return rides.ToList();
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
    public ActionResult<AnimalKingdomRides> UpdateRide(int id, [FromBody]AnimalKingdomRides newDetails)
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
    public ActionResult<AnimalKingdomRides> DeleteEntry([FromBody]AnimalKingdomRides entry, int id)
    {
      var rideToDelete = context.AnimalKingdomRide.FirstOrDefault(ride => ride.Id == id);
      context.AnimalKingdomRide.Remove(rideToDelete);
      context.SaveChanges();
      return rideToDelete;
    }
  }
}