import DataTable from "react-data-table-component";
import { RiDeleteBin6Line } from "react-icons/ri";
import { question, toast } from "@/component/utils/Swal";
import React, { useEffect } from "react";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import Loading from "../../ui/Loading";
import CreateProductModal from "./CreateProductModal";
import UpdateProduct from "./UpdateProduct";
import { deleteProduct, getProductsAll } from "@/component/api/product-service";
import Price from "./Price";
import Discount from "./Discount";
import Picture from "./Picture";

const Products = () => {
  const [show, setShow] = useState(false);
  const [category, setCategory] = useState("");
  const [products, setProducts] = useState("");
  const [totalRows, setTotalRows] = useState(0);

  const [loading, setLoading] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const columns = [
    {
      name: "ID",
      selector: (row, index) => index + 1,
    },
    {
      name: "Ürün Resimleri",
      selector: (row) => <Picture />,
    },
    {
      name: "Ürün Adı",
      selector: (row) => row.name,
    },
    {
      name: "Kalorisi",
      selector: (row) => row.calories,
    },
    {
      name: "Açıklama",
      selector: (row) => row.description,
    },
    {
      name: "Aktifmi",
      selector: (row) => row.isActive,
    },
    {
      name: "Fiyat",
      selector: (row) => <Price id={row.id} />,
    },
    {
      name: "İndirim",
      selector: (row) => <Discount id={row.id} />,
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
            <UpdateProduct row={row} />
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

  const removeProduct = async (id) => {
    try {
      setLoading(true);
      await deleteProduct(id);
      toast("Category was deleted successfully", "warning");
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
        removeProduct(row.id);
      }
    });
  };

  const loadData = async () => {
    try {
      setLoading(true);
      const resp = await getProductsAll();
      setProducts(resp.data.content);
      setTotalRows(resp.data.totalElement);
      toast("Created Successfully!", "success");
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
      {loading ? (
        <Loading />
      ) : (
        <div className="p-4">
          <CreateProductModal />
          <div className="border border-neutral-400 rounded-lg ">
            <DataTable
              columns={columns}
              data={products}
              paginationTotalRows={totalRows}
              selectableRows
              highlightOnHover
              pagination
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Products;
