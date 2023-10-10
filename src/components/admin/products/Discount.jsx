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
import { TbPercentage } from "react-icons/tb";
import { createCategory } from "@/component/api/category-service";
import { useFormik } from "formik";
import * as Yup from "yup";
import { addDiscount, addPrice } from "@/component/api/product-service";
import Loading from "../../ui/Loading";

const Discount = ({id}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [loading, setLoading] = useState(false);

  const initialValues = {
    price: "",
    productId:id
  };

  const validationSchema = Yup.object({
    name: Yup.number()
      .min(1, "En az %1 indirim oranı girmelisiniz!")
      .max(100, "En fazla %100 indirim oranı girebilirsiniz!")
      .required("Lütfen %1 - %100 arasında indirim oranı giriniz!"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const onSubmit = async () => {
    try {
      setLoading(true);
      await addDiscount(initialValues);
      toast("Created Successfully!", "success");
      onOpen();
    } catch (error) {
      toast(`Hata : ${error.message}`, "error");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Button
        endContent={<TbPercentage />}
        onClick={onOpen}
        size="md"
        color="primary"
        variant="light"
        className="text-black font-semibold"
      >
        125
      </Button>

      {loading ? (
        <Loading />
      ) : (
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
                  İndirim Oranı Giriniz
                </ModalHeader>
                <form noValidate onSubmit={formik.handleSubmit}>
                  <ModalBody>
                    <Input
                      variant="faded"
                      id="name"
                      name="name"
                      type="number"
                      label="İndirim Oranı Giriniz"
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
      )}
    </>
  );
};

export default Discount;
