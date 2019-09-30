using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace sdgreacttemplate.Migrations
{
    public partial class UpdatedModels : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "DisneyWorldPark",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    ParkName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DisneyWorldPark", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "DisneyWorldRide",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    RideName = table.Column<string>(nullable: true),
                    Complete = table.Column<bool>(nullable: false),
                    DisneyWorldParkId = table.Column<int>(nullable: false),
                    DisneyWorldParksId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DisneyWorldRide", x => x.Id);
                    table.ForeignKey(
                        name: "FK_DisneyWorldRide_DisneyWorldPark_DisneyWorldParksId",
                        column: x => x.DisneyWorldParksId,
                        principalTable: "DisneyWorldPark",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.InsertData(
                table: "DisneyWorldPark",
                columns: new[] { "Id", "ParkName" },
                values: new object[,]
                {
                    { -1, "Magic Kingdom" },
                    { -2, "Animal Kingdom" },
                    { -3, "Hollywood Studios" },
                    { -4, "Epcot" }
                });

            migrationBuilder.InsertData(
                table: "DisneyWorldRide",
                columns: new[] { "Id", "Complete", "DisneyWorldParkId", "DisneyWorldParksId", "RideName" },
                values: new object[,]
                {
                    { -1, false, -1, null, "Main Street Vehicles" },
                    { -2, false, -2, null, "Kilimanjaro Safari" },
                    { -3, false, -3, null, "Toy Story Midway Mania" },
                    { -4, false, -4, null, "Spaceship Earth" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_DisneyWorldRide_DisneyWorldParksId",
                table: "DisneyWorldRide",
                column: "DisneyWorldParksId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DisneyWorldRide");

            migrationBuilder.DropTable(
                name: "DisneyWorldPark");
        }
    }
}
