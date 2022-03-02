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
  console.log(data);
};

// Phone Search

// URL Format:

// Example: https://openapi.programming-hero.com/api/phones?search=iphone
// Phone detail url:

// URL Format: https://openapi.programming-hero.com/api/phone/${id}

// Example: https://openapi.programming-hero.com/api/phone/apple_iphone_13_pro_max-11089
