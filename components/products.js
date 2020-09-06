import Link from "next/link";

const Products = ({ products }) => (
  <section className="text-gray-700 body-font">
    <div className="container px-5 pt-24 pb-6 mx-auto">
      <div className="flex flex-col">
        <div className="h-1 bg-gray-200 rounded overflow-hidden">
          <div className="w-24 h-full bg-red-500"></div>
        </div>
        <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
          <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
            Ürünlerimiz
          </h1>
        </div>
      </div>
      <div className="flex flex-wrap -m-4">
        {products.map((product) => (
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={product.id}>
            <a className="block relative h-48 rounded overflow-hidden">
              <img
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src={`${product.image.url}`}
              />
            </a>
            <div className="mt-4">
              <h2 className="text-gray-900 title-font text-lg font-medium">
                {product.productName}
              </h2>
            </div>
            <Link href={`/product/${product.id}`}>
              <a className="text-red-500 inline-flex items-center mt-3">
                Ayrıntılar/Sipariş &rarr;
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Products;
