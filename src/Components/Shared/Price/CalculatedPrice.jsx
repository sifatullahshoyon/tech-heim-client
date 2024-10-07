import React, { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';

const CalculatedPrice = () => {
  const { cartProduct ,fetchCartDetails} = useContext(AuthContext);
  const { cart, totalPrice } = cartProduct;
    return (
        <div>
            <div className="flex justify-between mb-2">
              <p className="text-[#717171] text-sm">Subtotal</p>
              <p className="text-[#717171] text-sm">${totalPrice}</p>
            </div>
            <div className="flex justify-between mb-2">
              <p className="text-[#717171] text-sm">Discount</p>
              <p className="text-[#717171] text-sm">-$111.82</p>
            </div>
            <div className="flex justify-between mb-2">
              <p className="text-[#717171] text-sm">Shipment Cost</p>
              <p className="text-[#717171] text-sm">$364.73</p>
            </div>
          </div>
    );
};

export default CalculatedPrice;
