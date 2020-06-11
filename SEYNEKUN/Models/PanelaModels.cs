using System;
using System.Security.Cryptography;
using Entity;

namespace SEYNEKUN.Models
{
    public class PanelaInputModel
    {
        public string Idregistro { get; set; }
        public DateTime FechaIngreso{ get; set;}
        public string NumeroLote{get; set;}
        public string NumeroLoteAgricola{get; set;}
        public string Etapas{get; set;}
        public string Cantidad{get; set;}
        public string Responsable{get; set;}
        public string Unidad { get; set; }
        
         
         }
       public class PanelaViewModel : PanelaInputModel
     {
        public PanelaViewModel()
        {

        }
        public PanelaViewModel(Panela panela)
        {
            Idregistro = panela.Idregistro;
            FechaIngreso = panela.FechaIngreso;
            NumeroLote = panela.NumeroLote;
            NumeroLoteAgricola = panela.NumeroLoteAgricola;
            Etapas = panela.Etapas;
            Cantidad = panela.Cantidad;
            Responsable = panela.Responsable;
            Unidad=panela.Unidad;
        }
            
    }
}