import React from "react";
import Filter from "@/components/Filter/Filter";

const filters = [
  {
    id: "price",
    title: "Price",
    options: [
      {
        id: "default",
        name: "Default",
      },
    ],
  },
  {
    id: "price",
    title: "Price",
    options: [
      {
        id: "default",
        name: "Default",
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <aside className="w-3/12">
      <header className="flex justify-between items-center mb-10">
        <h2 className="font-bold uppercase text-3xl">Filter</h2>
        <button>Clear Filter</button>
      </header>
      {filters.map((filter) => {
        return (
          <Filter key={filter.id} options={filter.options}>
            {filter.title}
          </Filter>
        );
      })}
    </aside>
  );
};

export default Sidebar;
