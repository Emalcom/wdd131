// Sample product array
const products = [
    { id: 1, name: "Product A" },
    { id: 2, name: "Product B" },
    { id: 3, name: "Product C" }
];

// Populate the product dropdown
window.onload = () => {
    const productSelect = document.getElementById("product-name");
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });

    // Increment the review counter on the review page
    if (window.location.pathname.includes("review.html")) {
        let reviewCount = localStorage.getItem("reviewCount") || 0;
        reviewCount++;
        localStorage.setItem("reviewCount", reviewCount);
        document.body.innerHTML += `<p>Review submitted successfully. Total reviews: ${reviewCount}</p>`;
    }
};
