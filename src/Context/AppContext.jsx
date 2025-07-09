import React, { useContext, useEffect, useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";
import { toast } from "react-hot-toast"; // Make sure you have react-toastify installed

// 1. Create the context
export const AppContext = createContext();

// 2. Create the provider component
export const AppContextProvider = ({ children }) => {
  const currency = import.meta.env.VITE_CURRENCY; // ✅ corrected
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [isSeller, setIsSeller] = useState(false);
  const [showUserLogin, setUserLogin] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});
    const [searchQuery, setSearchQuery] = useState({}); // ✅ corrected from cardItems

  // Simulated fetch
  const fetchProducts = async () => {
    setProducts(dummyProducts);
  };


  // add items count

  const getCardCount =()=>{
    let totalCount = 0;
    for(const item in cartItems){
      totalCount += cartItems [item]
    }
    return totalCount;
  }

  // get card total amount

  const getCardAmmount =()=>{
    let totalAmount = 0;
    for(const items in cartItems){
      let itemInfo = products.find((product)=>product._id === items);
      if(cartItems[items] > 0 ){
        totalAmount += itemInfo.offerPrice * cartItems[items]
      } 
    }
    return Math.floor(totalAmount * 100 ) / 100;
  } 

  // ✅ Add to cart function
  const addToCart = (itemId) => {
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      cartData[itemId] += 1;
    } else {
      cartData[itemId] = 1;
    }
    setCartItems(cartData);
    toast.success("Added to Cart");
  };

  // update card item quantity
  const updateCardItems=(itemId, quantity)=>{
    let cartData = structuredClone(cartItems);
    cartData[itemId] = quantity;
    setCartItems(cartData);
    toast.success("card updated");

  }

  // remove prodeuct form card

  const removeFromCard =(itemId)=>{
    let cartData = structuredClone(cartItems);
    if(cartData[itemId]){
      cartData[itemId] -=1;
      if(cartData[itemId]===0 ){
        delete cartData[itemId];
      }
    }
toast.success("item remove form card");
setCartItems(cartData);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  const value = {
    navigate,
    user,
    setUser,
    isSeller,
    setIsSeller,
    showUserLogin,
    setUserLogin,
    products,
    currency,
    cartItems,
    setCartItems,
    addToCart,
    updateCardItems,
    removeFromCard,
    searchQuery,
    setSearchQuery,
    getCardAmmount,
    getCardCount,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// 3. Custom hook for easier use
export const useAppContext = () => {
  return useContext(AppContext);
};
