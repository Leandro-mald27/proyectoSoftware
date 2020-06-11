using System;
using System.ComponentModel.DataAnnotations;

namespace Entity
{
    public class Panela
    {
        [Key]
        public string Idregistro { get; set; }
        public DateTime FechaIngreso{ get; set;}
        public string NumeroLote{get; set;}
        public string NumeroLoteAgricola{get; set;}
        public string Etapas{get; set;}
        public string Cantidad{get; set;}
        public string Responsable{get; set;}
        public string Unidad { get; set; }
        
    }
}
