using System.Linq;
using System;
using System.Collections.Generic;
using Datos;
using Entity;
namespace Logica
{
    public class UserService
    {
        private readonly  DatosContext _context;
        public UserService(DatosContext context)
        {
            _context=context;
        }
        public GuardarUserResponse Guardar(User  user)
        {
            try
            {
                 var userBuscar=BuscarPorUsuario(user.NombreUsuario);
                 if(userBuscar!=null){
                     return new GuardarUserResponse("Error Este Registro Ya Existe");

                 }
                 _context.Users.Add(user);
                 _context.SaveChanges();
                 return new GuardarUserResponse(user);
            }
            catch (Exception e)
            {
                return new GuardarUserResponse($"Error de la Aplicacion: {e.Message}");
            }
            
        }
        public User BuscarPorUsuario(string userName)
        {
            
            User user= _context.Users.Find(userName);
            
            return user;
        }

        public User Validate(string userName,string password){
            return _context.Users.Where(t=> t.NombreUsuario==userName && t.Contrasena==password && t.Estado=="AC").FirstOrDefault();
        }
        public class GuardarUserResponse 
    {
        public GuardarUserResponse(User user)
        {
            Error = false;
            User = user;
        }
        public GuardarUserResponse(string mensaje)
        {
            Error = true;
            Mensaje = mensaje;
        }
        public bool Error { get; set; }
        public string Mensaje { get; set; }
        public User User { get; set; }
    }
    }
}