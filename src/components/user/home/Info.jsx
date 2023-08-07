import IconTitle from "@/component/components/ui/IconTitle";
import Title from "@/component/components/ui/Title";
import Image from "next/image";
import React from "react";
import { GrScorecard } from "react-icons/gr";

const Info = () => {
  return (
    <div className="px-8 md:px-12 lg:px-24 py-24 flex flex-col md:flex-row w-full gap-10 bg-rose-600">
      <Title
        title={"Menu Fuze: İşletmenize Özel Temassız Menü!"}
        desc={
          "Menu Fuze, restaurant, otel ve kafe gibi işletmeler için özel olarak tasarlanmış temassız menü yazılımıdır. Artık fiziksel menü maliyetlerinden kurtulabilir ve müşterilerinize hızlı ve güvenli bir şekilde menünüzü sunabilirsiniz. Üstelik sonsuza kadar ücretsiz! Dijital menü ile ürün fiyatlarınızı anlık olarak düzenleyebilir, sınırsız kategori ve ürün ekleyebilirsiniz. İşletmenizin ihtiyaçlarına uygun olarak özelleştirilebilir ve kolayca yönetilebilirsiniz.Menu Fuze sayesinde, işletmeniz için modern ve etkileyici bir deneyim sunabilir, müşterilerinizi memnun edebilirsiniz. Temassız menü oluşturmak için hemen şimdi Menu Fuze'a katılın ve sağlıklı günler dileriz."
        }
        isCenter={true}
        isDark={true}
      />
    </div>
  );
};

export default Info;
