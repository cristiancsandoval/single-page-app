import { useRouter } from "next/router";

const DashboardSection = () => {
  const { query } = useRouter();
  const { section } = query;

  return (
    <div>
      <h2 className="text-white text-xl font-bold capitalize">{section}</h2>
    </div>
  );
};

export default DashboardSection;
