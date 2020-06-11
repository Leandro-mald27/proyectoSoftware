using Entity;
using Microsoft.EntityFrameworkCore;
namespace Datos
{
    public class DatosContext:DbContext 
    {
        public DatosContext(DbContextOptions options) : base(options)
        {
            
        }
        public DbSet<Panela> AlmacenamientoProducto{get;set;}
        public DbSet<Productor> Productores{get;set;}
        public DbSet<User> Users { get; set; }
        public DbSet<Predio> Predios { get; set; }
    }
}