using Microsoft.EntityFrameworkCore;
using ProdutosApi.Models;

namespace ProdutosApi.Data
{
    public class ProdutosContext : DbContext
    {
        public ProdutosContext(DbContextOptions<ProdutosContext> options) : base(options) { }

        public DbSet<Produto> Produtos { get; set; }
    }
}
