import { NavBar } from "@/components/navBar";

export const Layout = (props: any) => {
  return (
    <>
      <NavBar></NavBar>
      {props.content}
    </>
  );
};
