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

const CreateModal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [inputText, setInputText] = useState("");

  const handleCreate = async () => {
    const newCategory = { name: inputText };

    try {
      await createCategory(newCategory);
      toast("Created Successfully!", "success");
      onOpen();
    } catch (error) {
      toast(`Hata : ${error.message}`, "error");
    }
  };

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
              <ModalBody>
                <div className="flex justify-between mt-6">
                  <Image className="rounded-md" width={100} height={60} />
                  <input type="file" />
                </div>
                <Input
                  variant="faded"
                  type="text"
                  label="Kategori"
                  onChange={(e) => setInputText(e.target.value)}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onClick={onClose}>
                  Kapat
                </Button>
                <Button color="primary" onClick={handleCreate}>
                  Ekle
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateModal;
