// AdminCouponDelete.js
import React, { useState } from 'react';
import { deleteCoupon } from './api'; // Import API function for deleting coupon

const AdminCouponDelete = () => {
    const [couponId, setCouponId] = useState('');

    const handleDeleteCoupon = async () => {
        try {
            await deleteCoupon(couponId);
            // Handle success
            alert('Coupon deleted successfully');
        } catch (error) {
            // Handle error
            alert('Failed to delete coupon');
        }
    };

    return (
        <div>
            <input type="text" value={couponId} onChange={(e) => setCouponId(e.target.value)} />
            <button onClick={handleDeleteCoupon}>Delete Coupon</button>
        </div>
    );
};

export default AdminCouponDelete;
