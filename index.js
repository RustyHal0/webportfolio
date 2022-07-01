(function () {
    var navBtn = document.querySelector(".form__btn");
    navBtn.addEventListener("click", function () {
    
  
      var nav = document.querySelector(".form");
      var isActive = nav.classList.contains("show");
  
      if (isActive) {
        nav.classList.add("hide");
        nav.classList.remove("show");
        return;
      }
  
      nav.classList.add("show");
      nav.classList.remove("hide");
      return;
    });
  
    var formName = document.querySelector(".form__input");
    var formMessage = document.querySelector(".form__textarea");
  
    function handleInputChange() {
      var formNameValue = formName.value;
      var formMessageValue = formMessage.value;
  
      document.querySelector(".form__submit").href =
        "mailto:montanojmv14@gmail.com?subject=Inquiry from " +
        formNameValue +
        "&body=" +
        formMessageValue;
  
      return false;
    }
  
    formName.addEventListener("input", handleInputChange);
    formMessage.addEventListener("input", handleInputChange);
  })();