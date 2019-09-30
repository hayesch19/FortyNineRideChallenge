using System.Collections.Generic;
using FortyNineRideChallenge.Models;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
namespace FortyNineRideChallenge.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class DWRidesController : ControllerBase
  {
    private DatabaseContext context;
    public DWRidesController(DatabaseContext _context)
    {
      this.context = _context;
    }

    // Add A Ride
    [HttpPost]
    public ActionResult<DisneyWorldRides> CreateRide([FromBody] DisneyWorldRides entry)
    {
      context.DisneyWorldRide.Add(entry);
      context.SaveChanges();
      return entry;
    }

    // Get All Rides
    [HttpGet]
    public ActionResult<IEnumerable<DisneyWorldRides>> GetAllRides()
    {
      var rides = context.DisneyWorldRide.OrderByDescending(ride => ride.Id);
      return rides.ToList();
    }

    // Get A Ride
    [HttpGet("{id}")]
    public ActionResult GetOneRide(int id)
    {
      var ride = context.DisneyWorldRide.FirstOrDefault(r => r.Id == id);
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
    public ActionResult<DisneyWorldRides> UpdateRide(int id, [FromBody]DisneyWorldRides newDetails)
    {
      if (id != newDetails.Id)
      {
        return BadRequest();
      }
      context.Entry(newDetails).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
      context.SaveChanges();
      return newDetails;
    }

    // Delete Ride
    [HttpDelete("{id}")]
    public ActionResult<DisneyWorldRides> DeleteRide([FromBody]DisneyWorldRides entry, int id)
    {
      var rideToDelete = context.DisneyWorldRide.FirstOrDefault(ride => ride.Id == id);
      context.DisneyWorldRide.Remove(rideToDelete);
      context.SaveChanges();
      return rideToDelete;
    }
  }
}