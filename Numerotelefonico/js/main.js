function telefonocheck(str) {
    var isphone = /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/;
    console.log(isphone.test(str));

    if (isphone.test(str) === true) {
        return (document.getElementById("enviar").innerHTML =
            "<p style='color: brown; font-size:20px;'>El telefono esta permitido</p>");
    }
    return (document.getElementById("enviar").innerHTML =
        "<p style='color: red; font-size:20px;'>El telefono no es permitido en este pais intentelo de nuevo</p>");
}

