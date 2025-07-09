import logo from "./logo.svg";
import search_icon from "./search_icon.svg";
import remove_icon from "./remove_icon.svg";
import arrow_right_icon_colored from "./arrow_right_icon_colored.svg";
import star_icon from "./star_icon.svg";
import star_dull_icon from "./star_dull_icon.svg";
import cart_icon from "./cart_icon.svg";
import nav_cart_icon from "./nav_cart_icon.svg";
import add_icon from "./add_icon.svg";
import refresh_icon from "./refresh_icon.svg";
import product_list_icon from "./product_list_icon.svg";
import order_icon from "./order_icon.svg";
import upload_area from "./upload_area.png";
import profile_icon from "./profile_icon.png";
import menu_icon from "./menu_icon.svg";
import delivery_truck_icon from "./delivery_truck_icon.svg";
import leaf_icon from "./leaf_icon.svg";
import coin_icon from "./coin_icon.svg";
import box_icon from "./box_icon.svg";
import trust_icon from "./trust_icon.svg";
import black_arrow_icon from "./black_arrow_icon.svg";
import white_arrow_icon from "./white_arrow_icon.svg";
import main_banner_bg from "./main_banner_bg.png";
import main_banner_bg_sm from "./main_banner_bg_sm.png";
import bottom_banner_image from "./bottom_banner_image.png";
import bottom_banner_image_sm from "./bottom_banner_image_sm.png";
import add_address_iamge from "./add_address_image.svg";

export const assets = {
  logo,
  search_icon,
  remove_icon,
  arrow_right_icon_colored,
  star_icon,
  star_dull_icon,
  cart_icon,
  nav_cart_icon,
  add_icon,
  refresh_icon,
  product_list_icon,
  order_icon,
  upload_area,
  profile_icon,
  menu_icon,
  delivery_truck_icon,
  leaf_icon,
  coin_icon,
  trust_icon,
  black_arrow_icon,
  white_arrow_icon,
  main_banner_bg,
  main_banner_bg_sm,
  bottom_banner_image,
  bottom_banner_image_sm,
  add_address_iamge,
  box_icon,
};

export const categories = [
  {
    text: "Pizzas",
    path: "Oven-FreshPizzas",
    image: ["https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/010b29da595df93d828ca0dca935821"],
    bgColor: "#FEF6DA",
  },
  {
    text: "Burgers",
    path: "Chef-SpecialBurgers",
    image: ["https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/4/13/c399fbf4-8312-48c0-b661-fa2e052845cf_c96b26a6-55c6-43ff-8231-03e6c10cc4b6.jpg"],
    bgColor: "#FEE0E0",
  },
  {
    text: "Sandwiches",
    path: "Fresh-ToastedSubs",
    image: ["https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/1/17/20108a56-054c-4b1f-ae52-d9da09c45805_a58fa342-9097-4bb7-a676-5e6e82746d62.jpg"],
    bgColor: "#F0F5DE",
  },
  {
    text: "Salads",
    path: "Nutri-BowlCreations",
    image: ["https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/oxphistkvzdbevukxngs"],
    bgColor: "#E1F5EC",
  },
  {
    text: "Juices",
    path: "Nature-sRefreshments",
    image: ["https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/6/3/a90ba164-2003-47af-8294-bd5de28369dc_62d6da98-730c-4130-8d7c-ff5c221bc96b.jpg"],
    bgColor: "#FEE6CD",
  },
  {
    text: "Smoothies",
    path: "FruityChillSips",
    image: ["https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/3/14/bb8470e1-5862-4844-bb47-ec0b2abdd752_845f1527-6bb0-46be-a1be-2fcc7532e813.png"],
    bgColor: "#E0F6FE",
  },
  {
    text: "Ice-Creams",
    path: "FrozenTreats",
    image: ["https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/5/1/46d94650-20b8-450e-94e0-0f4b89c3388b_7af46fa1-1452-4319-bd1b-593fa74b1bcb.jpg"],
    bgColor: "#F1E3F9",
  },
];

