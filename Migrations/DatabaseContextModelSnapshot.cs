﻿// <auto-generated />
using System;
using FortyNineRideChallenge;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace sdgreacttemplate.Migrations
{
    [DbContext(typeof(DatabaseContext))]
    partial class DatabaseContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn)
                .HasAnnotation("ProductVersion", "2.2.0-rtm-35687")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            modelBuilder.Entity("FortyNineRideChallenge.Models.DisneyWorldParks", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ParkName");

                    b.HasKey("Id");

                    b.ToTable("DisneyWorldPark");
                });

            modelBuilder.Entity("FortyNineRideChallenge.Models.DisneyWorldRides", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Complete");

                    b.Property<int>("DisneyWorldParkId");

                    b.Property<int?>("DisneyWorldParksId");

                    b.Property<string>("Incomplete");

                    b.Property<string>("RideName");

                    b.HasKey("Id");

                    b.HasIndex("DisneyWorldParksId");

                    b.ToTable("DisneyWorldRide");
                });

            modelBuilder.Entity("FortyNineRideChallenge.Models.DisneyWorldRides", b =>
                {
                    b.HasOne("FortyNineRideChallenge.Models.DisneyWorldParks", "DisneyWorldParks")
                        .WithMany("DisneyWorldRide")
                        .HasForeignKey("DisneyWorldParksId");
                });
#pragma warning restore 612, 618
        }
    }
}
