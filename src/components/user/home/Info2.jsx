import IconTitle from "@/component/components/ui/IconTitle";
import Title from "@/component/components/ui/Title";
import Image from "next/image";
import React from "react";
import { GrScorecard } from "react-icons/gr";
import { BiSolidFoodMenu } from "react-icons/bi";

const Info2 = () => {
  return (
    <div className="px-8 md:px-12 lg:px-24 py-24 flex flex-col md:flex-row-reverse w-full gap-10 bg-rose-600 ">
      <div className="flex flex-col gap-10">
        <Title
          title={"Daha çok detay, daha az problem"}
          desc={
            "Menu-Fuze ile ürünleriniz hakkında çok daha fazla detay verebilirsiniz. Bu sayede müşterilerinizin aklına gelebilecek muhtemel sorulara önceden cevap verebilir ve sipariş sürecini kusursuz hale getirebilirsiniz."
          }
          isDark={true}
        />
        <div className="flex flex-col gap-10">
          <IconTitle
            title={"Standart bir menüden fazlası"}
            desc={
              "Ürün açıklamalarına ister içindekileri yazın, isterseniz daha etkileyici bir sunum için tanıtıcı bir yazı. Menu-Fuze ile her zaman daha iyisini sunmak sizin elinizde."
            }
            icon={GrScorecard}
            isDark={true}
          />
          <IconTitle
            title={"Seçici müşteriler için alerjen uyarısı"}
            desc={
              "Menünüzde glüten, süt, soğan gibi ürünleri ve besin değerleri kritik detayları belirtebilirsiniz. Oluşabilecek olumsuz durumların önüne geçebilir ve müşterilerin seçimlerini rahatça yapmalarını sağlayıp memnuniyetinizi arttırabilirsiniz."
            }
            icon={BiSolidFoodMenu}
            isDark={true}
          />
        </div>
      </div>
      <div className="rounded-lg shrink-0">
        <Image
          src="/assets/img/qr-phone2.jpg"
          width={600}
          height={500}
          alt="Picture of the author"
          className="rounded-2xl shadow-lg"
        />
      </div>
    </div>
  );
};

export default Info2;
