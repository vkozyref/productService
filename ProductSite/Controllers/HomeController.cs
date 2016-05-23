using System.Web.Mvc;

namespace ProductSite.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return File(Server.MapPath("~/dist/index.html"), "text/html");
        }
    }
}
