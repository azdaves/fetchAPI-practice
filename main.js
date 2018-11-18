document.getElementById("getText").addEventListener("click", getText);

function getText() {
  // fetch('ufc.txt').then(function(res){
  // return res.text();
  // })
  // .then(function(data) {
  //     console.log(data);
  // });

  //arrow function below:

  fetch("ufc.txt")
    .then(res => res.text())
    .then(data => console.log(data));
}
