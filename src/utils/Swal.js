import Swal from "sweetalert2";

export const question = (title, text = "") => {
  return Swal.fire({
    title,
    text,
    icon: "question",
    confirmButtonColor: "#006FEE",
    showCancelButton: true,
  });
};

export const toast = (title, icon = "info") => {
  // success | warning | question | error | info

  return Swal.fire({
    position: "top-center",
    icon,
    title,
    showConfirmButton: false,
    timer: 3000,
  });
};
