function changeF1Team() {
    let f1Image = document.getElementById("f1Image");
    let f1Text = document.getElementById("f1Text");

    if (f1Text.innerText === "Ferrari") {
        f1Image.src = "images/Mercedessymbol.jpeg";  // Change to Mercedes
        f1Image.alt = "Mercedes";
        f1Text.innerText = "Mercedes";
    } else {
        f1Image.src = "images/ferrarisymbol.jpeg";  // Change back to Ferrari
        f1Image.alt = "Ferrari";
        f1Text.innerText = "Ferrari";
    }
}

function changeDriver() {
    let driverImage = document.getElementById("driverImage");
    let driverText = document.getElementById("driverText");

    if (driverText.innerText === "Charles Leclerc") {
        driverImage.src = "images/LewisHamilton.jpeg";  // Change to Lewis Hamilton
        driverImage.alt = "Lewis Hamilton";
        driverText.innerText = "Lewis Hamilton";
    } else {
        driverImage.src = "images/CharlesLeclerc.jpeg";  // Change back to Charles Leclerc
        driverImage.alt = "Charles Leclerc";
        driverText.innerText = "Charles Leclerc";
    }
}
