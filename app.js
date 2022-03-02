// Button click handler
const btnClickHandler = () => {
  const input = document.getElementById("search-box");
  const inputValue = input.value.toLowerCase();
  // Send url to API request
  const url = `https://openapi.programming-hero.com/api/phones?search=${inputValue}`;
  const searchResult = getSearchResult(url);
};
