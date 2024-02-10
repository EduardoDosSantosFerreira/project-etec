const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});
// Espera o documento estar completamente carregado
document.addEventListener("DOMContentLoaded", function () {
  // Obtém uma referência para o carrossel
  var carousel = document.querySelector("#hero-carousel");

  // Inicia o carrossel manualmente
  var carouselInstance = new bootstrap.Carousel(carousel, {
    interval: 5000, // Define o intervalo em milissegundos (2 segundos neste caso)
  });

  // Avança o carrossel para o próximo slide
  function avancarSlide() {
    carouselInstance.next();
  }

  // Chama a função para avançar o slide a cada 2 segundos
  setInterval(avancarSlide, 5000);
});

// Dark-Mode-Style
const themeSwitch = document.querySelector(".theme-switch__checkbox");
const body = document.body;

themeSwitch.addEventListener("change", function () {
  if (this.checked) {
    body.classList.add("dark-mode");
  } else {
    body.classList.remove("dark-mode");
  }
});

(function ($) {
  "use strict";

  /*==================================================================
  [ Validate ]*/
  var input = $(".validate-input .input100");

  $(".validate-form").on("submit", function () {
    var check = true;

    for (var i = 0; i < input.length; i++) {
      if (validate(input[i]) == false) {
        showValidate(input[i]);
        check = false;
      }
    }

    return check;
  });

  $(".validate-form .input100").each(function () {
    $(this).focus(function () {
      hideValidate(this);
    });
  });

  function validate(input) {
    if ($(input).attr("type") == "email" || $(input).attr("name") == "email") {
      if (
        $(input)
          .val()
          .trim()
          .match(
            /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/
          ) == null
      ) {
        return false;
      }
    } else {
      if ($(input).val().trim() == "") {
        return false;
      }
    }
  }

  function showValidate(input) {
    var thisAlert = $(input).parent();

    $(thisAlert).addClass("alert-validate");
  }

  function hideValidate(input) {
    var thisAlert = $(input).parent();

    $(thisAlert).removeClass("alert-validate");
  }
})(jQuery);
zz;

document.addEventListener("DOMContentLoaded", function () {
  const rmInput = document.getElementById("rm");

  rmInput.addEventListener("input", function () {
    // Remove qualquer caractere não numérico do valor do campo RM
    const rmValue = this.value.replace(/[^0-9]/g, "");

    // Limita o valor a 5 dígitos
    const maxLength = 5;
    const truncatedValue = rmValue.slice(0, maxLength);

    // Atualiza o valor do campo RM
    this.value = truncatedValue;
  });
});
