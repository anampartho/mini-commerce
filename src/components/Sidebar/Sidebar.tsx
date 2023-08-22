"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import Filter from "@/components/Filter/Filter";

const filters = [
  {
    id: "categories",
    title: "Categories",
    options: [
      {
        id: "electronics",
        name: "Electronics",
      },
      {
        id: "jewelery",
        name: "Jewelery",
      },
      {
        id: "mens-clothing",
        name: "Men's Clothing",
      },
      {
        id: "womens-clothing",
        name: "Women's Clothing",
      },
    ],
  },
];

const Sidebar = () => {
  const [selectedFilters, setSelectedFilters] = useState([] as string[]);

  function handleFilterChange(e: ChangeEvent<HTMLInputElement>) {
    const id = e.target.id;
    const indexOfCurrentId = selectedFilters.findIndex((item) => item === id);
    const selectedFiltersCopy = [...selectedFilters] as string[];

    if (indexOfCurrentId > -1) {
      selectedFiltersCopy.splice(indexOfCurrentId, 1);
    } else {
      selectedFiltersCopy.push(id);
    }

    setSelectedFilters(selectedFiltersCopy);
  }

  return (
    <aside className="w-3/12">
      <header className="flex justify-between items-center mb-10">
        <h2 className="font-black uppercase text-3xl text-green-800">Filter</h2>
        <button>Clear Filter</button>
      </header>
      {filters.map((filter) => {
        return (
          <Filter
            key={filter.id}
            options={filter.options}
            onChange={handleFilterChange}
          >
            {filter.title}
          </Filter>
        );
      })}
    </aside>
  );
};

export default Sidebar;
