import Layout from "../components/layout";
import Products from "../components/products";
import Order from "../components/order";

import { fetchQuery } from "../lib/utils";

const IndexPage = ({ products }) => (
  <Layout
    title="Yakup Chef"
    description="Yakup Şef Chef Et ve Et Ürünleri Afyon Afyonkarahisar Kasap"
  >
    <Products products={products} />
    <Order />
  </Layout>
);

export const getStaticProps = async () => {
  let products = await fetchQuery("products");

  return {
    props: {
      products,
    },
  };
};

export default IndexPage;
