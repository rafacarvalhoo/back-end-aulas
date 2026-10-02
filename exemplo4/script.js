// Ao pressionar as teclas "r", "g" ou "b", mude a cor de fundo da página para rosa, roxo ou azul, respectivamente.

document.addEventListener ("keydown", function (e) {
    if (e.key === "r") {
    document.body.style.backgroundColor = "pink"
} else if (e.key === "g") {
    document.body.style.backgroundColor = "#C8A2C8"
}else {
    document.body.style.backgroundColor = "#89CFF0"
}

})