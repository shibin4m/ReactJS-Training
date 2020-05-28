using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using ReactDemo.Models;

namespace ReactDemo.Controllers
{
	public class ContactController : Controller
	{
	
		static ContactController()
		{
			
		}

		public ActionResult Index()
		{
			return View();
		}

		
	}
}