using Entity;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using SEYNEKUN.Models;
using SEYNEKUN.Config;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Http;
using Logica;
namespace seynekun.Service
{
    public class JwtService
    {
        private readonly AppSetting _appSettings;
        public JwtService(IOptions<AppSetting> appSettings)=> _appSettings = appSettings.Value;
        public UserViewModel GenerateToken(User userLogIn)
        {
            // return null if user not found
            if (userLogIn == null) 
            return null;
            var userResponse = new UserViewModel() { NombreCompleto=userLogIn.NombreCompleto, NombreUsuario = userLogIn.NombreUsuario };
            // authentication successful so generate jwt token
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, userLogIn.NombreUsuario.ToString()),
                    new Claim(ClaimTypes.Email, userLogIn.Email.ToString()),
                    new Claim(ClaimTypes.MobilePhone, userLogIn.Telefono.ToString()),
                    new Claim(ClaimTypes.Role, "Rol1"),
                    new Claim(ClaimTypes.Role, "Rol2"),
                    }),
                    Expires = DateTime.UtcNow.AddDays(7),
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
                    };
                    var token = tokenHandler.CreateToken(tokenDescriptor);
                    userResponse.Token = tokenHandler.WriteToken(token);
                    return userResponse;
                    }
        }
}
