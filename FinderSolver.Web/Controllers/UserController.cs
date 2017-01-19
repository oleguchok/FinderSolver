using System.Web.Http;

namespace FinderSolver.Web.Controllers
{
    using FinderSolver.EFInfrastructure;

    public class UserController : ApiController
    {
        private readonly FinderSolverContext _db = new FinderSolverContext();

        public IHttpActionResult GetUsers()
        {
            var users = _db.Users;
            return Ok(users);
        }
    }
}
