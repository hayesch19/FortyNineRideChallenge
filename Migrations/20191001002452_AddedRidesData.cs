using Microsoft.EntityFrameworkCore.Migrations;

namespace sdgreacttemplate.Migrations
{
    public partial class AddedRidesData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "DisneyWorldRide",
                keyColumn: "Id",
                keyValue: -4,
                columns: new[] { "DisneyWorldParkId", "RideName" },
                values: new object[] { -1, "Pirates of the Caribbean" });

            migrationBuilder.UpdateData(
                table: "DisneyWorldRide",
                keyColumn: "Id",
                keyValue: -3,
                columns: new[] { "DisneyWorldParkId", "RideName" },
                values: new object[] { -1, "Jungle Cruise" });

            migrationBuilder.UpdateData(
                table: "DisneyWorldRide",
                keyColumn: "Id",
                keyValue: -2,
                columns: new[] { "DisneyWorldParkId", "RideName" },
                values: new object[] { -1, "Walt Disney World Railroad" });

            migrationBuilder.InsertData(
                table: "DisneyWorldRide",
                columns: new[] { "Id", "Complete", "DisneyWorldParkId", "DisneyWorldParksId", "RideName" },
                values: new object[,]
                {
                    { -29, false, -2, null, "Expedition Everest" },
                    { -30, false, -2, null, "Dinosaur" },
                    { -31, false, -2, null, "Primeval Whirl" },
                    { -32, false, -2, null, "TriceraTop Spin" },
                    { -33, false, -2, null, "Flight of Passage" },
                    { -34, false, -2, null, "Na’vi River Journey" },
                    { -35, false, -3, null, "Toy Story Midway Mania" },
                    { -36, false, -3, null, "Star Tours" },
                    { -37, false, -3, null, "Rock ‘n’ Roller Coaster" },
                    { -39, false, -3, null, "Slinky Dog Dash" },
                    { -28, false, -2, null, "Kali River Rapids" },
                    { -40, false, -3, null, "Alien Swirling Saucers" },
                    { -41, false, -3, null, "Millennium Falcon Smugglers Run" },
                    { -42, false, -4, null, "Spaceship Earth" },
                    { -43, false, -4, null, "Mission: SPACE" },
                    { -44, false, -4, null, "Test Track" },
                    { -45, false, -4, null, "Journey Into Imagination" },
                    { -46, false, -4, null, "Soarin’" },
                    { -47, false, -4, null, "Living with the Land" },
                    { -38, false, -3, null, "Twilight Zone Tower of Terror" },
                    { -27, false, -2, null, "Wildlife Express" },
                    { -25, false, -1, null, "Carousel of Progress" },
                    { -48, false, -4, null, "The Seas with Nemo and Friends" },
                    { -5, false, -1, null, "Magic Carpets of Aladdin" },
                    { -6, false, -1, null, "Splash Mountain" },
                    { -7, false, -1, null, "Big Thunder Mountain" },
                    { -8, false, -1, null, "Rafts to Tom Sawyer Island" },
                    { -9, false, -1, null, "Liberty Belle Riverboat" },
                    { -10, false, -1, null, "Haunted Mansion" },
                    { -11, false, -1, null, "It’s a Small World" },
                    { -12, false, -1, null, "Peter Pan’s Flight" },
                    { -13, false, -1, null, "Prince Charming Regal Carousel" },
                    { -26, false, -2, null, "Kilimanjaro Safari" },
                    { -14, false, -1, null, "Many Adventures of Winnie the Pooh" },
                    { -16, false, -1, null, "Seven Dwarfs Mine Train" },
                    { -17, false, -1, null, "Mad Tea Party" },
                    { -18, false, -1, null, "Dumbo the Flying Elephant" },
                    { -19, false, -1, null, "Barnstormer" },
                    { -20, false, -1, null, "Tomorrowland Speedway" },
                    { -21, false, -1, null, "Tomorrowland Transit Authority PeopleMover" },
                    { -22, false, -1, null, "Space Mountain" },
                    { -23, false, -1, null, "Buzz Lightyear Space Ranger Spin" },
                    { -24, false, -1, null, "AstroOrbiter" },
                    { -15, false, -1, null, "Under the Sea — Journey of the Little Mermaid" },
                    { -49, false, -4, null, "Frozen Ever After" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "DisneyWorldRide",
                keyColumn: "Id",
                keyValue: -49);

            migrationBuilder.DeleteData(
                table: "DisneyWorldRide",
                keyColumn: "Id",
                keyValue: -48);

            migrationBuilder.DeleteData(
                table: "DisneyWorldRide",
                keyColumn: "Id",
                keyValue: -47);

            migrationBuilder.DeleteData(
                table: "DisneyWorldRide",
                keyColumn: "Id",
                keyValue: -46);

            migrationBuilder.DeleteData(
                table: "DisneyWorldRide",
                keyColumn: "Id",
                keyValue: -45);

            migrationBuilder.DeleteData(
                table: "DisneyWorldRide",
                keyColumn: "Id",
                keyValue: -44);

            migrationBuilder.DeleteData(
                table: "DisneyWorldRide",
                keyColumn: "Id",
                keyValue: -43);

            migrationBuilder.DeleteData(
                table: "DisneyWorldRide",
                keyColumn: "Id",
                keyValue: -42);

            migrationBuilder.DeleteData(
                table: "DisneyWorldRide",
                keyColumn: "Id",
                keyValue: -41);

            migrationBuilder.DeleteData(
                table: "DisneyWorldRide",
                keyColumn: "Id",
                keyValue: -40);

            migrationBuilder.DeleteData(
                table: "DisneyWorldRide",
                keyColumn: "Id",
                keyValue: -39);

            migrationBuilder.DeleteData(
                table: "DisneyWorldRide",
                keyColumn: "Id",
                keyValue: -38);

            migrationBuilder.DeleteData(
                table: "DisneyWorldRide",
                keyColumn: "Id",
                keyValue: -37);

            migrationBuilder.DeleteData(
                table: "DisneyWorldRide",
                keyColumn: "Id",
                keyValue: -36);

            migrationBuilder.DeleteData(
                table: "DisneyWorldRide",
                keyColumn: "Id",
                keyValue: -35);

            migrationBuilder.DeleteData(
                table: "DisneyWorldRide",
                keyColumn: "Id",
                keyValue: -34);

            migrationBuilder.DeleteData(
                table: "DisneyWorldRide",
                keyColumn: "Id",
                keyValue: -33);

            migrationBuilder.DeleteData(
                table: "DisneyWorldRide",
                keyColumn: "Id",
                keyValue: -32);

            migrationBuilder.DeleteData(
                table: "DisneyWorldRide",
                keyColumn: "Id",
                keyValue: -31);

            migrationBuilder.DeleteData(
                table: "DisneyWorldRide",
                keyColumn: "Id",
                keyValue: -30);

            migrationBuilder.DeleteData(
                table: "DisneyWorldRide",
                keyColumn: "Id",
                keyValue: -29);

            migrationBuilder.DeleteData(
                table: "DisneyWorldRide",
                keyColumn: "Id",
                keyValue: -28);

            migrationBuilder.DeleteData(
                table: "DisneyWorldRide",
                keyColumn: "Id",
                keyValue: -27);

            migrationBuilder.DeleteData(
                table: "DisneyWorldRide",
                keyColumn: "Id",
                keyValue: -26);

            migrationBuilder.DeleteData(
                table: "DisneyWorldRide",
                keyColumn: "Id",
                keyValue: -25);

            migrationBuilder.DeleteData(
                table: "DisneyWorldRide",
                keyColumn: "Id",
                keyValue: -24);

            migrationBuilder.DeleteData(
                table: "DisneyWorldRide",
                keyColumn: "Id",
                keyValue: -23);

            migrationBuilder.DeleteData(
                table: "DisneyWorldRide",
                keyColumn: "Id",
                keyValue: -22);

            migrationBuilder.DeleteData(
                table: "DisneyWorldRide",
                keyColumn: "Id",
                keyValue: -21);

            migrationBuilder.DeleteData(
                table: "DisneyWorldRide",
                keyColumn: "Id",
                keyValue: -20);

            migrationBuilder.DeleteData(
                table: "DisneyWorldRide",
                keyColumn: "Id",
                keyValue: -19);

            migrationBuilder.DeleteData(
                table: "DisneyWorldRide",
                keyColumn: "Id",
                keyValue: -18);

            migrationBuilder.DeleteData(
                table: "DisneyWorldRide",
                keyColumn: "Id",
                keyValue: -17);

            migrationBuilder.DeleteData(
                table: "DisneyWorldRide",
                keyColumn: "Id",
                keyValue: -16);

            migrationBuilder.DeleteData(
                table: "DisneyWorldRide",
                keyColumn: "Id",
                keyValue: -15);

            migrationBuilder.DeleteData(
                table: "DisneyWorldRide",
                keyColumn: "Id",
                keyValue: -14);

            migrationBuilder.DeleteData(
                table: "DisneyWorldRide",
                keyColumn: "Id",
                keyValue: -13);

            migrationBuilder.DeleteData(
                table: "DisneyWorldRide",
                keyColumn: "Id",
                keyValue: -12);

            migrationBuilder.DeleteData(
                table: "DisneyWorldRide",
                keyColumn: "Id",
                keyValue: -11);

            migrationBuilder.DeleteData(
                table: "DisneyWorldRide",
                keyColumn: "Id",
                keyValue: -10);

            migrationBuilder.DeleteData(
                table: "DisneyWorldRide",
                keyColumn: "Id",
                keyValue: -9);

            migrationBuilder.DeleteData(
                table: "DisneyWorldRide",
                keyColumn: "Id",
                keyValue: -8);

            migrationBuilder.DeleteData(
                table: "DisneyWorldRide",
                keyColumn: "Id",
                keyValue: -7);

            migrationBuilder.DeleteData(
                table: "DisneyWorldRide",
                keyColumn: "Id",
                keyValue: -6);

            migrationBuilder.DeleteData(
                table: "DisneyWorldRide",
                keyColumn: "Id",
                keyValue: -5);

            migrationBuilder.UpdateData(
                table: "DisneyWorldRide",
                keyColumn: "Id",
                keyValue: -4,
                columns: new[] { "DisneyWorldParkId", "RideName" },
                values: new object[] { -4, "Spaceship Earth" });

            migrationBuilder.UpdateData(
                table: "DisneyWorldRide",
                keyColumn: "Id",
                keyValue: -3,
                columns: new[] { "DisneyWorldParkId", "RideName" },
                values: new object[] { -3, "Toy Story Midway Mania" });

            migrationBuilder.UpdateData(
                table: "DisneyWorldRide",
                keyColumn: "Id",
                keyValue: -2,
                columns: new[] { "DisneyWorldParkId", "RideName" },
                values: new object[] { -2, "Kilimanjaro Safari" });
        }
    }
}
