using System.Data.Entity;
using FinderSolver.Core.Entities;

namespace FinderSolver.EFInfrastructure
{
    public class FinderSolverContext : DbContext
    {
        public DbSet<User> Users { get; set; }
    }
}
