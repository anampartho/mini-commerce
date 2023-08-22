import { AppDispatch } from "@/redux/store";
import React, { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { initiate } from "@/redux/features/sortBy-slice";

const SortingMenu = () => {
  const dispatch = useDispatch<AppDispatch>();
  function sortByHandler(e: ChangeEvent<HTMLSelectElement>) {
    dispatch(initiate(e.target.value));
  }
  return (
    <div className="flex items-center mb-10 gap-1">
      <label htmlFor="countries" className="block text-sm font-medium basis-14">
        Sort By:
      </label>
      <select
        id="countries"
        className="text-sm focus:ring-blue-500 focus:border-blue-500 block  p-2 bg-transparent"
        onChange={sortByHandler}
        defaultValue="none"
      >
        <option value="none" className="uppercase">
          None
        </option>
        <option value="alphabet-ascending" className="uppercase">
          Alphabetically: A-Z
        </option>
        <option value="alphabet-descending" className="uppercase">
          Alphabetically: Z-A
        </option>
        <option value="price-ascending" className="uppercase">
          Price: Low to High
        </option>
        <option value="price-descending" className="uppercase">
          Price: Hight to Low
        </option>
      </select>
    </div>
  );
};

export default SortingMenu;
