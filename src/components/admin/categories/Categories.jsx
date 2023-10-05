import React, { useState, useEffect } from "react";
import {
  deleteCategory,
  getCategoriesAll,
} from "@/component/api/category-service";
import DataTable from "react-data-table-component";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Button } from "react-bootstrap";
import { question, toast } from "@/component/utils/Swal";
import axios from "axios";
import CreateModal from "./CreateModal";
import UpdateModal from "./UpdateModal";
import Image from "next/image";

const Categories = ({ categoriesAll }) => {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState();
  const [category, setCategory] = useState({});
  const [totalRows, setTotalRows] = useState(0);
  const [saving, setSaving] = useState(false);
  console.log("allCategory-> ", categoriesAll);

  const columns = [
    {
      name: "ID",
      selector: (row, index) => index + 1,
    },
    {
      name: "Kategori Resmi",
      selector: (row) => (
        <div className="">
          <Image
            height={50}
            width={50}
            src="/assets/img/qr-phone2.jpg"
            className="rounded-md shadow-md cursor-pointer hover:scale-95"
          />
        </div>
      ),
    },
    {
      name: "Kategori Adı",
      selector: (row) => row.name,
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className="flex">
          <Button
            variant="outline-warning"
            className="text-neutral-400 hover:text-blue-500 !p-2"
            id={row.ID}
          >
            <UpdateModal row={row} />
          </Button>
          <Button
            variant="outline-warning"
            className="text-red-400 hover:text-red-600  !p-1"
            onClick={() => {
              handleDelete(row);
            }}
            id={row.ID}
          >
            <RiDeleteBin6Line size={20} />
          </Button>
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  const removeCategory = async (id) => {
    try {
      setLoading(true);
      await deleteCategory(id);
      toast("Category was deleted successfully", "warning");
      setSaving(!saving);
    } catch (err) {
      toast(err, "error");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = (row) => {
    question(
      "Are you sure to delete?",
      "You won't be able to revert this!"
    ).then((result) => {
      if (result.isConfirmed) {
        removeCategory(row.id);
      }
    });
  };

  const handleUpdate = (row) => {
    console.log("row--", row);
    return <UpdateModal row={row} />;
  };

  const loadData = async () => {
    try {
      setLoading(true);
      const resp = await getCategoriesAll();
      setCategories(resp.data.content);
      setTotalRows(resp.data.totalElement);
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
      <CreateModal />
      <div className="border border-neutral-400 rounded-lg ">
        <DataTable
          columns={columns}
          data={categories}
          paginationTotalRows={totalRows}
          selectableRows
          highlightOnHover
          pagination
        />
      </div>
    </>
  );
};

export default Categories;

export const getServerSideProps = async () => {
  const res = await getCategoriesAll();
  return {
    props: {
      categoriesAll: res.data ? res.data : [],
    },
  };
};
