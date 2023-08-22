"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import Filter from "@/components/Filter/Filter";
import { initiate } from "@/redux/features/filter-slice";
import { useDispatch } from "react-redux";
import { AppDispatch, useMiniSelector } from "@/redux/store";

const filters = [
  {
    id: "categories",
    title: "Categories",
    options: [
      {
        id: "electronics",
        name: "electronics",
        title: "Electronics",
      },
      {
        id: "jewelery",
        name: "jewelery",
        title: "Jewelery",
      },
      {
        id: "mens-clothing",
        name: "men's clothing",
        title: "Men's Clothing",
      },
      {
        id: "womens-clothing",
        name: "women's clothing",
        title: "Women's Clothing",
      },
    ],
  },
];

const Sidebar = () => {
  // const [selectedFilters, setSelectedFilters] = useState([] as string[]);
  const dispatch = useDispatch<AppDispatch>();
  const selectedFilters = useMiniSelector((state) => state.filterSlice.filters);

  function handleFilterChange(e: ChangeEvent<HTMLInputElement>) {
    const name = e.target.name;
    const selectedFiltersCopy = [...selectedFilters] as string[];
    const indexOfCurrentFilter = selectedFilters.findIndex(
      (item) => item === name
    );

    if (indexOfCurrentFilter > -1) {
      selectedFiltersCopy.splice(indexOfCurrentFilter, 1);
    } else {
      selectedFiltersCopy.push(name);
    }

    dispatch(initiate(selectedFiltersCopy));
  }

  function clearFilterHandler() {
    dispatch(initiate([]));
  }

  return (
    <aside className="w-3/12">
      <header className="flex justify-between items-center mb-10">
        <h2 className="font-black uppercase text-3xl text-green-800">Filter</h2>
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
