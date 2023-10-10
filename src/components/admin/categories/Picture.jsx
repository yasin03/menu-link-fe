import { toast } from "@/component/utils/Swal";
import React, { useEffect, useState } from "react";
import {
  Button,
  Divider,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";

import { addDiscount } from "@/component/api/product-service";
import Loading from "../../ui/Loading";
import Image from "next/image";

const Picture = ({ id }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState("");
  const [imageSrc, setImageSrc] = useState([
    { url: "/assets/img/qr-phone2.jpg" },
    { url: "/assets/img/qr-phone.png" },
    { url: "/assets/img/qr-phone2.jpg" },
    { url: "/assets/img/qr-phone.png" },
  ]);

  const handleOnChange = (changeEvent) => {
    const reader = new FileReader();

    reader.onload = function (onLoadEvent) {
      setImageSrc(onLoadEvent.target.result);
      setFile(changeEvent.target.files[0]);
    };

    reader.readAsDataURL(changeEvent.target.files[0]);
  };

  const handleCreate = async () => {
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

  const loadData = async () => {
    try {
      setLoading(true);
      // const resp = await getProductsAll();
      // setProducts(resp.data.content);
      // toast("Created Successfully!", "success");
    } catch (error) {
      toast(`Hata : ${error.message}`, "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Image
        height={50}
        width={50}
        onClick={onOpen}
        alt="qr-phone2.jpg"
        src="/assets/img/qr-phone2.jpg"
        className="rounded-md shadow-md cursor-pointer hover:scale-95 transition-all"
      />

      {loading ? (
        <Loading />
      ) : (
        <Modal
          backdrop="opaque"
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          size="3xl"
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
                  Ürün Resimlerini Güncelleyiniz
                </ModalHeader>

                <ModalBody>
                  <Input type="file" onChange={setFile} />
                  <Divider />
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
              </>
            )}
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default Picture;
