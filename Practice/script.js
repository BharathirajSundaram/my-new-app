function addNewDivElement() {
    console.log('addNewDivElement');
    const divElem = document.createElement("div");

    divElem.id = "newDivElem";
    divElem.className = "newDivElem";
    divElem.style.backgroundImage = "url('./image/_DSC5487.JPG')";
    divElem.style.backgroundSize = "cover"
    divElem.style.backgroundRepeat = "norepeat";
    divElem.style.overflow = "hidden";
    divElem.style.backgroundPosition = "center";
    divElem.style.backgroundAttachment = "fixed";
    divElem.style.backgroundOrigin = "border-box";
    divElem.innerText = "This is a new div element";
    divElem.innerHTML = "<h1>Fixed</h2>";
    divElem.style.color = "white";
    // divElem.style.width = "10rem";
    // divElem.style.height = "10rem";
    divElem.style.backgroundColor = "grey";
    divElem.style.maxHeight = "100vh";
    divElem.style.margin = "0rem";

    divElem.style.padding = "0rem";
    divElem.style.border = "1rem solid black";
    divElem.style.borderRadius = "0%";
    divElem.style.cursor = "pointer";
    divElem.style.textAlign = "center";
    divElem.style.verticalAlign = "middle";

    divElem.onclick = function () {
        console.log('clicked');
    }
    document.body.appendChild(divElem);


}