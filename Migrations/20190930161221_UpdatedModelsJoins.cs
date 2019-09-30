using Microsoft.EntityFrameworkCore.Migrations;

namespace sdgreacttemplate.Migrations
{
    public partial class UpdatedModelsJoins : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "DisneyWorldParkId",
                table: "DisneyWorldRide",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "DisneyWorldParksId",
                table: "DisneyWorldRide",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_DisneyWorldRide_DisneyWorldParksId",
                table: "DisneyWorldRide",
                column: "DisneyWorldParksId");

            migrationBuilder.AddForeignKey(
                name: "FK_DisneyWorldRide_DisneyWorldPark_DisneyWorldParksId",
                table: "DisneyWorldRide",
                column: "DisneyWorldParksId",
                principalTable: "DisneyWorldPark",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_DisneyWorldRide_DisneyWorldPark_DisneyWorldParksId",
                table: "DisneyWorldRide");

            migrationBuilder.DropIndex(
                name: "IX_DisneyWorldRide_DisneyWorldParksId",
                table: "DisneyWorldRide");

            migrationBuilder.DropColumn(
                name: "DisneyWorldParkId",
                table: "DisneyWorldRide");

            migrationBuilder.DropColumn(
                name: "DisneyWorldParksId",
                table: "DisneyWorldRide");
        }
    }
}
