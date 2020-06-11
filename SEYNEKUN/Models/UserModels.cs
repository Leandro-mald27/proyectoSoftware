using System.Diagnostics;
using System.Reflection.Metadata;
using System;
using System.Security.Cryptography;
using Entity;
namespace SEYNEKUN.Models
{
    public class UserInputModel 
    {
        public string NombreUsuario { get; set; }
        public string Contrasena { get; set; }
        
        public string NombreCompleto { get; set; }
        public string Email { get; set; }
        public string Token { get; set; }
    }
    public class UserViewModel : UserInputModel
     {
        public UserViewModel()
        {

        }
        public UserViewModel (User user){
         NombreUsuario=user.NombreUsuario;
         Contrasena=user.Contrasena;
         Email=user.Email;
         NombreCompleto=user.NombreCompleto;
         Token=user.Token;
     }
     }
     
}