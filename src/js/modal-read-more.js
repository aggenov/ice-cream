(() => {
  const openModalBtnRead = document.querySelector("[data-modal-open-read]"),
    closeModalBtnRead = document.querySelector("[data-modal-close-read]"),
    modalRead = document.querySelector("[data-modal-read]"),
    iframeRead = modalRead.querySelector('iframe');
  openModalBtnRead.addEventListener("click", toggleModal);
  closeModalBtnRead.addEventListener("click", toggleModal);
  function toggleModal() {
    modalRead.classList.toggle("is-hidden-read");
    if (iframeRead) {
      var iframeReadSrc = iframeRead.src;
      iframeRead.src = iframeReadSrc;
    }
  }
})();



//       старая версия
// (() => {
//     const refs = {
//       openModalBtn: document.querySelector("[data-modal-open-read]"),
//       closeModalBtn: document.querySelector("[data-modal-close-read]"),
//       modal: document.querySelector("[data-modal-read]"),
//     };
  
//     refs.openModalBtn.addEventListener("click", toggleModal);
//     refs.closeModalBtn.addEventListener("click", toggleModal);
  
//     function toggleModal() {
//       refs.modal.classList.toggle("is-hidden-read");
//     }
//   })();