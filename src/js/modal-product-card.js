(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-prod]"),
    closeModalBtn: document.querySelector("[data-modal-close-prod]"),
    modal: document.querySelector("[data-modal-prod]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden-prod");
  }
})();