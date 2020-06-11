using System.Linq;
using System;
using System.Collections.Generic;
using Datos;
using Entity;

namespace Logica
{
    public class PanelaService
    {
        private readonly  DatosContext _context;
        public PanelaService(DatosContext context)
        {
            _context=context;
        }
        public GuardarPanelaResponse Guardar(Panela  panela)
        {
            try
            {
                 var productoBuscar=_context.AlmacenamientoProducto.Find(panela.Idregistro);
                 if(productoBuscar!=null){
                     return new GuardarPanelaResponse("Error Este Registro Ya Existe");

                 }
                 _context.AlmacenamientoProducto.Add(panela);
                 _context.SaveChanges();
                 return new GuardarPanelaResponse(panela);
            }
            catch (Exception e)
            {
                return new GuardarPanelaResponse($"Error de la Aplicacion: {e.Message}");
            }
            
        }
        public List<Panela> ConsultarTodos()
        {
            
            List<Panela>  panelas = _context.AlmacenamientoProducto.ToList();
            
            return  panelas;
        }
        public Panela BuscarPorIdentificacion(string idregistro)
        {
            
            Panela panela = _context.AlmacenamientoProducto.Find(idregistro);
            
            return panela;
        }

        public string Eliminar(string idregistro)
        {
            try
            {
                
                var panela = _context.AlmacenamientoProducto.Find(idregistro);
                if (panela != null)
                {
                   _context.AlmacenamientoProducto.Remove(panela);
                    _context.SaveChanges();
                    return ($"El registro {panela.Idregistro} se ha eliminado satisfactoriamente.");
                }
                else
                {
                    return ($"Lo sentimos, {idregistro} no se encuentra registrada.");
                }
            }
            catch (Exception e)
            {

                return $"Error de la Aplicación: {e.Message}";
            }
            
        }
        public string Modificar(Panela panelaNueva)
        {
            try
            {
                
                var panelaVieja = _context.AlmacenamientoProducto.Find(panelaNueva.Idregistro);
                if (panelaVieja != null)
                {
                   panelaVieja.Idregistro=panelaNueva.Idregistro;
                   panelaVieja.FechaIngreso=panelaNueva.FechaIngreso;
                   panelaVieja.NumeroLote=panelaNueva.NumeroLote;
                   panelaVieja.NumeroLoteAgricola=panelaNueva.NumeroLoteAgricola;
                   panelaVieja.Etapas=panelaNueva.Etapas;
                   panelaVieja.Cantidad=panelaNueva.Cantidad;
                   panelaVieja.Responsable=panelaNueva.Responsable;
                    _context.SaveChanges();
                    return ($"El registro {panelaNueva.Idregistro} se ha modificado satisfactoriamente.");
                }
                else
                {
                    return ($"Lo sentimos, {panelaNueva.Idregistro} no se encuentra registrada.");
                }
            }
            catch (Exception e)
            {

                return $"Error de la Aplicación: {e.Message}";
            }
            
        }



        public class GuardarPanelaResponse 
    {
        public GuardarPanelaResponse(Panela panela)
        {
            Error = false;
            Panela = panela;
        }
        public GuardarPanelaResponse(string mensaje)
        {
            Error = true;
            Mensaje = mensaje;
        }
        public bool Error { get; set; }
        public string Mensaje { get; set; }
        public Panela Panela { get; set; }
    }
}
}

