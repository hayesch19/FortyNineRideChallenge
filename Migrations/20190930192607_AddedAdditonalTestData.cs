using Microsoft.EntityFrameworkCore.Migrations;

namespace sdgreacttemplate.Migrations
{
    public partial class AddedAdditonalTestData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "DisneyWorldRide",
                columns: new[] { "Id", "Complete", "DisneyWorldParkId", "DisneyWorldParksId", "Incomplete", "RideName" },
                values: new object[] { -1, null, -1, null, null, "Main Street Vehicles" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "DisneyWorldRide",
                keyColumn: "Id",
                keyValue: -1);
        }
    }
}
