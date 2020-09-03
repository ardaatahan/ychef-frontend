const About = () => (
  <section className="text-gray-700 body-font">
    <div className="container px-5 pt-24 pb-6 mx-auto">
      <div className="flex flex-col">
        <div className="h-1 bg-gray-200 rounded overflow-hidden">
          <div className="w-24 h-full bg-red-500"></div>
        </div>
        <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-6">
          <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
            Hakkımızda
          </h1>
        </div>
      </div>
      <p className="leading-relaxed">
        1996'da Afyon'da en iyi eti sunmak amacıyla hizmet vermeye başlayan
        Yakup Chef, Afyon et kültürüne keyifli ve lezzetli yeni bir yorum
        getirdi. Açıldığı ilk günden beri etseverlerin ilk ve vazgeçilmez
        tercihi olmaya devam eden Yakup Chef Afyon'daki steak kültürünün
        öncüsüdür. Kalite ve lezzet konusunda asla ödün vermeden çalışan Yakup
        Chef başta İstanbul olmak üzere Tükiye'nin dört bir yanına et
        sağlamaktadır.
      </p>
    </div>
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col">
        <div className="h-1 bg-gray-200 rounded overflow-hidden">
          <div className="w-24 h-full bg-red-500"></div>
        </div>
        <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-6">
          <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
            Yakup Chef'i Tercih Etmek İçin 3 Sebep
          </h1>
        </div>
        <div class="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
              <div className="flex items-center mb-3">
                <h2 className="text-gray-900 text-lg title-font font-medium">
                  Kaliteli Et
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  %100 doğal, %100 helal yerli kesim et sağlıyoruz.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
              <div className="flex items-center mb-3">
                <h2 className="text-gray-900 text-lg title-font font-medium">
                  Fiyat Avantajı
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  En kaliteli etleri en avantajlı fiyatlarla sunuyoruz.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
              <div className="flex items-center mb-3">
                <h2 className="text-gray-900 text-lg title-font font-medium">
                  Hızlı Teslimat
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  Siparişlerinizi kapınıza kadar aynı gün istediğiniz zaman
                  getiriyoruz. (Afyonkarahisar İçi)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
