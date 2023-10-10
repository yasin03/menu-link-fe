import React, { useState, useEffect } from "react";
import {
  deleteCategory,
  getCategoriesAll,
} from "@/component/api/category-service";
import DataTable from "react-data-table-component";
import { RiDeleteBin6Line } from "react-icons/ri";
import { question, toast } from "@/component/utils/Swal";
import { Button } from "react-bootstrap";
import axios from "axios";
import CreateModal from "./CreateModal";
import UpdateModal from "./UpdateModal";
import Image from "next/image";
import Loading from "../../ui/Loading";
import { useFormik } from "formik";
import Picture from "./Picture";

const Categories = ({ categoriesAll }) => {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState();
  const [category, setCategory] = useState({});
  const [totalRows, setTotalRows] = useState(0);
  const [saving, setSaving] = useState(false);

  const columns = [
    {
      name: "Sıra No",
      selector: (row, index) => index + 1,
    },
    {
      name: "Kategori Resmi",
      selector: (row) => <Picture />,
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

  const loadData = async () => {
    try {
      setLoading(true);
      const resp = await getCategoriesAll();
      setCategories(resp.data.content);
      setTotalRows(resp.data.totalElements);
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
      {loading ? (
        <Loading />
      ) : (
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
      )}
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
