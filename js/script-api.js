        // JavaScript function to handle product details view
        function viewProductDetails(productId) {
            // Make API call to backend
            fetch(`/api/products/${productId}`)
                .then(response => response.json())
                .then(product => {
                    // Handle the product data - you can redirect to product page or show modal
                    window.location.href = `/products/${productId}`;
                })
                .catch(error => {
                    console.error('Error fetching product details:', error);
                    // Fallback to direct page if API fails
                    window.location.href = `/products/${productId}`;
                });
        }

        // Alternative: Event delegation for better performance
        document.addEventListener('DOMContentLoaded', function() {
            document.addEventListener('click', function(e) {
                if (e.target.classList.contains('collection-btn')) {
                    const productId = e.target.getAttribute('data-product-id');
                    viewProductDetails(productId);
                }
            });
        });