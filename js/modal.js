const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const teste = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
  teste.classList.toggle("hide");
  fade.classList.toggle("hide");
  
};


// [openModalButton, closeModalButton, fade].forEach((el) => {
//   el.addEventListener("click", () => toggleModal());
// });
