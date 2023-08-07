import HeadSection from "@/component/components/ui/HeadSection";
import Title from "@/component/components/ui/Title";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen">
      <HeadSection title={"Hakkımızda"} />
      <Title
        isDark={true}
        title={"HAKKIMIZDA"}
        desc={
          "MenuFuze, Türkiye'nin ilk mobil POS sistemini hayata geçiren öncü bir şirkettir. Akıllı telefonlar, tablet menüler ve garson el terminalleri üzerinden sunduğu entegre mobil sipariş ve ödeme çözümleri ile sektörün öncüsüdür. Kocaeli Üniversitesi Teknopark'ta bulunan Ar-Ge ve yazılım geliştirme merkezimizde, restoranlar, kafeler, kahve dükkanları, pastaneler ve oteller için bulut tabanlı sistemler ve yenilikçi mobil uygulamalar geliştirmekteyiz.MenuFuze, işletmelere sunduğu yenilikçi POS çözümleri ve kesintisiz 7/24 desteği ile, satış yapmaya hazır hale gelmelerine sadece birkaç saat içinde olanak sağlar. Bizimle çalışarak müşterilerinize en iyi deneyimi sunmak için güvenilir bir partner olduğunuzu göstereceksiniz."
        }
        isCenter={true}
        className="py-16 px-8 md:px-12 lg:px-24 bg-rose-500"
      />
    </div>
  );
};

export default page;
