document.getElementById("getText").addEventListener("click", getText);

function getText() {


  fetch("ufc.txt")
    .then((res) => res.text())
    .then((data) => {
        document.getElementById('output').innerHTML = data;
    });
}
