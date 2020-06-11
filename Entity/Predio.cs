using System;
using System.ComponentModel.DataAnnotations;

namespace Entity
{
    public class Predio
    {
        [Key]
        public string Codigo { get; set; }
        public string Nombre{ get; set;}
        public string CodigoICA{get; set;}
        public string Vereda{get; set;}
        public string Municipio{get; set;}
  
        
    }
}