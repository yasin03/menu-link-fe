import { toast } from "@/component/utils/Swal";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Button,
  Input,
  Textarea,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { Switch } from "@nextui-org/react";
import { LuPlus } from "react-icons/lu";
import { getCategoriesAll } from "@/component/api/category-service";
import { createProduct } from "@/component/api/product-service";

const CreateProductModal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [name, setName] = useState("");
  const [calories, setCalories] = useState(Number);
  const [description, setDescription] = useState("");
  const [isActive, setIsActive] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState();

  const handleCreate = async () => {
    const newCategory = {
      name,
      calories,
      description,
      isActive,
      categoryId: selectedCategory.currentKey,
    };
    try {
      await createProduct(newCategory);
      toast("Created Successfully!", "success");
      onOpen();
    } catch (error) {
      toast(`Hata : ${error.message}`, "error");
    }
  };

  const loadData = async () => {
    try {
      setLoading(true);
      const resp = await getCategoriesAll();
      setCategories(resp.data.content);
    } catch (err) {
      console.log(err);
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
                Ürün Ekle
              </ModalHeader>
              <ModalBody>
                <div className="flex justify-between mt-6">
                  <Image className="rounded-md" width={100} height={60} />
                  <input type="file" />
                </div>
                <Input
                  variant="faded"
                  type="text"
                  label="Ürün Adı"
                  onChange={(e) => setName(e.target.value)}
                />
                <Input
                  variant="faded"
                  type="number"
                  label="Kalori"
                  onChange={(e) => setCalories(e.target.value)}
                />
                <Textarea
                  variant="faded"
                  type="text"
                  label="Açıklama"
                  onChange={(e) => setDescription(e.target.value)}
                />
                <Dropdown>
                  <DropdownTrigger>
                    <Button variant="bordered" className="capitalize">
                      {selectedCategory ? selectedCategory : "Kategori Seçiniz"}
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu
                    aria-label="Single selection example"
                    variant="flat"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={selectedCategory}
                    onSelectionChange={setSelectedCategory}
                  >
                    {categories.map((item) => (
                      <DropdownItem key={item?.id}>{item?.name}</DropdownItem>
                    ))}
                  </DropdownMenu>
                </Dropdown>
                <Switch
                  color="danger"
                  isSelected={isActive}
                  onValueChange={setIsActive}
                >
                  Aktif mi?
                </Switch>
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

export default CreateProductModal;
