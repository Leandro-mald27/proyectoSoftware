using System;
using System.Security.Cryptography;
using Entity;

namespace SEYNEKUN.Models
{
    public class PredioInputModel
    {
        public string Codigo { get; set; }
        public string Nombre{ get; set;}
        public string CodigoICA{get; set;}
        public string Vereda{get; set;}
        public string Municipio{get; set;}
    }
     public class PredioViewModel : PredioInputModel
     {
        public PredioViewModel()
        {

        }
        public PredioViewModel(Predio predio)
        {
            Codigo=predio.Codigo;
            Nombre=predio.Nombre;
            CodigoICA=predio.CodigoICA;
            Vereda=predio.Vereda;
            Municipio=predio.Municipio;
        }
     }
}
