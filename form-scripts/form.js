// Product array
const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];
  
  // Function to populate the product select element
  function populateProductSelect() {
      const productSelect = document.getElementById("productSelect"); // Assumes you have an id of productSelect on the select element
  
      // Create the instructional placeholder option
      const placeholderOption = document.createElement("option");
      placeholderOption.text = "Choose a Product ...";
      placeholderOption.value = "";
      placeholderOption.disabled = true;
      placeholderOption.selected = true;
      productSelect.appendChild(placeholderOption);
  
      // Populate the select options from the products array
      products.forEach(product => {
          const option = document.createElement("option");
          option.value = product.id; // Using the id as the value
          option.text = product.name; // Displaying the name
          productSelect.appendChild(option);
      });
  }
  
  // Function to increment review count in localStorage
  function incrementReviewCount() {
      let reviewCount = localStorage.getItem('reviewCount') || 0; // Get current count or default to 0
      reviewCount = parseInt(reviewCount) + 1; // Increment count
      localStorage.setItem('reviewCount', reviewCount); // Update localStorage
  }
  
  // Execute the population function on page load
  document.addEventListener("DOMContentLoaded", function() {
      populateProductSelect();
  
      // Check if we are on the review confirmation page
      if (window.location.pathname.endsWith("review.html")) {
          incrementReviewCount();
          displayReviewCount(); // Optional: display the review count to the user
      }
  });
  
  // Optional: Function to display the review count
  function displayReviewCount() {
      const reviewCount = localStorage.getItem('reviewCount') || 0;
      const reviewCountDisplay = document.getElementById("reviewCountDisplay"); // Assumes you have an element with this id
      if (reviewCountDisplay) {
          reviewCountDisplay.textContent = `Total Reviews Submitted: ${reviewCount}`;
      }
  }
  