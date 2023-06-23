import Navigation from "@/components/Navigation";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <div className=" h-screen w-screen">
      <Navigation />
      {children}
    </div>
  );
};

export default DashboardLayout;
