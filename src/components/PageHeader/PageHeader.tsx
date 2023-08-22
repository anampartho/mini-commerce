import React from "react";
import GoBack from "@/components/GoBack/GoBack";
import { PageHeader } from "@/utils/interfaces";

const PageHeader = ({ children, title }: PageHeader) => {
  return (
    <header className="mb-10">
      <GoBack />
      <h1 className="font-bold text-5xl mt-6">{title}</h1>
      {children}
    </header>
  );
};

export default PageHeader;
