using Microsoft.EntityFrameworkCore;
using Store.API.Models;

namespace Store.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base (options){}
        public DbSet<Value> Values { get; set; }
    }
}