'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const CheckOut = () => {
    const router = useRouter();

    useEffect(() => {
        // Check if user came from the cart page
        const referrer = document.referrer;
        if (!referrer.includes('/cart')) {
            // Redirect to cart page if not coming from there
            router.push('/cart');
        }
    }, [router]);

    return (
        <div>
            <h1>Checkout Page</h1>
            <p>Proceed with your payment and order details.</p>
        </div>
    );
};

export default CheckOut;