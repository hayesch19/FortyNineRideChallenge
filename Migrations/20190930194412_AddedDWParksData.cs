using Microsoft.EntityFrameworkCore.Migrations;

namespace sdgreacttemplate.Migrations
{
    public partial class AddedDWParksData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "DisneyWorldPark",
                columns: new[] { "Id", "ParkName" },
                values: new object[,]
                {
                    { -2, "Animal Kingdom" },
                    { -3, "Hollywood Studios" },
                    { -4, "Epcot" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "DisneyWorldPark",
                keyColumn: "Id",
                keyValue: -4);

            migrationBuilder.DeleteData(
                table: "DisneyWorldPark",
                keyColumn: "Id",
                keyValue: -3);

            migrationBuilder.DeleteData(
                table: "DisneyWorldPark",
                keyColumn: "Id",
                keyValue: -2);
        }
    }
}
