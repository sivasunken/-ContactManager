﻿// <auto-generated />
using Business.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using System;

namespace Business.Migrations
{
    [DbContext(typeof(ContactContext))]
    partial class ContactContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.0.1-rtm-125")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Business.Model.Customer", b =>
                {
                    b.Property<long>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime?>("Birthday");

                    b.Property<string>("Email");

                    b.Property<int?>("NameID");

                    b.HasKey("ID");

                    b.HasIndex("NameID");

                    b.ToTable("Customers");
                });

            modelBuilder.Entity("Business.Model.Name", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("First");

                    b.Property<string>("Last");

                    b.HasKey("ID");

                    b.ToTable("Name");
                });

            modelBuilder.Entity("Business.Model.Supplier", b =>
                {
                    b.Property<long>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("NameID");

                    b.Property<string>("Telephone");

                    b.HasKey("ID");

                    b.HasIndex("NameID");

                    b.ToTable("Suppliers");
                });

            modelBuilder.Entity("Business.Model.Customer", b =>
                {
                    b.HasOne("Business.Model.Name", "Name")
                        .WithMany()
                        .HasForeignKey("NameID");
                });

            modelBuilder.Entity("Business.Model.Supplier", b =>
                {
                    b.HasOne("Business.Model.Name", "Name")
                        .WithMany()
                        .HasForeignKey("NameID");
                });
#pragma warning restore 612, 618
        }
    }
}
