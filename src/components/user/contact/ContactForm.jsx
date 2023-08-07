"use client";
import React from "react";
import {
  Button,
  Card,
  CardBody,
  Input,
  Link,
  Tab,
  Tabs,
  Textarea,
} from "@nextui-org/react";

const ContactForm = () => {
  const [selected, setSelected] = React.useState("login");
  return (
    <Card className="max-w-full w-96 h-full">
      <CardBody className="overflow-hidden">
        <form className="flex flex-col gap-4">
          <Input isRequired variant="underlined" label="Ad" type="text" />
          <Input isRequired variant="underlined" label="Soyad" type="text" />
          <Input
            isRequired
            variant="underlined"
            label="Email"
            placeholder="Enter your email"
            type="email"
          />
          <Input
            isRequired
            variant="underlined"
            placeholder="Telefon"
            label="Telefon"
            type="tel"
            size={10}
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
          />
          <Input isRequired variant="underlined" label="Konu" type="text" />
          <Textarea
            isRequired
            variant="underlined"
            label="Mesaj"
            type="textarea"
          />
          <div className="flex gap-2 justify-end">
            <Button fullWidth className="bg-foreground text-background">
              Gönder
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  );
};

export default ContactForm;
