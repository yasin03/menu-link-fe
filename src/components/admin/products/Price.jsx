import { toast } from "@/component/utils/Swal";
import React, { useState } from "react";
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
import { BiLira } from "react-icons/bi";
import { createCategory } from "@/component/api/category-service";
import { Form, useFormik } from "formik";
import * as Yup from "yup";
import { addPrice } from "@/component/api/product-service";
import Loading from "../../ui/Loading";

const Price = ({ id }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [loading, setLoading] = useState(false);
  const [inputPrice, setInputPrice] = useState(Number);

  const initialValues = {
    price: inputPrice,
    productId: "",
  };

  const validationSchema = Yup.object({
    price: Yup.number()
      .min(1, "En az 1 rakam giriniz!")
      .max(9999, "En fazla 4 basamaklı rakam girebilirsiniz!")
      .required("Lütfen fiyat giriniz!"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const onSubmit = async () => {
    try {
      await addPrice({ price: formik.values.price, productId: id });
      toast("Created Successfully!", "success");
      onOpen();
    } catch (error) {
      toast(`Hata : ${error.message}`, "error");
    }
  };
  return (
    <>
      <Button
        endContent={<BiLira />}
        onClick={onOpen}
        size="md"
        color="primary"
        variant="light"
        className="text-black font-semibold"
      >
        125
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
                Fiyat Güncelle
              </ModalHeader>
              <form noValidate>
                <ModalBody>
                  <Input
                    variant="faded"
                    id="name"
                    name="name"
                    type="number"
                    label="Fiyat Giriniz"
                    onChange={(e) => setInputPrice(e.target.value)}
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
                  <Button
                    color="primary"
                    type="submit"
                    onClick={formik.handleSubmit}
                  >
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

export default Price;
