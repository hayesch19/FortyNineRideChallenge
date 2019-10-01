using System.Collections.Generic;
using System.Linq;
using FortyNineRideChallenge.Models;
using Microsoft.AspNetCore.Mvc;

namespace FortyNineRideChallenge.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class DWParksController : ControllerBase
  {
    private DatabaseContext context;
    public DWParksController(DatabaseContext _context)
    {
      this.context = _context;
    }

    // Add A Park
    [HttpPost]
    public ActionResult<DisneyWorldParks> CreateRide([FromBody] DisneyWorldParks entry)
    {
      context.DisneyWorldPark.Add(entry);
      context.SaveChanges();
      return entry;
    }

    // Get All Parks
    [HttpGet]
    public ActionResult<IEnumerable<DisneyWorldParks>> GetAllParks()
    {
      var parks = context.DisneyWorldPark.OrderByDescending(park => park.Id);
      return parks.ToList();
    }

    // Get A Park
    [HttpGet("{id}")]
    public ActionResult GetOnePark(int id)
    {
      var park = context.DisneyWorldPark.FirstOrDefault(p => p.Id == id);
      if (park == null)
      {
        return NotFound();
      }
      else
      {
        return Ok(park);
      }
    }

    // Update Park
    [HttpPut("{id}")]
    public ActionResult<DisneyWorldParks> UpdateRide(int id, [FromBody]DisneyWorldParks newDetails)
    {
      if (id != newDetails.Id)
      {
        return BadRequest();
      }
      context.Entry(newDetails).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
      context.SaveChanges();
      return newDetails;
    }

    // Delete Park
    [HttpDelete("{id}")]
    public ActionResult<DisneyWorldParks> DeletePark([FromBody]DisneyWorldParks entry, int id)
    {
      var parkToDelete = context.DisneyWorldPark.FirstOrDefault(park => park.Id == id);
      context.DisneyWorldPark.Remove(parkToDelete);
      context.SaveChanges();
      return parkToDelete;
    }

    // Add Park Ride
    [HttpPost("{DisneyWorldParkId}/parkride")]
    public ActionResult<DisneyWorldRides> CreateRide(int DisneyWorldParkId, [FromBody]DisneyWorldRides disneyWorldRides)
    {
      var park = context.DisneyWorldPark.FirstOrDefault(p => p.Id == DisneyWorldParkId);
      if (park == null)
      {
        return NotFound();
      }
      else
      {
        disneyWorldRides.DisneyWorldParkId = DisneyWorldParkId;
        context.DisneyWorldRide.Add(disneyWorldRides);
        context.SaveChanges();
        return Ok(new
        {

        });
      }
    }

    // Get Park Specific Rides
    [HttpGet("{disneyWorldParkId}/rides")]
    public ActionResult GetParkRides(int disneyWorldParkId)
    {
      var ride = context.DisneyWorldRide.Where(w => w.DisneyWorldParkId == disneyWorldParkId);
      if (ride == null)
      {
        return NotFound();
      }
      else
      {
        return Ok(ride);
      }
    }
  }
}