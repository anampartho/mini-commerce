"use client";
import React, { ChangeEvent } from "react";
import Filter from "@/components/Filter/Filter";
import { initiate } from "@/redux/features/filter-slice";
import { useDispatch } from "react-redux";
import { AppDispatch, useMiniSelector } from "@/redux/store";
import UserIcons from "../UserIcons/UserIcons";
import Logo from "../Logo/Logo";

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
  const sidebarOpen = useMiniSelector((state) => state.sidebarSlice.open);

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
    <aside
      className={`fixed z-10 translate-x-[-100%] left-0 top-0 w-[80%] py-5 px-10 h-[100%] ${
        sidebarOpen ? "translate-x-[0] bg-white" : ""
      } md:block md:relative md:bg-[unset] md:p-0 transition-[transform,background-color] md:w-3/12 md:translate-x-[0]`}
    >
      <Logo className="md:hidden mb-10 block" />
      <header className="flex justify-between items-center mb-5 md:mb-10">
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
      <UserIcons className="md:hidden mt-10 justify-start" />
    </aside>
  );
};

export default Sidebar;
