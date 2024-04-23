const DataUtils = {
    formatPrice: (price) => {
        // Format price to 2 decimal places
        return price.toFixed(2);
    },
    formatDate: (date) => {
        // Format date to a human-readable format
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(date).toLocaleDateString(undefined, options);
    },
    capitalize: (string) => {
        // Capitalize the first letter of a string
        return string.charAt(0).toUpperCase() + string.slice(1);
    },
    truncateText: (text, maxLength) => {
        // Truncate text to a specified length
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + '...';
        }
        return text;
    },
    generateSlug: (title) => {
        // Generate a URL-friendly slug from a title
        return title.toLowerCase().replace(/[^\w\s]/gi, '').replace(/\s+/g, '-');
    },
    // Add more utility methods here as needed
};

export default DataUtils;
