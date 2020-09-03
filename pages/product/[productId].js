import Layout from "../../components/layout";
import Product from "../../components/product";

import { fetchQuery } from "../../lib/utils";

const ProductPage = ({ product }) => (
  <Layout
    title={`${product.productName}`}
    description={`Kasap Yakup Et ve Et Ürünleri Afyonkarahisar ${product.productName}`}
  >
    <Product product={product} />
  </Layout>
);

export const getStaticProps = async ({ params: { productId } }) => {
  const product = await fetchQuery("products", productId);

  return {
    props: {
      product,
    },
  };
};

export const getStaticPaths = async () => {
  const products = await fetchQuery("products");

  const paths = products.map((product) => ({
    params: {
      productId: `${product.id}`,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default ProductPage;
