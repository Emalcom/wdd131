
        const products = [
            {
                productName: "Bread Slices",
                imageUrl: "https://images.pexels.com/photos/8599589/pexels-photo-8599589.jpeg"
            },
            {
                productName: "Wedding Cake",
                imageUrl: "https://images.pexels.com/photos/1038711/pexels-photo-1038711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            },
            {
                productName: "Birthday Cake",
                imageUrl: "https://images.pexels.com/photos/2531546/pexels-photo-2531546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            },
            {
                productName: "Cup Cake",
                imageUrl: "https://images.pexels.com/photos/14105/pexels-photo-14105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            },
            {
                productName: "Donuts",
                imageUrl: "https://images.pexels.com/photos/1395323/pexels-photo-1395323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            },
            {
                productName: "Brown Bread",
                imageUrl: "https://media.istockphoto.com/id/530696337/photo/bread.jpg?s=1024x1024&w=is&k=20&c=DYSgA32WJbnKP63f1hzA15B8YWFDch5pHaF3tHSAUCo="
            },
            {
                productName: "Long Bread",
                imageUrl: "https://images.pexels.com/photos/8332843/pexels-photo-8332843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            },
            {
                productName: "Sweet Bread",
                imageUrl: "https://images.pexels.com/photos/5419309/pexels-photo-5419309.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            },
            {
                productName: "Dessert Cake",
                imageUrl: "https://images.pexels.com/photos/29120755/pexels-photo-29120755/free-photo-of-delicious-azerbaijani-tea-and-cake-scene.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            },
            {
                productName: "Fruit Cake",
                imageUrl: "https://images.pexels.com/photos/8104140/pexels-photo-8104140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
        ];

        // Reference to the gallery section
        const gallery = document.getElementById('products-gallery');

        // Dynamically create HTML elements for each product with lazy loading enabled
        products.forEach(products => {
            const productFigure = document.createElement('figure');
            const productImg = document.createElement('img');
            const productCaption = document.createElement('figcaption');

            // Set product details
            productImg.src = products.imageUrl;
            productImg.alt = products.productName;
            productImg.loading = "lazy";  // Enable lazy loading
            productCaption.textContent = products.productName;

            // Append elements to the figure and the figure to the gallery
            productFigure.appendChild(productImg);
            productFigure.appendChild(productCaption);
            gallery.appendChild(productFigure);
        });
 
