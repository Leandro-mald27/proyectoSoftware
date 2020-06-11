using System.Net;
using Datos;
using Logica;
using Entity;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using SEYNEKUN.Config;
using SEYNEKUN.Models;
using seynekun.Service;
namespace SEYNEKUN.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class LoginController: ControllerBase
    {
        DatosContext _context;
        UserService _userService;
        JwtService _jwtService;
        public LoginController(DatosContext context, IOptions<AppSetting> appSettings)
        {
            _context = context;
            var admin = _context.Users.Find("admin");
            
            if (admin == null)
            {
                _context.Users.Add(new User()
                {
                    NombreUsuario="admin",
                    Contrasena="admin",
                    Estado="AC",
                    NombreCompleto="Adminitrador",
                    Telefono="318000",
                    Email="leandro@gmail.com"
                });
                    var registrosGuardados=_context.SaveChanges();
             }
                    _userService = new UserService(context);
                    _jwtService = new JwtService(appSettings);
        }
        [AllowAnonymous]
        [HttpPost]
        public IActionResult Login([FromBody]UserInputModel model)
        {
            var user = _userService.Validate(model.NombreUsuario, model.Contrasena);
            if (user == null) return BadRequest("Acceso Denegado Usuario y/o contraseña incorrectos");
            var response= _jwtService.GenerateToken(user);
            return Ok(response);
        }
    }
}
