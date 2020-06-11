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
    public class ProductorController : ControllerBase
    {
        private readonly ProductorService _productorService;
        public IConfiguration Configuration { get; }
        public ProductorController(DatosContext _context)
        {
        
            _productorService = new ProductorService(_context);
        }
        // GET: api/productor
        [HttpGet]
        public IEnumerable<ProductorViewModel> Gets()
        {
            var  productores = _productorService.ConsultarTodos().Select(p=> new  ProductorViewModel(p));
            return  productores;
        }
        // POST: api/productor
        [HttpPost]
        public ActionResult<ProductorViewModel> Post(ProductorInputModel productorInput)
        {
            Productor productor = MapearProductor(productorInput);
            var response = _productorService.Guardar(productor);
            if (response.Error) 
            {
                ModelState.AddModelError("Guardar Productor", response.Mensaje);
                var problemDetails= new ValidationProblemDetails(ModelState){
                    Status= StatusCodes.Status400BadRequest,
                };
                return BadRequest(problemDetails);
            }
            return Ok(response.Productor);
        }

       

        
        
        private Productor MapearProductor(ProductorInputModel productorInput)
        {
            var  productor= new Productor
            {
                Cedula = productorInput.Cedula,
                Nombre=  productorInput.Nombre,
                CodigoProductor =  productorInput.CodigoProductor,
                NumeroTelefonico= productorInput.NumeroTelefonico,
                Afiliacion= productorInput.Afiliacion,
                Actividad= productorInput.Actividad,
            };
            return productor;
        }
       
}
}