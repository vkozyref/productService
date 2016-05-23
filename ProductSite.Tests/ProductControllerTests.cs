using Moq;
using NUnit.Framework;
using ProductSite.Controllers;
using ProductSite.Services.Contracts;
using ProductSite.Services.Models;
using System.Collections.Generic;

namespace ProductSite.Tests
{
    [TestFixture]
    public class ProductControllerTests
    {
        private Mock<IProductService> _productServiceMock;
        private ProductController _sut;

        [SetUp]
        public void Setup()
        {
            _productServiceMock = new Mock<IProductService>();
            _sut = new ProductController(_productServiceMock.Object);
        }

        [Test]
        public void GetProducts_ShouldCallServiceGetProductsWithCorrectParameters_WhenCalled()
        {
            var products = new List<Product>
            {
                new Product
                {
                    Id = 34
                }
            };
            var text = "gfdgdf";
            _productServiceMock.Setup(p => p.GetProducts(text)).ReturnsAsync(products);

            var result = _sut.GetProducts(text);

            Assert.AreEqual(products, result.Result);
            _productServiceMock.Verify(p => p.GetProducts(text));
        }

        [Test]
        public void GetProductsByCategory_ShouldCallServiceGetProductsByCategoryWithCorrectParameters_WhenCalled()
        {
            var products = new List<Product>
            {
                new Product
                {
                    Id = 34
                }
            };
            var categoryId = 1;
            _productServiceMock.Setup(p => p.GetProductsByCategory(categoryId)).ReturnsAsync(products);

            var result = _sut.GetProductsByCategory(categoryId);

            Assert.AreEqual(products, result.Result);
            _productServiceMock.Verify(p => p.GetProductsByCategory(categoryId));
        }

        [Test]
        public void GetProductCategories_ShouldCallServiceGetProductCategoriesWithCorrectParameters_WhenCalled()
        {
            var productCategories = new List<ProductCategory>
            {
                new ProductCategory
                {
                    Id = 34
                }
            };
            _productServiceMock.Setup(p => p.GetProductCategories()).ReturnsAsync(productCategories);

            var result = _sut.GetProductCategories();

            Assert.AreEqual(productCategories, result.Result);
            _productServiceMock.Verify(p => p.GetProductCategories());
        }
    }
}
