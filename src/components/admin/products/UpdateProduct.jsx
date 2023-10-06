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
import { LuEdit3 } from "react-icons/lu";
import { getCategoriesAll } from "@/component/api/category-service.js";
import { updateProduct } from "@/component/api/product-service.js";

const UpdateProduct = ({ row }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [name, setName] = useState(row?.name);
  const [calories, setCalories] = useState(row?.calories);
  const [description, setDescription] = useState(row?.description);
  const [isActive, setIsActive] = useState(row?.isActive);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState();

  console.log(
    "update-> " +
      name +
      " - " +
      calories +
      " - " +
      description +
      " - " +
      selectedCategory.currentKey +
      " - " +
      isActive
  );

  const handleUpdate = async () => {
    try {
      setLoading(true);
      const newCategory = {
        name,
        calories,
        description,
        isActive,
        categoryId: selectedCategory.currentKey,
      };
      await updateProduct(row.id, newCategory);
      toast("Category was updated successfully", "success");
      onOpen();
    } catch (err) {
      toast(err, "error");
    } finally {
      setLoading(false);
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
                Ürün Güncelle
              </ModalHeader>
              <ModalBody>
                <div className="flex justify-between mt-8">
                  <Image className="rounded-md" width={100} height={100} />
                  <input type="file" />
                </div>
                <Input
                  variant="faded"
                  type="text"
                  label="Ürün Adı"
                  defaultValue={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <Input
                  variant="faded"
                  type="number"
                  label="Kalori"
                  defaultValue={calories}
                  onChange={(e) => setCalories(e.target.value)}
                />
                <Textarea
                  variant="faded"
                  type="text"
                  label="Açıklama"
                  defaultValue={description}
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
                  defaultValue={isActive}
                >
                  Aktif mi?
                </Switch>
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

export default UpdateProduct;
