// Button click handler
const btnClickHandler = () => {
  const input = document.getElementById("search-box");
  const inputValue = input.value.toLowerCase();
  // Send url to API request
  const url = `https://openapi.programming-hero.com/api/phones?search=${inputValue}`;
  getSearchResult(url);
};

// Send API request
const getSearchResult = (url) => {
  console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => updateUI(data))
    .catch((e) => console.log(e));
};

// Update UI with the API Response
const updateUI = (data) => {
  if (data.status) {
    const phones = data.data;
    phones.forEach((phone) => {
      const template = `
                <div class="card mx-auto p-1 my-2" style="width: 18rem">
                  <img src="${phone.image}" class="card-img-top" alt="" />
                  <div class="card-body">
                    <h5 class="card-title">${phone.phone_name}</h5>
                    <p class="card-text">${phone.brand}</p>
                    <a href="#" class="btn btn-primary">Details...</a>
                  </div>
                </div>
      `;
      addToDomTarget(template, "show-result");
      console.log(phone);
    });
  } else {
    console.log(data);
  }
};

// Function to add item in the tergeted DOM
const addToDomTarget = (item, targetId) => {
  const container = document.getElementById(targetId);
  const element = document.createElement("div");
  element.classList.add("col");
  element.innerHTML = item;

  container.appendChild(element);
  console.log(item);
};

// Phone Search

// URL Format:

// Example: https://openapi.programming-hero.com/api/phones?search=iphone
// Phone detail url:

// URL Format: https://openapi.programming-hero.com/api/phone/${id}

// Example: https://openapi.programming-hero.com/api/phone/apple_iphone_13_pro_max-11089
