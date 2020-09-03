import Layout from "../components/layout";
import Order from "../components/order";
import Map from "../components/map";

const OrderPage = () => (
  <Layout
    title="Sipariş"
    content="Kasap Yakup Şef Chef Et ve Et Ürünleri Sipariş Sayfası Afyon Afyonkarahisar Kasap"
  >
    <Order />
    <Map />
  </Layout>
);

export default OrderPage;
