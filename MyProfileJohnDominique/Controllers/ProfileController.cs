using Microsoft.AspNetCore.Mvc;
using StudentMVC.Models;

namespace StudentMVC.Controllers
{
    public class ProfileController : Controller
    {
        public IActionResult Index()
        {
            Profile profile = new Profile()
            {
                Name = "John Dominique G. Boyles",
                Course = "BS Information Technology",
                Age = 21,
                Gender = "Male",
                Hobby = "Gaming, Watching Movies, and Programming",
                Hobbies = new List<string> { "Gaming", "Watching Movies", "Programming" },
                FavoriteSubject = "Computer Programming",
                CareerGoal = "Full-Stack Developer",
                Email = "boylesjohndominique@example.com",
                Motto = "Ang tae nga baho dili simhoton kay baho man"
            };

            return View(profile);
        }
    }
}
