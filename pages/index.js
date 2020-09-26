import Layout from "../components/layout";
import Products from "../components/products";
import Order from "../components/order";

import { fetchQuery } from "../lib/utils";

const IndexPage = ({ products }) => (
  <Layout
    title="Yakup Chef"
    description="1996'da Afyon'da en iyi eti sunmak amacıyla hizmet vermeye başlayan
        Yakup Chef, Afyon et kültürüne keyifli ve lezzetli yeni bir yorum
        getirdi. Açıldığı ilk günden beri etseverlerin ilk ve vazgeçilmez
        tercihi olmaya devam eden Yakup Chef Afyon'daki steak kültürünün
        öncüsüdür. Kalite ve lezzet konusunda asla ödün vermeden çalışan Yakup
        Chef başta İstanbul olmak üzere Tükiye'nin dört bir yanına et
        sağlamaktadır. Yakup Şef Chef Et ve Et Ürünleri Afyon Afyonkarahisar Kasap"
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
    revalidate: 1,
  };
};

export default IndexPage;
