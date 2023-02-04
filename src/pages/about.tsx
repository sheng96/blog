import { Layout } from "@/components/Layout";

const About =()=> {
  return <Layout content={Content()}></Layout>;
};
const Content=()=>{
  return <main className={`w-full sm:w-10/12 lg:w-8/12 m-auto bg-white mt-6 p-3 h-96`}>
    <h2 className={`text-center font-bold text-2xl`}>关于</h2>
    <p className={`mt-4`}>这可项目正在开发中，很多样式还没有确定下来</p>
    <p>需要参考一下别人的网站</p>
  </main>
}

export default About
