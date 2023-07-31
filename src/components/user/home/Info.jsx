import IconTitle from "@/component/utils/IconTitle";
import Title from "@/component/utils/Title";
import Image from "next/image";
import React from "react";
import { GrScorecard } from "react-icons/gr";

const Info = () => {
  return (
    <div className="px-8 md:px-12 lg:px-24 py-24 flex flex-col md:flex-row w-full gap-10">
      <div className="flex flex-col gap-10">
        <Title
          title={"Menünüzü hazırlayın ve sipariş almaya başlayın"}
          desc={
            "Restoran, cafe, pastane ve oteller için yeni nesil temassız dijital qr menü sistemi."
          }
        />
        <div className="flex flex-col gap-10">
          <IconTitle
            title={"Fiziksel menünüze güzel bir alternatif"}
            desc={
              "Artık geleneksel olarak yazdırılan menünüzü dijital bir sürümle tamamlayabilir veya değiştirebilirsiniz."
            }
            icon={GrScorecard}
          />
          <IconTitle
            title={"Standart bir menüden fazlası"}
            desc={
              "Ürün açıklamalarına ister içindekileri yazın, isterseniz daha etkileyici bir sunum için tanıtıcı bir yazı. Dijital QR Menü ile her zaman daha iyisini sunmak sizin elinizde."
            }
            icon={GrScorecard}
          />
        </div>
      </div>
      <div className="rounded-lg">
        <Image
          src="/assets/img/qr-phone.png"
          width={700}
          height={500}
          alt="Picture of the author"
          className="rounded-2xl shadow-lg"
        />
      </div>
    </div>
  );
};

export default Info;