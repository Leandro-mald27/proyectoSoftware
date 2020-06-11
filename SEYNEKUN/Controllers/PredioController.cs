using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Entity;
using Logica;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using SEYNEKUN.Models;
using Datos;
namespace SEYNEKUN.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PredioController : ControllerBase
    {
        private readonly PredioService _predioService;
        public IConfiguration Configuration { get; }
        public PredioController(DatosContext _context)
        {
            _predioService = new PredioService(_context);
        }
         // POST: api/Predio
        [HttpPost]
        public ActionResult<PredioViewModel> Post(PredioInputModel predioInput)
        {
            Predio predio = MapearPredio(predioInput);
            var response = _predioService.Guardar(predio);
            if (response.Error) 
            {
                ModelState.AddModelError("Guardar Predio", response.Mensaje);
                var problemDetails= new ValidationProblemDetails(ModelState){
                    Status= StatusCodes.Status400BadRequest,
                };
                return BadRequest(problemDetails);
            }
            return Ok(response.Predio);
        }
         // GET: api/Panela
        [HttpGet]
        public IEnumerable<PredioViewModel> Gets()
        {
            var  predio = _predioService.ConsultarTodos().Select(p=> new  PredioViewModel(p));
            return  predio;
        }
        private Predio MapearPredio(PredioInputModel predioInput)
        {
            var  predio = new Predio
            {
                Codigo = predioInput.Codigo,
                Nombre=  predioInput.Nombre,
                CodigoICA =  predioInput.CodigoICA,
                Vereda= predioInput.Vereda,
                Municipio= predioInput.Municipio,
                
            };
            return predio;
        }


    }
}
