using System.Linq;
using System;
using System.Collections.Generic;
using Datos;
using Entity;

namespace Logica
{
    public class ProductorService
    {
        private readonly  DatosContext _context;
        public ProductorService(DatosContext context)
        {
            _context=context;
        }
        public GuardarProductorResponse Guardar(Productor  productor)
        {
            try
            {
                 var productoBuscar=_context.Productores.Find(productor.Cedula);
                 if(productoBuscar!=null){
                     return new GuardarProductorResponse("Error Este Registro Ya Existe");

                 }
                 _context.Productores.Add(productor);
                 _context.SaveChanges();
                 return new GuardarProductorResponse(productor);
            }
            catch (Exception e)
            {
                return new GuardarProductorResponse($"Error de la Aplicacion: {e.Message}");
            }
            
        }
        public List<Productor> ConsultarTodos()
        {
            
            List<Productor>  productor = _context.Productores.ToList();
            
            return  productor;
        }
        public Productor BuscarPorIdentificacion(string cedula)
        {
            
            Productor productor= _context.Productores.Find(cedula);
            
            return productor;
        }

       
        

        public class GuardarProductorResponse 
    {
        public GuardarProductorResponse(Productor productor)
        {
            Error = false;
            Productor = productor;
        }
        public GuardarProductorResponse(string mensaje)
        {
            Error = true;
            Mensaje = mensaje;
        }
        public bool Error { get; set; }
        public string Mensaje { get; set; }
        public Productor Productor { get; set; }
    }
}
}

