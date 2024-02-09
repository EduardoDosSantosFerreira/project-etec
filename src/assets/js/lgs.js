<<<<<<< HEAD
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
=======
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
>>>>>>> 8639b17c6c51f7d48ca490de92a7caa6b6e24e9c
})