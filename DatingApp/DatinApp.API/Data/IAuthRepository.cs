using System.Threading.Tasks;
using DatinApp.API.Modules;

namespace DatinApp.API.Controllers
{
    public interface IAuthRepository
    {
        Task<User> Register(User user, string password);

        Task<User> Login(string username, string password);

        Task<bool> UserExists(string username);
    }
}