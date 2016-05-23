using ProductSite.Services.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProductSite.Services.Contracts
{
    public interface IProductService
    {
        Task<IEnumerable<Product>> GetProducts(string text);
        Task<IEnumerable<Product>> GetProductsByCategory(int categoryId);
        Task<IEnumerable<ProductCategory>> GetProductCategories();
    }
}
