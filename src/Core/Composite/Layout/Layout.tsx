import React from "react";
import { Header, Footer } from "@/src/Core/index";
import { Layout } from "antd";

export type LayoutProps = {
  children: React.ReactNode;
};

const { Content } = Layout;

const LayoutPage: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <div>
      <Layout>
        <Header />
        <Content>
          <div>
            {children}
          </div>
        </Content>
        <Footer />
      </Layout>
    </div>
  );
};

export default LayoutPage;
