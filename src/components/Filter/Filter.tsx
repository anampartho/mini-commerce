import { Filter } from "@/utils/interfaces";
import React from "react";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";

const Filter = ({ options, children }: Filter) => {
  return (
    <div className="mb-6 last:mb-0">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-bold text-green-800 uppercase">{children}</h3>
        <button>
          <LuChevronDown className="text-green-800" />
          {/* <LuChevronUp className="text-green-800" /> */}
        </button>
      </div>
      {options.map((option) => {
        console.log({ option });
        return (
          <div className="flex items-center mb-4" key={option.id}>
            <input
              id={option.id}
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor={option.id} className="ml-2 text-sm font-medium">
              {option.name}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default Filter;
