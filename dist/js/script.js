window.addEventListener("DOMContentLoaded", function () {
  const mobileMenuBnt = document.querySelector(".mobile-menu__burger");
  const mobileCloseBnt = document.querySelector(".mobile-menu__close");
  const mobileMenuContent = document.querySelector(".mobile-menu-content");
  const advantageBtn = document.querySelector(".advantages__btn");
  const advantageBtnClose = document.querySelector(".advantages__btn-close");
  const advantagesHiddenContent = document.querySelector(".advantages__hidden");
  const modalBtnOpen = document.querySelectorAll(".tel__btn");
  const overlay = document.querySelector(".overlay");
  const modalBtnClose = document.querySelector(".modal__close");
  const modalForm = document.getElementById("modal-form");
   const checkbox = document.getElementById("checkbox");
   const modalBtn = document.querySelector(".modal__btn");
   const p1 = document.querySelector(".p1");
   const input = document.querySelector(".tel");
   const modal = document.getElementById("modal");

//    menu
function GetMobileMenuOpen() {
    mobileMenuContent.classList.add("active");
    mobileMenuBnt.style.display = "none";
    mobileCloseBnt.style.display = "block";
}
mobileMenuBnt.addEventListener("click", GetMobileMenuOpen);

function GetMobileMenuClose() {
     mobileMenuContent.classList.remove("active");
     mobileMenuBnt.style.display = "block";
     mobileCloseBnt.style.display = "none";
}

mobileCloseBnt.addEventListener("click", GetMobileMenuClose);


// 
function GetAdvantadeOpen() {
    advantagesHiddenContent.style.display = "block";
    advantageBtn.style.display = "none";
    advantageBtnClose.style.display = "flex";
    
}
 advantageBtn.addEventListener("click", GetAdvantadeOpen);


function GetAdvantadeClose() {
    advantagesHiddenContent.style.display = "none";
    advantageBtn.style.display = "flex";
    advantageBtnClose.style.display = "none";
}
advantageBtnClose.addEventListener("click", GetAdvantadeClose);


  
  modalBtnOpen.forEach((element) => {
    element.addEventListener("click", () => {
      overlay.style.display = "flex";
      modalForm.style.display = "block";
    });
  });
function getModalClose() {
     overlay.style.display = "none";
}
modalBtnClose.addEventListener("click", getModalClose )


  function GetCloseOverlay() {
    overlay.style.display = "none";
    modal.style.display = "none";
    modalForm.style.display = "none";
  }

  overlay.addEventListener("click", GetCloseOverlay )

  modalForm.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  // маска ввода номера
function GetMasck() {
    [].forEach.call(document.querySelectorAll(".tel"), function (input) {
      let keyCode;
      function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        let pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        let matrix = "+7 (___) ___ ____",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          new_value = matrix.replace(/[_\d]/g, function (a) {
            return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
          });
        i = new_value.indexOf("_");
        if (i != -1) {
          i < 5 && (i = 3);
          new_value = new_value.slice(0, i);
        }
        let reg = matrix
          .substr(0, this.value.length)
          .replace(/_+/g, function (a) {
            return "\\d{1," + a.length + "}";
          })
          .replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (
          !reg.test(this.value) ||
          this.value.length < 5 ||
          (keyCode > 47 && keyCode < 58)
        )
          this.value = new_value;
        if (event.type == "blur" && this.value.length < 5) this.value = "";
      }

      input.addEventListener("input", mask, false);
      input.addEventListener("focus", mask, false);
      input.addEventListener("blur", mask, false);
      input.addEventListener("keydown", mask, false);
    });
}
GetMasck();

  // Валидация
  function GetFormValidation() {
   

    modalBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if (checkbox.checked == true && !input.value !=='' ) {
        modal.style.display = "block";
        modalForm.style.display = "none";
        p1.style.display = "none";
      } else {
        p1.style.display = "block";
      }
    });
  }
  GetFormValidation();
});
 
