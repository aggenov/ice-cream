// (() => {
//   const refs = {
//     openModalBtn: document.querySelector("[data-modal-open-prod]"),
//     closeModalBtn: document.querySelector("[data-modal-close-prod]"),
//     modal: document.querySelector("[data-modal-prod]"),
//   };

//   refs.openModalBtn.addEventListener("click", toggleModal);
//   refs.closeModalBtn.addEventListener("click", toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle("is-hidden-prod");
//   }
// })();
// =============
//  code withs mentor ======
(() => {
  const refs = {
    openModalBtns: document.querySelectorAll("[data-modal-open-prod]"),
    closeModalBtn: document.querySelector("[data-modal-close-prod]"),
    modal: document.querySelector("[data-modal-prod]"),
  };
  if (refs.openModalBtns.length > 0) {
    refs.openModalBtns.forEach(btn => {
      btn.addEventListener("click", toggleModal);
    })
    refs.closeModalBtn.addEventListener("click", toggleModal);
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden-prod");
    }
  }
})();