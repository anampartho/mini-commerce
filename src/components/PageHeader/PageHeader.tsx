import { PageHeader } from "@/utils/interfaces";
import GoBack from "@/components/GoBack/GoBack";

const PageHeader = ({ children, title }: PageHeader) => {
  return (
    <header className="mb-10">
      <GoBack />
      <h1 className="font-bold text-3xl md:text-5xl mt-6 text-green-800">
        {title}
      </h1>
      {children}
    </header>
  );
};

export default PageHeader;
