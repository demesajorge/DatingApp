using System;
using DatinApp.API.Modules;
using Microsoft.EntityFrameworkCore;

namespace DatinApp.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options){}

        public DbSet<Value> Values { get; set; }
        public DbSet<User>  Users { get; set; }
        public DbSet<Photo> Photos { get; set; }

        internal void Delete<T>(T entity) where T : class
        {
            throw new NotImplementedException();
        }
    }
}