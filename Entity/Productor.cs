using System;
using System.ComponentModel.DataAnnotations;

namespace Entity
{
    public class Productor
    {
        [Key]
        public string Cedula { get; set; }
        public string Nombre{ get; set;}
        public string CodigoProductor{get; set;}
        public string NumeroTelefonico{get; set;}
        public string Afiliacion{get; set;}
        public string Actividad{get; set;}
        
        
    }
}