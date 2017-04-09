using System.Web.Http;
using FinderSolver.API.Models.Dto;

namespace FinderSolver.API.Controllers
{
    public class AccountController : ApiController
    {
        public IHttpActionResult Login(LoginDto loginDto)
        {
            return Ok();
        }
    }
}
