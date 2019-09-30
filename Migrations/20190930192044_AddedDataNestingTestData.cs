using Microsoft.EntityFrameworkCore.Migrations;

namespace sdgreacttemplate.Migrations
{
    public partial class AddedDataNestingTestData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "DisneyWorldPark",
                columns: new[] { "Id", "ParkName" },
                values: new object[] { -1, "Magic Kingdom" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "DisneyWorldPark",
                keyColumn: "Id",
                keyValue: -1);
        }
    }
}
