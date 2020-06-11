using System.ComponentModel.DataAnnotations;
using System;
namespace Entity
{
    public class User
    {
        [Key]
        public string NombreUsuario { get; set; }
        public string Contrasena { get; set; }
        [Required]
        [StringLength(13)]
        public string Estado { get; set; }
        [Required]
        [StringLength(35)]
        public string NombreCompleto { get; set; }
        [Required]
        [StringLength(13)]
        public string Telefono { get; set; }
         
        
        [Required]
        [StringLength(30)]
        public string Email { get; set; }

        public string Token { get; set; }
    }
}