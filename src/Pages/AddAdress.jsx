import React, { useState } from "react";

const AddAddress = () => {
  const [address, setAddress] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const InputField = ({ name, type = "text", placeholder }) => (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={address[name]}
      onChange={handleChange}
      className="w-full px-2 py-2.5 border border-gray-400 rounded"
      required
    />
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted address:", address);
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-2xl mb-4 font-bold">Add Address</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <InputField name="firstName" placeholder="First Name" />
          <InputField name="lastName" placeholder="Last Name" />
        </div>
        <InputField name="email" type="email" placeholder="Email Address" />
        <InputField name="phone" placeholder="Phone Number" />
        <InputField name="street" placeholder="Street" />
        <div className="grid grid-cols-2 gap-4">
          <InputField name="city" placeholder="City" />
          <InputField name="state" placeholder="State" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <InputField name="zipcode" placeholder="Zip Code" />
          <InputField name="country" placeholder="Country" />
        </div>
        <button
          type="submit"
          className="bg-purple-500 text-white px-4 py-2 rounded"
        >
          Save Address
        </button>
      </form>
    </div>
  );
};

export default AddAddress;
