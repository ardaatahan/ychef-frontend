import Link from "next/link";

const Order = () => (
  <section className="text-gray-700 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col">
        <div className="h-1 bg-gray-200 rounded overflow-hidden">
          <div className="w-24 h-full bg-red-500"></div>
        </div>
        <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
          <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
            Adres, İletişim ve Ödeme
          </h1>
        </div>
      </div>
      <div className="flex flex-wrap md:flex-row flex-col sm:-m-4 -mx-4 -mb-10 -mt-4">
        <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col text-center items-center">
          <div className="flex-grow">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
              Adres
            </h2>
            <p className="leading-relaxed text-base">
              Selçuklu Mahallesi 1482. Sokak No: 8/B
            </p>
            <p className="leading-relaxed text-base">Uydukent/Afyonkarahisar</p>
          </div>
        </div>
        <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col text-center items-center">
          <div className="flex-grow">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
              WhatsApp Sipariş Hattı
            </h2>
            <p className="leading-relaxed text-base">0532 678 55 03</p>
          </div>
        </div>
        <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col text-center items-center">
          <div className="flex-grow">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
              IBAN
            </h2>
            <p className="leading-relaxed text-base">
              TR 1200 0100 8866 5184 5001
            </p>
          </div>
        </div>
        <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col text-center items-center">
          <div className="flex-grow"></div>
        </div>
        <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col text-center items-center">
          <div className="flex-grow">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
              Instagram
            </h2>
            <p className="leading-relaxed text-base">
              <Link
                href="https://www.instagram.com/yakup_cheff/"
                passHref={true}
              >
                <a>@yakup_cheff</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Order;
