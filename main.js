console.log(customers);

const customer = document.querySelector('#customer');
let object = ``;


  for (let i = 0; i < customers.results.length; i++) {
    object +=
    `<div class="gallery">
        <img src=${customers.results[i].picture.large}>
        <h2>${customers.results[i].name.title} ${customers.results[i].name.first} ${customers.results[i].name.last}</h2>
        <p>${customers.results[i].email}</p>
        <br>
        <address>
        <p>${customers.results[i].location.street}</p>
        <p>${customers.results[i].location.city} ${customers.results[i].location.state} ${customers.results[i].location.postcode}</p>
        </address>
        <p>${customers.results[i].cell}</p>
      </div>`
      ;
      console.log(object);
  }
customer.innerHTML = object;