export const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { text: "Home", url: "#" },
      { text: "Best Sellers", url: "#" },
      { text: "Offers & Deals", url: "#" },
      { text: "Contact Us", url: "#" },
      { text: "FAQs", url: "#" },
    ],
  },
  {
    title: "Need help?",
    links: [
      { text: "Delivery Information", url: "#" },
      { text: "Return & Refund Policy", url: "#" },
      { text: "Payment Methods", url: "#" },
      { text: "Track your Order", url: "#" },
      { text: "Contact Us", url: "#" },
    ],
  },
  {
    title: "Follow Us",
    links: [
      { text: "Instagram", url: "#" },
      { text: "Twitter", url: "#" },
      { text: "Facebook", url: "#" },
      { text: "YouTube", url: "#" },
    ],
  },
];

export const features = [
  {
    icon: delivery_truck_icon,
    title: "Fastest Delivery",
    description: "Groceries delivered in under 30 minutes.",
  },
  {
    icon: leaf_icon,
    title: "Freshness Guaranteed",
    description: "Fresh produce straight from the source.",
  },
  {
    icon: coin_icon,
    title: "Affordable Prices",
    description: "Quality groceries at unbeatable prices.",
  },
  {
    icon: trust_icon,
    title: "Trusted by Thousands",
    description: "Loved by 10,000+ happy customers.",
  },
];

