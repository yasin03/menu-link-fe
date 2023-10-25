import { toast } from "@/component/utils/Swal";
import React, { useEffect, useState } from "react";
import Image from "next/image";
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
import { LuEdit3 } from "react-icons/lu";
import { updateCategory } from "@/component/api/category-service.js";

const UpdateModal = ({ row }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [loading, setLoading] = useState(false);
  const [inputText, setInputText] = useState(row?.name);
  const [category, setCategory] = useState();
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

  const handleUpdate = async () => {
    try {
      setLoading(true);
      const newCategory = {
        id: row.id,
        name: inputText,
      };
      await updateCategory(category.id, newCategory);
      toast("Category was updated successfully", "success");
      onOpen();
    } catch (err) {
      toast(err, "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setInputText(row?.name);
    setCategory(row);
  }, []);

  return (
    <>
      <LuEdit3 onClick={onOpen} size={20} />
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
                Kategori Güncelle
              </ModalHeader>
              <ModalBody>
                <Input
                  variant="faded"
                  id="name"
                  name="name"
                  type="text"
                  label="Kategori"
                  onChange={setInputText}
                  value={inputText}
                />
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
                <Button color="primary" onPress={handleUpdate}>
                  Güncelle
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default UpdateModal;
