import { createCategory } from "@/component/api/category-service";
import { createCompany } from "@/component/api/company-service";
import { createProduct } from "@/component/api/product-service";
import { toast } from "@/component/utils/Swal";
import React from "react";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const Products = () => {
  const [show, setShow] = useState(false);
  const [category, setCategory] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCreate = async () => {
    const categories = {
      name: category,
    };

    try {
      await createCategory(categories);
      toast("Created Successfully!", "success");
    } catch (error) {
      toast(`Hata : ${error.message}`, "error");
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Kategori Ekle
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        className="absolute w-[50%] bg-white top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] shadow-md p-8 rounded-xl border"
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              className="mb-3 flex flex-col gap-2"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Kategori</Form.Label>
              <Form.Control
                type="text"
                placeholder="kategori ismi"
                className="p-2 border border-gray-400 rounded-md"
                autoFocus
                onChange={(e) => setCategory(e.target.value)}
              />
            </Form.Group>
            {/* <Form.Group
              className="mb-3 flex flex-col gap-2"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                className="p-2 border border-gray-400 rounded-md"
              />
            </Form.Group> */}
          </Form>
        </Modal.Body>
        <Modal.Footer className="flex gap-2 justify-end">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCreate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Products;
