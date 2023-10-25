import { toast } from "@/component/utils/Swal";
import React, { useState } from "react";
import Image from "next/image";
import {
  Button,
  ButtonGroup,
  Divider,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { LuPlus } from "react-icons/lu";
import { createCategory } from "@/component/api/category-service";
import { Form, useFormik } from "formik";
import * as Yup from "yup";

const CreateModal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [inputText, setInputText] = useState();
  const [file, setFile] = useState("");
  const imageSrc = [
    { url: "/assets/img/qr-phone2.jpg" },
    { url: "/assets/img/qr-phone.png" },
    { url: "/assets/img/qr-phone2.jpg" },
    { url: "/assets/img/qr-phone.png" },
  ];

  const handleSelectImage = () => {
    imageSrc.push(file);
  };


  const initialValues = {
    name: "",
  };

  console.log("initial---", initialValues);

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "En az 3 karakter giriniz!")
      .max(20, "En fazla 20 karakter girebilirsiniz!")
      .required("Lütfen kategori adı giriniz!"),
  });

  const onSubmit = async () => {
    try {
      await createCategory(initialValues);
      toast("Created Successfully!", "success");
      onOpen();
    } catch (error) {
      toast(`Hata : ${error.message}`, "error");
    }
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <>
      <Button
        className="bg-foreground text-background mb-3"
        endContent={<LuPlus />}
        onClick={onOpen}
        size="sm"
      >
        Ekle
      </Button>

      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        size="3xl"
        onOpenChange={onOpenChange}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          },
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Kategori Ekle
              </ModalHeader>
              <form
                noValidate
                onSubmit={formik.handleSubmit}
                onReset={formik.handleReset}
              >
                <ModalBody>
                  <Input
                    variant="faded"
                    id="name"
                    name="name"
                    type="text"
                    label="Kategori"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                  />
                  {formik.touched.name && formik.errors.name ? (
                    <div className="text-xs text-red-500 m-2">
                      {formik.errors.name}
                    </div>
                  ) : null}
                  <Divider />
                  <div className="flex flex-row justify-between items-center gap-2">
                    <Input type="file" onChange={setFile} className="grow" />
                    <Button
                      color="primary"
                      variant="flat"
                      onClick={handleSelectImage}
                    >
                      Resmi Ekle
                    </Button>
                  </div>
                  <div className="flex flex-row gap-2 justify-center items-center flex-wrap">
                    {imageSrc.map((item, i) => (
                      <Image
                        key={i}
                        height={150}
                        width={150}
                        onClick={onOpen}
                        alt={item.url}
                        src={item.url}
                        className="rounded-md shadow-md cursor-pointer hover:scale-95 transition-all"
                      />
                    ))}
                  </div>
                  <Divider />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onClick={onClose}>
                    Kapat
                  </Button>
                  <Button color="primary" type="submit">
                    Ekle
                  </Button>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateModal;
