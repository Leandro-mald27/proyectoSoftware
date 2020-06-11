using System.Linq;
using System;
using System.Collections.Generic;
using Datos;
using Entity;
namespace Logica{

    public class PredioService{

        private readonly  DatosContext _context;
        public PredioService(DatosContext context)
        {
            _context=context;
        }
        public GuardarPredioResponse Guardar(Predio  predio)
        {
            try
            {
                 var predioBuscar=_context.Predios.Find(predio.Codigo);
                 if(predioBuscar!=null){
                     return new GuardarPredioResponse("Error Este Registro Ya Existe");

                 }
                 _context.Predios.Add(predio);
                 _context.SaveChanges();
                 return new GuardarPredioResponse(predio);
            }
            catch (Exception e)
            {
                return new GuardarPredioResponse($"Error de la Aplicacion: {e.Message}");
            }
        }
        public List<Predio> ConsultarTodos()
        {
            
            List<Predio>  predio = _context.Predios.ToList();
            
            return  predio;
        }
        public Predio BuscarPorIdentificacion(string codigo)
        {
            
            Predio predio= _context.Predios.Find(codigo);
            
            return predio;
        }
        public class GuardarPredioResponse 
    {
        public GuardarPredioResponse(Predio  predio)
        {
            Error = false;
            Predio = predio;
        }
        public GuardarPredioResponse(string mensaje)
        {
            Error = true;
            Mensaje = mensaje;
        }
        public bool Error { get; set; }
        public string Mensaje { get; set; }
        public Predio Predio { get; set; }
    }

    }
}
