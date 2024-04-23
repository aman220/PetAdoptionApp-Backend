// Function to capitalize the first letter of a string
export const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

// Function to truncate text to a specified length
export const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
        return text.slice(0, maxLength) + '...';
    }
    return text;
};

// Function to generate a URL-friendly slug from a title
export const generateSlug = (title) => {
    return title.toLowerCase().replace(/[^\w\s]/gi, '').replace(/\s+/g, '-');
};

// Function to format a number with commas as thousands separators
export const formatNumberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// Function to check if a value is empty or not
export const isEmpty = (value) => {
    return value === null || value === undefined || value === '';
};

// Function to check if a value is a valid email address
export const isValidEmail = (email) => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

// Function to shuffle an array in place
export const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

// Add more utility functions here as needed
