using ProductSite.Services.Contracts;
using ProductSite.Services.Models;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web.Http;

namespace ProductSite.Controllers
{
    [RoutePrefix("api")]
    public class ProductController : ApiController
    {
        private readonly IProductService _productService;
        public ProductController(IProductService productService)
        {
            _productService = productService;
        }

        [HttpGet, Route("products")]
        public async Task<IEnumerable<Product>> GetProducts([FromUri]string text)
        {
            return await _productService.GetProducts(text);
        }

        [HttpGet, Route("products/{categoryId}")]
        public async Task<IEnumerable<Product>> GetProductsByCategory(int categoryId)
        {
            return await _productService.GetProductsByCategory(categoryId);
        }

        [HttpGet, Route("products/categories")]
        public async Task<IEnumerable<ProductCategory>> GetProductCategories()
        {
            return await _productService.GetProductCategories();
        }
    }
}
