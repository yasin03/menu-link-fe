import { toast } from "@/component/utils/Swal";
import React, { useEffect, useState } from "react";
import { categories } from "./data.js";
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
import { LuEdit3 } from "react-icons/lu";
import { updateCategory } from "@/component/api/category-service.js";

const UpdateModal = ({ row }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [loading, setLoading] = useState(false);
  const [inputText, setInputText] = useState("");
  const [category, setCategory] = useState();

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
                <div className="flex justify-between mt-8">
                  <Image className="rounded-md" width={100} height={100} />
                  <input type="file" />
                </div>
                <Input
                  variant="faded"
                  type="text"
                  label="Kategori"
                  value={inputText}
                  onValueChange={(value) => setInputText(value)}
                />
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
