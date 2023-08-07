import { Card } from "@nextui-org/react";
import React from "react";
import ContactForm from "./ContactForm";
import Title from "../../ui/Title";

const ContactContent = () => {
  return (
    <div className="w-full h-4/6 bg-rose-300 px-8 md:px-12 lg:px-24 py-24 flex gap-10">
      <ContactForm className="" />
      <Title
        className="flex-1 ml-10"
        title={"Bizimle İletişime Geçin!"}
        desc={
          "Bizimle iletişime geçmekten lütfen çekinmeyin! QR Menu uygulamamız hakkında sorularınız, geri bildirimleriniz veya işbirliği teklifleriniz için buradayız. Sizden haber almak ve ihtiyaçlarınıza en iyi şekilde yanıt vermek için sabırsızlıkla bekliyoruz."
        }
      />
    </div>
  );
};

export default ContactContent;
