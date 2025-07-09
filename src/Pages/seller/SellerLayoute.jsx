import { Link, NavLink, Outlet } from "react-router-dom";
import { assets } from "../../assets/assets";
import { useAppContext } from "../../Context/AppContext";
import logo1 from "../../assets/freshora_white_bg_logo-removebg.png"
const SellerLayoute = () => {
    const { setIsSeller } = useAppContext();

    const logout = async () => {
        setIsSeller(false);
        // Optionally navigate away or clear auth info
    };

    const sidebarLinks = [
        { name: "Add Product", path: "/seller", icon: assets.add_icon },
        { name: "Product List", path: "/seller/product-list", icon: assets.product_list_icon },
        { name: "Orders", path: "/seller/orders", icon: assets.order_icon },
    ];

    return (
        <>
            <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white">
                <Link to={"/"}>
                    <img src={logo1} alt="Logo" className="cursor-pointer w-34 md:w-38 h-23" />
                </Link>
                <div className="flex items-center gap-5 text-gray-500">
                    <p>Hi! Admin</p>
                    <button onClick={logout} className="border rounded-full text-sm px-4 py-1">Logout</button>
                </div>
            </div>

            <div className="flex">
                <div className="md:w-64 w-16 border-r h-screen text-base border-gray-300 pt-4 flex flex-col">
                    {sidebarLinks.map((item) => (
                        <NavLink
                            to={item.path}
                            key={item.name}
                            end={item.path === "/seller"}
                            className={({ isActive }) =>
                                `flex items-center py-3 px-4 gap-3 transition-colors
                                ${
                                    isActive
                                        ? "border-r-4 md:border-r-[6px] bg-indigo-500/10 border-indigo-500 text-indigo-500"
                                        : "hover:bg-gray-100/90 border-white text-gray-700"
                                }`
                            }
                        >
                            <img src={item.icon} alt={item.name} className="w-7 h-7" />
                            <p className="md:block hidden text-center">{item.name}</p>
                        </NavLink>
                    ))}
                </div>

                <div className="flex-1 p-4 overflow-y-auto">
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default SellerLayoute;
