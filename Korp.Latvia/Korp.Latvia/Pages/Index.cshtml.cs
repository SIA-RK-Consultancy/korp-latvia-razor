using Microsoft.AspNetCore.Mvc.RazorPages;

namespace Korp.Latvia.Pages
{
    public class IndexModel : PageModel
    {
        private readonly ILogger<IndexModel> _logger;

        public string Vecums { get; set; }
        public IndexModel(ILogger<IndexModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {
            var vecums = DateTime.Now.ToUniversalTime() - new DateTime(1917, 2, 17, 19, 17, 0).ToUniversalTime();

            Vecums = ((int)(vecums.TotalDays / 365.2524)).ToString();
        }
    }
}