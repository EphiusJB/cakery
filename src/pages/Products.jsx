import React from "react";

const products = [
  {
    category: "Cakes",
    items: [
      {
        name: "Chocolate Fudge Cake",
        description: "Rich chocolate sponge with silky fudge frosting.",
        price: "K150",
      },
      {
        name: "Red Velvet Cake",
        description: "Moist red velvet layers with cream cheese icing.",
        price: "K160",
      },
    ],
  },
  {
    category: "Cupcakes",
    items: [
      {
        name: "Vanilla Swirl (Box of 6)",
        description: "Classic vanilla cupcakes with buttercream swirls.",
        price: "K80",
      },
      {
        name: "Choco-Berry (Box of 6)",
        description: "Chocolate base with berry topping and drizzle.",
        price: "K90",
      },
    ],
  },
  {
    category: "Doughnuts & Muffins",
    items: [
      {
        name: "Assorted Doughnuts (Dozen)",
        description: "A mix of glazed, sprinkled, and filled.",
        price: "K120",
      },
      {
        name: "Blueberry Muffins (Box of 4)",
        description: "Fluffy, fresh-baked muffins with berries inside.",
        price: "K70",
      },
    ],
  },
];

export default function Products() {
  return (
    <section className="bg-cream text-chocolate py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-10">
          Mika’s Cakery Menu
        </h2>

        {products.map((section, index) => (
          <div key={index} className="mb-10">
            <h3 className="text-2xl font-semibold border-b-2 border-orangeAccent mb-4 pb-1">
              {section.category}
            </h3>
            <ul className="space-y-6">
              {section.items.map((item, i) => (
                <li
                  key={i}
                  className="flex justify-between flex-col md:flex-row gap-2"
                >
                  <div>
                    <p className="font-bold text-lg">{item.name}</p>
                    <p className="text-chocolate/80 text-sm">
                      {item.description}
                    </p>
                  </div>
                  <p className="text-orangeAccent font-medium text-right md:text-left">
                    {item.price}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}


/*
const products = [
    {
      name: "Chocolate Fudge Cake",
      description: "Rich, moist chocolate cake with a silky fudge frosting.",
      price: "K150",
      image: "https://source.unsplash.com/400x400/?chocolate,cake",
    },
    {
      name: "Vanilla Cupcake Box (6)",
      description: "Soft vanilla cupcakes with buttercream swirl.",
      price: "K80",
      image: "https://source.unsplash.com/400x400/?vanilla,cupcake",
    },
    {
      name: "Red Velvet Cheesecake",
      description: "Creamy red velvet base with a cheesecake heart.",
      price: "K180",
      image: "https://source.unsplash.com/400x400/?redvelvet,cake",
    },
    {
      name: "Assorted Doughnuts (Dozen)",
      description: "A box of fluffy, glazed and sprinkled doughnuts.",
      price: "K120",
      image: "https://source.unsplash.com/400x400/?doughnut,box",
    },
  ];
  
  export default function Products() {
    return (
      <section id="products" className="bg-cream py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-chocolate mb-10">
            Products & Pricing
          </h2>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white shadow rounded-xl overflow-hidden flex flex-col"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-56 w-full object-cover"
                />
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-chocolate mb-1">
                      {product.name}
                    </h3>
                    <p className="text-gray-700 text-sm mb-2">
                      {product.description}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-orangeAccent font-semibold text-lg">
                      {product.price}
                    </span>
                    <button className="bg-orangeAccent text-white px-4 py-2 rounded hover:bg-orangeAccent/90 transition">
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  */

  /** 
   * This component displays a list of products with their details and pricing.
   */