import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../Context/AppContext';
import { assets, dummyOrders } from '../../assets/assets';

const Orders = () => {
  const { currency } = useAppContext();
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    setOrders(dummyOrders);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="no-scroll flex-1 h-[94vh] overflow-y-auto bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-6 md:px-10 space-y-6">
        <h2 className="text-xl font-semibold text-gray-800">Orders List</h2>

        {orders.map((order, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-between gap-4 p-5 bg-white shadow-sm rounded-lg border border-gray-200"
          >
            {/* Order items section */}
            <div className="flex gap-4 flex-1">
              <img
                className="w-14 h-14 object-cover shrink-0"
                src={assets.box_icon}
                alt="Box Icon"
              />
              <div className="flex flex-col flex-wrap gap-1">
                {order.items.map((item, idx) => (
                  <p key={idx} className="text-gray-800 font-medium text-sm">
                    {item.product.name}{' '}
                    <span className="text-primary text-sm">x {item.quantity}</span>
                  </p>
                ))}
              </div>
            </div>

            {/* Address section */}
            <div className="text-sm text-gray-600 md:w-1/3">
              <p className="font-medium text-gray-800">
                {order.address.firstName} {order.address.lastName}
              </p>
              <p>
                {order.address.street}, {order.address.city}
              </p>
              <p>
                {order.address.state}, {order.address.zipcode}, {order.address.country}
              </p>
              <p>{order.address.phone}</p>
            </div>

            {/* Amount and payment info */}
            <div className="flex flex-col justify-between gap-2 text-sm text-gray-600 text-right md:text-left">
              <p className="text-lg font-semibold text-gray-700">
                {currency}
                {order.amount}
              </p>
              <p>Method: {order.paymentType}</p>
              <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
              <p>
                Payment:{' '}
                <span className={order.isPaid ? 'text-green-600' : 'text-red-600'}>
                  {order.isPaid ? 'Paid' : 'Pending'}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
