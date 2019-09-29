using System.Collections.Generic;
using System.Linq;
using FortyNineRideChallenge.Models;
using Microsoft.AspNetCore.Mvc;

namespace FortyNineRideChallenge.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class HollywoodStudiosRidesController : ControllerBase
  {
    private DatabaseContext context;
    public HollywoodStudiosRidesController(DatabaseContext _context)
    {
      this.context = _context;
    }

    // Add Ride
    [HttpPost]
    public ActionResult<HollywoodStudiosRides> CreateEntry([FromBody] HollywoodStudiosRides entry)
    {
      context.HollywoodStudiosRide.Add(entry);
      context.SaveChanges();
      return entry;
    }

    // Get All Rides
    [HttpGet]
    public ActionResult<IEnumerable<HollywoodStudiosRides>> GetAllItems()
    {
      var rides = context.HollywoodStudiosRide.OrderByDescending(ride => ride.Id);
      return rides.ToList();
    }

    // Get A Ride
    [HttpGet("{id}")]
    public ActionResult GetOneItem(int id)
    {
      var ride = context.HollywoodStudiosRide.FirstOrDefault(q => q.Id == id);
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
    public ActionResult<HollywoodStudiosRides> UpdateRide(int id, [FromBody]HollywoodStudiosRides newDetails)
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
    public ActionResult<HollywoodStudiosRides> DeleteEntry([FromBody]HollywoodStudiosRides entry, int id)
    {
      var rideToDelete = context.HollywoodStudiosRide.FirstOrDefault(ride => ride.Id == id);
      context.HollywoodStudiosRide.Remove(rideToDelete);
      context.SaveChanges();
      return rideToDelete;
    }
  }
}