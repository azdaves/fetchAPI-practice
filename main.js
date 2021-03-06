document.getElementById("getText").addEventListener("click", getText);
document.getElementById("getFighters").addEventListener("click", getFighters);
document.getElementById("getMoreFighters").addEventListener("click", getMoreFighters);
document.getElementById("getPosts").addEventListener("click", getPosts);
document.getElementById('addPost').addEventListener('submit', addPost);

function getText() {
  fetch("ufc.txt")
    .then(res => res.text())
    .then(data => {
      document.getElementById("output").innerHTML = data;
    })
    .catch(err => console.log(err));
}

function getFighters() {
  fetch("fighters.json")
    .then(res => res.json())
    .then(data => {
      let output = "<h2>Fighters</h2>";
      data.forEach(function(fighter) {
        output += `
              <ul>
              <li>ID: ${fighter.id}</li>
              <li>NAME: ${fighter.name}</li>
              <li>EMAIL: ${fighter.email}</li>
              </ul>
              `;
      });
      document.getElementById("output").innerHTML = output;
    });
}

function getMoreFighters() {
    fetch("http://ufc-data-api.ufc.com/api/v3/us/fighters/title_holders")
      .then(res => res.json())
      .then(data => {
        let output = "<h2>Title Holders</h2>";
        data.forEach(function(title_holder) {
          output += `
                <ul>
                <li>Division: ${title_holder.weight_class}</li>
                <li>NAME: ${title_holder.first_name} ${title_holder.last_name}</li>
               
                </ul>
                `;
        });
        document.getElementById("output").innerHTML = output;
      });
  }

function getPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => {
        let output = "<h2>Posts</h2>";
        data.forEach(function(post) {
            output += `
            <div class="card card-body mb-3">
              <h3>${post.title}</h3>
              <p>${post.body}</p>
            </div>
          `;
        });
        document.getElementById("output").innerHTML = output;
      });
  }

  function addPost(e){
    e.preventDefault();

    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method:'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-type':'application/json'
      },
      body:JSON.stringify({title:title, body:body})
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
  }
