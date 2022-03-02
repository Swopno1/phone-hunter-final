const btnClickHandler = () => {
  const input = document.getElementById("search-box");
  const inputValue = input.value;
  console.log(inputValue);
};

// Phone Search

// URL Format: https://openapi.programming-hero.com/api/phones?search=${searchText}

// Example: https://openapi.programming-hero.com/api/phones?search=iphone
// Phone detail url:

// URL Format: https://openapi.programming-hero.com/api/phone/${id}

// Example: https://openapi.programming-hero.com/api/phone/apple_iphone_13_pro_max-11089
