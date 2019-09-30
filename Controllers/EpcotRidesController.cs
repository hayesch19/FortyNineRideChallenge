using System.Collections.Generic;
using System.Linq;
using FortyNineRideChallenge.Models;
using Microsoft.AspNetCore.Mvc;

namespace FortyNineRideChallenge.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class EpcotRidesController : ControllerBase
  {
    private DatabaseContext context;
    public EpcotRidesController(DatabaseContext _context)
    {
      this.context = _context;
    }

    // Add Ride
    [HttpPost]
    public ActionResult<EpcotRides> CreateEntry([FromBody] EpcotRides entry)
    {
      context.EpcotRide.Add(entry);
      context.SaveChanges();
      return entry;
    }

    // Get All Rides
    [HttpGet]
    public ActionResult<IEnumerable<EpcotRides>> GetAllItems()
    {
      var rides = context.EpcotRide.OrderByDescending(ride => ride.Id);
      return rides.ToList();
    }

    // Get A Ride
    [HttpGet("{id}")]
    public ActionResult GetOneItem(int id)
    {
      var ride = context.EpcotRide.FirstOrDefault(q => q.Id == id);
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
    public ActionResult<EpcotRides> UpdateRide(int id, [FromBody]EpcotRides newDetails)
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
    public ActionResult<EpcotRides> DeleteEntry([FromBody]EpcotRides entry, int id)
    {
      var rideToDelete = context.EpcotRide.FirstOrDefault(ride => ride.Id == id);
      context.EpcotRide.Remove(rideToDelete);
      context.SaveChanges();
      return rideToDelete;
    }
  }
}