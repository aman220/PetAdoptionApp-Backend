// AdminCouponEdit.js
import React, { useState, useEffect } from 'react';
import { getCoupon, editCoupon } from './api'; // Import API functions for getting and editing coupon

const AdminCouponEdit = () => {
    const [couponId, setCouponId] = useState('');
    const [coupon, setCoupon] = useState(null);
    const [discount, setDiscount] = useState(0);

    useEffect(() => {
        const fetchCoupon = async () => {
            try {
                const fetchedCoupon = await getCoupon(couponId);
                setCoupon(fetchedCoupon);
                setDiscount(fetchedCoupon.discount);
            } catch (error) {
                // Handle error
                console.log('Failed to fetch coupon');
            }
        };
        if (couponId) {
            fetchCoupon();
        }
    }, [couponId]);

    const handleEditCoupon = async () => {
        try {
            await editCoupon(couponId, { discount });
            // Handle success
            alert('Coupon edited successfully');
        } catch (error) {
            // Handle error
            alert('Failed to edit coupon');
        }
    };

    return (
        <div>
            <input type="text" value={couponId} onChange={(e) => setCouponId(e.target.value)} />
            {coupon && (
                <div>
                    <input type="number" value={discount} onChange={(e) => setDiscount(e.target.value)} />
                    <button onClick={handleEditCoupon}>Edit Coupon</button>
                </div>
            )}
        </div>
    );
};

export default AdminCouponEdit;
