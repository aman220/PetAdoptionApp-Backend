// api.js

// Function to get coupon by ID
export const getCoupon = async (couponId) => {
    try {
        const response = await fetch(`/api/coupons/${couponId}`);
        if (!response.ok) {
            throw new Error('Failed to fetch coupon');
        }
        const coupon = await response.json();
        return coupon;
    } catch (error) {
        throw error;
    }
};

// Function to edit coupon by ID
export const editCoupon = async (couponId, data) => {
    try {
        const response = await fetch(`/api/coupons/${couponId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            throw new Error('Failed to edit coupon');
        }
        const updatedCoupon = await response.json();
        return updatedCoupon;
    } catch (error) {
        throw error;
    }
};



// Function to delete coupon by ID
export const deleteCoupon = async (couponId) => {
    try {
        const response = await fetch(`/api/coupons/${couponId}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Failed to delete coupon');
        }
    } catch (error) {
        throw error;
    }
};



// Function to add a new coupon
export const addCoupon = async (data) => {
    try {
        const response = await fetch('/api/coupons', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            throw new Error('Failed to add coupon');
        }
        const newCoupon = await response.json();
        return newCoupon;
    } catch (error) {
        throw error;
    }
};
