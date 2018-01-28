using ContactManager.Model;
using JetBrains.Annotations;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace ContactManager.Context
{
    public class ContactContext : DbContext
    {
        public ContactContext(DbContextOptions options) : base(options)
        { }

        public DbSet<Customer> Customers { get; set; }
        public DbSet<Supplier> Suppliers { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Customer>().ToTable("Customer");
            modelBuilder.Entity<Supplier>().ToTable("Supplier");
        }
    }
}
