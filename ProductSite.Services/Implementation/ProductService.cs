using ProductSite.Services.Contracts;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProductSite.Services.Models;

namespace ProductSite.Services.Implementation
{
    public class ProductService : IProductService
    {
        private readonly IList<Product> _productsStub = new List<Product>();
        private readonly IList<ProductCategory> _productCategoriesStub = new List<ProductCategory>();

        public ProductService() { }

        public async Task<IEnumerable<ProductCategory>> GetProductCategories()
        {
            await Task.Yield();
            return _productCategoriesStub;
        }

        public async Task<IEnumerable<Product>> GetProducts(string text)
        {
            await Task.Yield();
            return _productsStub.Where(p => p.Name.ToLower().Contains(text.ToLower()));
        }

        public async Task<IEnumerable<Product>> GetProductsByCategory(int categoryId)
        {
            await Task.Yield();
            return _productsStub.Where(p => p.CategoryId == categoryId);
        }
    }
}
