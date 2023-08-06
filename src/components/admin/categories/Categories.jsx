import React, { useState } from "react";
import CreateModal from "./CreateModal";
import categories from "./categories.json";
import { MdDelete } from "react-icons/md";
import { FiPlus } from "react-icons/fi";

import { question } from "@/component/utils/Swal";
import UpdateModal from "./UpdateModal";
import Image from "next/image";
import { Button, useDisclosure } from "@nextui-org/react";

const Categories = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [showCreate, setShowCreate] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);

  const handleCloseCreate = () => setShowCreate(!showCreate);
  const handleCloseUpdate = () => setShowUpdate(!showUpdate);

  const handleDelete = (index) => {
    question(
      "Silmek istediğinizden emin misiniz?",
      "Bunu geri alamazsınız!"
    ).then((result) => {
      if (result.isConfirmed) {
        categories.remove(index);
      }
    });
  };

  const handleUpdate = () => {
    handleCloseUpdate();
  };

  return (
    <>
      <div className="flex justify-end md:mt-0 mt-16 ">
        <Button isIconOnly color="primary" className="mb-3" onClick={onOpen}>
          <FiPlus />
        </Button>
      </div>
      <div className="p-4 rounded-md border shadow border-gray-300 ">
        <table className=" table-auto ">
          <thead className="">
            <tr className="bg-gray-100 text-gray-700">
              <th className="w-16 border py-2 ">S.No</th>
              <th className="w-24 border py-2 ">Resim</th>
              <th className="w-60 border py-2 ">Kategori Adı</th>
              <th className="w-24 border py-2 ">Güncelle</th>
              <th className="w-24 border py-2 ">Sil</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => (
              <tr key={index} className="hover:bg-gray-100 p-2 border">
                <td className="p-2 border text-center">{index + 1}</td>
                <td className="p-2 border pl-4">
                  <Image
                    src={category.image}
                    width={150}
                    height={100}
                    className="rounded-md"
                  />
                </td>
                <td className="p-2 border pl-4">{category.name}</td>
                <td className="p-2 border text-center">
                  <Button
                    color="primary"
                    variant="light"
                    onClick={handleCloseUpdate}
                  >
                    Güncelle
                  </Button>
                </td>
                <td className="p-2 text-center">
                  <Button
                    isIconOnly
                    color="danger"
                    onClick={() => handleDelete(index)}
                  >
                    <MdDelete />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <CreateModal
        isOpen={isOpen}
        onOpen={onOpen}
        onOpenChange={onOpenChange}
      />
      <UpdateModal
        showUpdate={showUpdate}
        handleCloseUpdate={handleCloseUpdate}
      />
    </>
  );
};

export default Categories;
