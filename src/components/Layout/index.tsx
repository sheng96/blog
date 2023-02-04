import { NavBar } from "@/components/navBar";
import { FloatButton } from 'antd';
export const Layout = (props: any) => {
  return (
    <>
      <NavBar></NavBar>
      {props.content}
        <FloatButton.BackTop />
    </>
  );
};