export const dummyProducts = [
  // pizza
  {
    _id: "gd46g23h",
    name: "Margherita Pizza",
    category: "Oven-FreshPizzas",
    price: 25,
    offerPrice: 20,
    image: ["https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/6f0d5f50a1ca02afaca5f154bd1be126"],
    description: [
   "Classic pizza with fresh tomatoes, mozzarella cheese, and basil"
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "gd47g34h",
    name: "Vegetable Pizza",
    category: "Oven-FreshPizzas",
    price: 40,
    offerPrice: 35,
    image: ["https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/0867ce9bc24545c1ac2c3924e6984488"],
    description: [
     "Topped with seasonal vegetables and mozzarella cheese"
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "gd48g45h",
    name: "Pesto Pizza",
    category: "Oven-FreshPizzas",
    price: 30,
    offerPrice: 28,
    image: ["https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/3/8/21e7b2f2-7052-499a-9c4d-47f64a175330_e78a3ced-4c31-4c47-b18f-c0451452266f.png"],
    description: [
      "Delicious pesto sauce with sun-dried tomatoes and mozzarella"
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "gd49g56h",
    name: "Cheese Pizza",
    category: "Oven-FreshPizzas",
    price: 18,
    offerPrice: 15,
    image: ["https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/f4oprs7rhjfue7tak5o0"],
    description: [
      "A classic cheese pizza made with rich mozzarella"
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "gd50g67h",
    name: "BBQ Vegetable Pizza",
    category: "Oven-FreshPizzas",
    price: 22,
    offerPrice: 19,
    image: ["https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/4/16/8c2d80c3-d018-462a-8dc3-cc436f725e00_8b3b6c71-0e80-488d-8893-e3ea031208b2.jpg_compressed"],
    description: [
     "BBQ sauce topped with assorted grilled vegetables"
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
// burgers
 {
  _id: "ek51j12k",
  name: "Veggie Burger",
  category: "Chef-SpecialBurgers",
  price: 120,
  offerPrice: 110,
  image: ["https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/3/25/49bf5429-1f16-4af2-84eb-6875c6c1270a_f305abbc-b45b-46ab-b0e0-e2235012af23.png_compressed"],
  description: [
    "A hearty burger made with black beans and quinoa",
    "Topped with fresh lettuce, tomato, and vegan mayo",
    "Served on a whole wheat bun"
  ],
  createdAt: "2025-03-25T07:17:46.018Z",
  updatedAt: "2025-03-25T07:18:13.103Z",
  inStock: true,
},
{
  _id: "ek52j23k",
  name: "Black Bean Burger",
  category: "Chef-SpecialBurgers",
  price: 80,
  offerPrice: 75,
  image: ["https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/8/8/0c27a447-8087-4551-aa45-f345e55dd895_a70dbab0-5bd8-4072-87b7-9566ea12fe08.jpeg"],
  description: [
    "Savory black bean patty packed with flavor",
    "Served with spicy chipotle sauce and pickles",
    "Perfect for a protein-rich vegetarian meal"
  ],
  createdAt: "2025-03-25T07:17:46.018Z",
  updatedAt: "2025-03-25T07:18:13.103Z",
  inStock: true,
},
{
  _id: "ek53j34k",
  name: "Portobello Mushroom Burger",
  category: "Chef-SpecialBurgers",
  price: 50,
  offerPrice: 45,
  image: ["https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/1/7/4f82cd1a-87b2-4d65-9e04-abd11ae104b0_bee5a6dd-77f2-481d-a179-9bd8ad5b4216.JPG"],
  description: [
    "Grilled portobello mushroom as the patty",
    "Juicy, earthy flavor with garlic aioli and arugula",
    "Served on a toasted brioche bun"
  ],
  createdAt: "2025-03-25T07:17:46.018Z",
  updatedAt: "2025-03-25T07:18:13.103Z",
  inStock: true,
},
{
  _id: "ek54j45k",
  name: "Chickpea Burger",
  category: "Chef-SpecialBurgers",
  price: 150,
  offerPrice: 140,
  image: ["https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/4/14/da1beec1-7773-44fe-9db8-e339bab8ed5b_db51f5ce-bedd-453c-ae70-76776d5a5636.jpeg"],
  description: [
    "Spiced chickpea patty with coriander and lemon",
    "Topped with red onion and garlic tahini sauce",
    "Crispy outside and soft inside"
  ],
  createdAt: "2025-03-25T07:17:46.018Z",
  updatedAt: "2025-03-25T07:18:13.103Z",
  inStock: true,
},
{
  _id: "ek55j56k",
  name: "Quinoa Burger",
  category: "Chef-SpecialBurgers",
  price: 70,
  offerPrice: 65,
  image: ["https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/2/4/53c8aaaa-9b03-4fd1-b790-e516c79aaa6e_6ca6ce4c-a4c1-4736-8ef9-4e4a2bd9eaf0.jpg"],
  description: [
    "Protein-rich quinoa patty with spices and herbs",
    "Healthy and gluten-free option",
    "Great with avocado slices and tomato relish"
  ],
  createdAt: "2025-03-25T07:17:46.018Z",
  updatedAt: "2025-03-25T07:18:13.103Z",
  inStock: true,
},

  // Salads

 {
  _id: "ek61j12k",
  name: "Caesar Salad",
  category: "Nutri-BowlCreations",
  price: 80,
  offerPrice: 75,
  image: ["https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/7/2/6e8567b3-f90a-41a2-9bda-c0c88b482b48_2a35bb46-9b44-40a8-aeb7-c5a081521571.JPG"],
  description: [
    "Classic Caesar salad with romaine lettuce, parmesan, and croutons",
    "Tossed in creamy Caesar dressing",
    "Ideal as a light meal or side"
  ],
  createdAt: "2025-03-25T07:17:46.018Z",
  updatedAt: "2025-03-25T07:18:13.103Z",
  inStock: true
},
{
  _id: "ek62j23k",
  name: "Greek Salad",
  category: "Nutri-BowlCreations",
  price: 78,
  offerPrice: 73,
  image: ["https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/3/26/00f0e0c7-0fd7-4676-b8c5-8645312c2fa5_0f2fa68b-25f7-4cba-9c1f-90866a92ea0c.png_compressed"],
  description: [
    "Fresh cucumbers, tomatoes, olives, and feta cheese",
    "Seasoned with oregano and olive oil",
    "Perfect for a Mediterranean touch"
  ],
  createdAt: "2025-03-25T07:17:46.018Z",
  updatedAt: "2025-03-25T07:18:13.103Z",
  inStock: true
},
{
  _id: "ek63j34k",
  name: "Cobb Salad",
  category: "Nutri-BowlCreations",
  price: 79,
  offerPrice: 74,
  image: ["https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/8/27/0e1ba91d-5ea7-4723-8ac5-5c372d29a476_957e52a3-fe1f-400f-bf4a-0d454b30a695.JPG"],
  description: [
    "Loaded with grilled chicken, bacon, eggs, avocado, and blue cheese",
    "Served with a rich ranch or vinaigrette dressing",
    "Hearty and satisfying"
  ],
  createdAt: "2025-03-25T07:17:46.018Z",
  updatedAt: "2025-03-25T07:18:13.103Z",
  inStock: true
},
{
  _id: "ek64j45k",
  name: "Quinoa Salad",
  category: "Nutri-BowlCreations",
  price: 77,
  offerPrice: 72,
  image: ["https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/4/10/c70ac5d0-368b-47b7-b837-fc786432be01_5ed1a5b7-7392-4f28-822c-17cef20b9437.png_compressed"],
  description: [
    "Nutritious quinoa mixed with colorful veggies and herbs",
    "Tossed in a lemon vinaigrette",
    "Great for a protein-packed meal"
  ],
  createdAt: "2025-03-25T07:17:46.018Z",
  updatedAt: "2025-03-25T07:18:13.103Z",
  inStock: true
},
{
  _id: "ek65j56k",
  name: "Caprese Salad",
  category: "Nutri-BowlCreations",
  price: 76,
  offerPrice: 71,
  image: ["https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/8/24/bef8199d-74b5-4086-8a35-572b78ed8b96_38af3a54-8d21-4118-a97e-d128acb55245.JPG"],
  description: [
    "Fresh mozzarella, tomatoes, and basil",
    "Drizzled with olive oil and balsamic glaze",
    "A refreshing Italian classic"
  ],
  createdAt: "2025-03-25T07:17:46.018Z",
  updatedAt: "2025-03-25T07:18:13.103Z",
  inStock: true
},

  // Juices
  {
  _id: "ek66j67k",
  name: "Orange Juice",
  category: "Nature-sRefreshments",
  price: 550,
  offerPrice: 520,
  image: ["https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/8/22/191f4491-965d-4615-b743-6dd07b3450cd_57f2b3f3-fd94-42ba-b54b-8f4175bac641.JPG"],
  description: [
    "Freshly squeezed from ripe oranges",
    "Rich in Vitamin C and antioxidants",
    "Perfect for a refreshing start to your day"
  ],
  createdAt: "2025-03-25T07:17:46.018Z",
  updatedAt: "2025-03-25T07:18:13.103Z",
  inStock: true
},
{
  _id: "ek67j78k",
  name: "Apple Juice",
  category: "Nature-sRefreshments",
  price: 250,
  offerPrice: 230,
  image: ["https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/6/4/0efd1b32-118c-41aa-96d7-d0321c0f8933_5f18b56e-b094-43c3-ab58-e85b89f38a16.jpg"],
  description: [
    "Made from fresh, juicy apples",
    "Naturally sweet and delicious",
    "Great source of Vitamin C and antioxidants"
  ],
  createdAt: "2025-03-25T07:17:46.018Z",
  updatedAt: "2025-03-25T07:18:13.103Z",
  inStock: true
},
{
  _id: "ek68j89k",
  name: "Carrot Juice",
  category: "Nature-sRefreshments",
  price: 450,
  offerPrice: 420,
  image: ["https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/1/23/3c39beae-692e-4216-a38b-47defa0e7306_7cd5d578-262d-4036-8af0-4726153909f6.jpg"],
  description: [
    "Packed with Vitamin A and beta-carotene",
    "Supports eye and skin health",
    "Fresh and naturally sweet"
  ],
  createdAt: "2025-03-25T07:17:46.018Z",
  updatedAt: "2025-03-25T07:18:13.103Z",
  inStock: true
},
{
  _id: "ek69j90k",
  name: "Beetroot Juice",
  category: "Nature-sRefreshments",
  price: 120,
  offerPrice: 110,
  image: ["https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/1/23/4a8fb21c-647d-45a8-ae58-2e2e0137289b_704ee32b-eb72-4495-912a-df75f5717a6b.jpg"],
  description: [
    "Deep red juice with natural nitrates",
    "Boosts stamina and improves blood flow",
    "Rich in iron and folate"
  ],
  createdAt: "2025-03-25T07:17:46.018Z",
  updatedAt: "2025-03-25T07:18:13.103Z",
  inStock: true
},
{
  _id: "ek70j01k",
  name: "Pineapple Juice",
  category: "Nature-sRefreshments",
  price: 150,
  offerPrice: 140,
  image: ["https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/4a6f95da3456dd22f945b864254e0a1f"],
  description: [
    "Tropical and tangy flavor",
    "Rich in Vitamin C and bromelain",
    "Aids digestion and refreshes instantly"
  ],
  createdAt: "2025-03-25T07:17:46.018Z",
  updatedAt: "2025-03-25T07:18:13.103Z",
  inStock: true
},





  // Smoothies
  {
  _id: "bk01a24z",
  name: "Strawberry Banana Smoothie",
  category: "FruityChillSips",
  price: 40,
  offerPrice: 35,
  image: ["https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/3/19/4b78dd83-faef-464b-ab24-5936c12b4f21_669da816-7ea3-4535-973b-424ea783f9e9.jpg"],
  description: [
    "Creamy blend of strawberries and ripe bananas",
    "Rich in fiber and antioxidants",
    "Perfect for breakfast or post-workout energy"
  ],
  createdAt: "2025-03-25T07:17:46.018Z",
  updatedAt: "2025-03-25T07:18:13.103Z",
  inStock: true
},
{
  _id: "bk02b30y",
  name: "Mango Pineapple Smoothie",
  category: "FruityChillSips",
  price: 50,
  offerPrice: 45,
  image: ["https://cdn2.foodviva.com/static-content/food-images/smoothie-recipes/mango-pineapple-smoothie-recipe/mango-pineapple-smoothie-recipe.jpg"],
  description: [
    "Tropical mix of sweet mango and tangy pineapple",
    "Loaded with Vitamin C and natural enzymes",
    "A refreshing drink for hot days"
  ],
  createdAt: "2025-03-25T07:17:46.018Z",
  updatedAt: "2025-03-25T07:18:13.103Z",
  inStock: true
},
{
  _id: "bk03c31x",
  name: "Chocolate Protein Smoothie",
  category: "FruityChillSips",
  price: 350,
  offerPrice: 325,
  image: ["https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/e73d77126ac31b1d48b48343673fc8dc"],
  description: [
    "Rich chocolate flavor with added protein",
    "Perfect for muscle recovery",
    "Delicious and nutritious post-workout option"
  ],
  createdAt: "2025-03-25T07:17:46.018Z",
  updatedAt: "2025-03-25T07:18:13.103Z",
  inStock: true
},
{
  _id: "bk04d32w",
  name: "Green Detox Smoothie",
  category: "FruityChillSips",
  price: 45,
  offerPrice: 40,
  image: ["https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/a7e0341863b91cdc0f5fe499952d4553"],
  description: [
    "Blend of spinach, kale, apple, and lemon",
    "Supports detox and digestion",
    "Low-calorie and high in nutrients"
  ],
  createdAt: "2025-03-25T07:17:46.018Z",
  updatedAt: "2025-03-25T07:18:13.103Z",
  inStock: true
},
{
  _id: "bk05e33v",
  name: "Vanilla Almond Smoothie",
  category: "FruityChillSips",
  price: 100,
  offerPrice: 90,
  image: ["https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/dqewoqpxzdheugmokmhv"],
  description: [
    "Smooth and creamy vanilla flavor",
    "Blended with almonds for protein and richness",
    "Great for a sweet and healthy snack"
  ],
  createdAt: "2025-03-25T07:17:46.018Z",
  updatedAt: "2025-03-25T07:18:13.103Z",
  inStock: true
},


  // Ice-Creams
  // Ice-Creams
{
  _id: "in01f25u",
  name: "Vanilla Ice Cream",
  category: "FrozenTreats",
  price: 55,
  offerPrice: 50,
  image: ["https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/4/17/2971a4f3-4cf3-4dfd-9f56-5fd1be71310f_86b5ee18-9a92-4830-a6b5-9800d85c77da.jpg"],
  description: [
    "Classic vanilla flavor",
    "Smooth, creamy texture",
    "Perfect for any dessert pairing"
  ],
  createdAt: "2025-03-25T07:17:46.018Z",
  updatedAt: "2025-03-25T07:18:13.103Z",
  inStock: true
},
{
  _id: "in02g26t",
  name: "Chocolate Ice Cream",
  category: "FrozenTreats",
  price: 45,
  offerPrice: 40,
  image: ["https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/4/15/0ff6b5e2-404c-4380-83b7-ce4482dd8e72_5d5c8a7e-a9f3-43ca-a885-2095da2b3f11.jpg"],
  description: [
    "Rich and indulgent cocoa flavor",
    "Loved by all age groups",
    "Delightful treat on any day"
  ],
  createdAt: "2025-03-25T07:17:46.018Z",
  updatedAt: "2025-03-25T07:18:13.103Z",
  inStock: true
},
{
  _id: "in03h27s",
  name: "Strawberry Ice Cream",
  category: "FrozenTreats",
  price: 35,
  offerPrice: 30,
  image: ["https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/4/15/de64465d-4832-461a-8885-4087240dac06_fc8acf62-c3ca-4308-8867-7984bd3d54ce.jpg"],
  description: [
    "Sweet and fruity strawberry flavor",
    "Delightfully pink and refreshing",
    "Perfect for kids and berry lovers"
  ],
  createdAt: "2025-03-25T07:17:46.018Z",
  updatedAt: "2025-03-25T07:18:13.103Z",
  inStock: true
},
{
  _id: "in04i28r",
  name: "Mango Ice Cream",
  category: "FrozenTreats",
  price: 50,
  offerPrice: 45,
  image: ["https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/4/23/c5a45ae8-3944-454a-bec9-8518d413f6ac_c6c2e4e5-a0cc-4897-ace2-60bf67658bdd.jpeg"],
  description: [
    "Made from real mango pulp",
    "Tropical and refreshing",
    "Tastes like summer in a scoop"
  ],
  createdAt: "2025-03-25T07:17:46.018Z",
  updatedAt: "2025-03-25T07:18:13.103Z",
  inStock: true
},
{
  _id: "in05j29q",
  name: "Butterscotch Ice Cream",
  category: "FrozenTreats",
  price: 40,
  offerPrice: 35,
  image: ["https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/1/5/6f2297c1-2bcd-4287-a6f9-a53c3c6bb173_ef33be46-9e01-4974-97b3-6a18089da2ab.jpeg"],
  description: [
    "Crunchy caramel bits in creamy butterscotch",
    "Sweet and nutty flavor",
    "Perfect for dessert lovers"
  ],
  createdAt: "2025-03-25T07:17:46.018Z",
  updatedAt: "2025-03-25T07:18:13.103Z",
  inStock: true
},
];

export const dummyAddress = [
  {
    _id: "67b5b9e54ea97f71bbc196a0",
    userId: "67b5880e4d09769c5ca61644",
    firstName: "Great",
    lastName: "Stack",
    email: "user.greatstack@gmail.com",
    street: "Dabholkar Corner",
    city: "Kolhapur",
    state: "Maharashtra",
    zipcode: 123456,
    country: "IN",
    phone: "1234567890",
  },
];

export const dummyOrders = [
  {
    _id: "67e2589a8f87e63366786400",
    userId: "67b5880e4d09769c5ca61644",
    items: [
      {
        product: dummyProducts[3],
        quantity: 2,
        _id: "67e2589a8f87e63366786401",
      },
    ],
    amount: 89,
    address: dummyAddress[0],
    status: "Order Placed",
    paymentType: "Online",
    isPaid: true,
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
  },
  {
    _id: "67e258798f87e633667863f2",
    userId: "67b5880e4d09769c5ca61644",
    items: [
      {
        product: dummyProducts[0],
        quantity: 1,
        _id: "67e258798f87e633667863f3",
      },
      {
        product: dummyProducts[1],
        quantity: 1,
        _id: "67e258798f87e633667863f4",
      },
    ],
    amount: 43,
    address: dummyAddress[0],
    status: "Order Placed",
    paymentType: "COD",
    isPaid: false,
    createdAt: "2025-03-25T07:17:13.068Z",
    updatedAt: "2025-03-25T07:17:13.068Z",
  },
];
