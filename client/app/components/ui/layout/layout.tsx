import { Meta } from "@/utils/meta";
import { IMeta } from "@/utils/meta.interface";
import { FC, PropsWithChildren } from "react";
import Header from "@/ui/layout/header/header";

const Layout: FC<PropsWithChildren<IMeta>> = ({ children, ...meta }) => {
  return (
    <div>
      <Meta {...meta} />
      <div>
        <Header />
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
