using System;
using System.Security.Cryptography;
using Entity;

namespace SEYNEKUN.Models
{
    public class ProductorInputModel
    {
        public string Cedula { get; set; }
        public string Nombre{get; set;}
        public string CodigoProductor{get; set;}
        public string NumeroTelefonico{get; set;}
        public string Afiliacion{get; set;}
        public string Actividad{get; set;}
        
         
         }
       public class ProductorViewModel : ProductorInputModel
     {
        public ProductorViewModel()
        {

        }
        public ProductorViewModel(Productor productor)
        {
            Cedula = productor.Cedula;
            Nombre = productor.Nombre;
            CodigoProductor = productor.CodigoProductor;
            NumeroTelefonico = productor.NumeroTelefonico;
            Afiliacion = productor.Afiliacion;
            Actividad = productor.Actividad;
            
        }
            
    }
}