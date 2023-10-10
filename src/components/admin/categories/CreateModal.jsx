import { toast } from "@/component/utils/Swal";
import React, { useState } from "react";
import Image from "next/image";
import {
  Button,
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
  const [inputText, setInputText] = useState("");

  const initialValues = {
    name: "",
  };

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
              <form noValidate onSubmit={formik.handleSubmit}>
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
