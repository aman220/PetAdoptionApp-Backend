// AdminCouponAdd.js
import React, { useState } from 'react';
import { addCoupon } from './api'; // Import API function for adding coupon

const AdminCouponAdd = () => {
    const [couponCode, setCouponCode] = useState('');
    const [discount, setDiscount] = useState(0);

    const handleAddCoupon = async () => {
        try {
            await addCoupon({ couponCode, discount });
            // Handle success
            alert('Coupon added successfully');
        } catch (error) {
            // Handle error
            alert('Failed to add coupon');
        }
    };

    return (
        <div>
            <input type="text" value={couponCode} onChange={(e) => setCouponCode(e.target.value)} />
            <input type="number" value={discount} onChange={(e) => setDiscount(e.target.value)} />
            <button onClick={handleAddCoupon}>Add Coupon</button>
        </div>
    );
};

export default AdminCouponAdd;
