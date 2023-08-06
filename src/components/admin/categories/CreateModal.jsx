import { toast } from "@/component/utils/Swal";
import React, { useState } from "react";
import categories from "./categories.json";
import Image from "next/image";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";

const CreateModal = ({ isOpen, onOpen, onOpenChange }) => {
  const [inputText, setInputText] = useState("");
  const [category, setCategory] = useState("");

  const handleOutsideClick = (e) => {
    if (e.target.id === "container") {
      handleCloseCreate();
    }
  };
  const handleCreate = () => {
    let newCategory = { name: inputText };
    try {
      categories.push(newCategory);
      toast("Created Successfully!", "success");
      handleCloseCreate();
    } catch (error) {
      toast(`Hata : ${error.message}`, "error");
    }
  };

  return (
    <>
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
                <div className="flex justify-between mt-8">
                  <Image className="rounded-md" width={100} height={100} />
                  <input type="file" />
                </div>
                <Input variant="faded" type="text" label="Kategori" />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onClick={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={handleCreate}>
                  Action
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
