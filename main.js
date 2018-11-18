document.getElementById("getText").addEventListener("click", getText);
document.getElementById("getFighters").addEventListener("click", getFighters);

function getText() {


  fetch("ufc.txt")
    .then((res) => res.text())
    .then((data) => {
        document.getElementById('output').innerHTML = data;
    })
    .catch((err) => console.log(err))
}

function getFighters() {


    fetch("fighters.json")
      .then((res) => res.json())
      .then((data) => {
          let output = '<h2>Fighters</h2>';
          data.forEach(function(fighter){
              output += `
              <ul>
              <li>ID: ${fighter.id}</li>
              <li>NAME: ${fighter.name}</li>
              <li>EMAIL: ${fighter.email}</li>
              </ul>
              `;
          });
          document.getElementById('output').innerHTML = output;
      })
      
  }
