import Link from "next/link";

const Product = ({ product }) => (
  <section className="text-gray-700 body-font overflow-hidden">
    <div className="pt-6">
      <Link href="/">
        <a className="text-red-500">&larr; Ürünler sayfasına geri dön</a>
      </Link>
    </div>
    <div className="container px-5 py-24 mx-auto">
      <div className="mx-auto flex flex-wrap">
        <img
          alt="ecommerce"
          className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
          src={`${product.image.url}`}
        />
        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
            {product.productName}
          </h1>
          <div className="flex mb-4"></div>
          <p className="leading-relaxed">{product.description}</p>
          <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
            <div className="flex ml-6 items-center"></div>
          </div>
          <div className="flex">
            <span className="title-font font-medium text-2xl text-gray-900 pb-6">
              Sipariş ve Fiyat Bilgilendirmesi İçin WhatsApp Hattı: 0532 678 55
              03
            </span>
          </div>
          <div className="flex">
            <span className="title-font font-medium text-2xl text-gray-900">
              Uzaktan Ödeme İçin IBAN Numarası: TR 1200 0100 8866 5184 5001
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Product;
