import { Layout } from "@/components/layout";
import style from '../styles/about.module.scss'
const About = () => {
  return <Layout content={Content()}></Layout>;
};
const Content = () => {
  return (
    <main
      className={`w-full md:w-11/12   lg:w-9/12 xl:w-8/12 m-auto bg-white mt-6 px-6 py-4 `}
    >
      <div className={style.about_html}>
        <h3 id="🖥️关于本站" className={`text-3xl font-bold`}>🖥️关于本站</h3>
        <p >
          本站是自己学习了<strong>React</strong>后，用<strong>React</strong>
          写的个人博客系统，包括<strong>博客展示页面</strong>和
          <strong>后台管理页面</strong>，现在看到的就是
          <strong>博客展示页面</strong>~
        </p>
        <p >
          主要整理、分享一些自己的学习笔记和心得，若有错误，欢迎大家指出、交流！
        </p>
        <p >
          ✅目前<strong>博客展示页面</strong>已成功升级<code>2.0</code>
          版本，样式基本保持原样，主要是逻辑代码进行了重构，优化了整体的性能😎。
        </p>
        <p >
          ❓<strong>后台管理页面</strong>
          使用的是vue3，<strong>目前</strong>
          还没有完善。
        </p>
        <p >🔖博客主要使用到的库如下：</p>
        <p >
          <strong>前端</strong>（博客展示页面）：
        </p>
        <ul>
          <li>
            主要技术栈为<code>react</code>+<code>hooks</code>+<code>TS</code>
          </li>
          <li>
            使用
            <a href="https://github.com/lzxjack/my-react" target="_blank" rel="noreferrer">
              nextjs
            </a>
            开发
          </li>
          <li>
            <code>AntD</code>组件库（自定义样式/按需导入）
          </li>
          {/*<li>*/}
          {/*  <code>ahooks</code>库提供常用的<code>hooks</code>*/}
          {/*</li>*/}
          <li>
            <code>axios</code>网络请求库
          </li>
          {/*<li>*/}
          {/*  <code>echarts</code>图标库绘制饼图*/}
          {/*</li>*/}
          <li>
            时间格式化工具<code>dayjs</code>
          </li>
          <li>
            <code>markdown</code>格式渲染工具<code>marked</code>
          </li>
          <li>
            代码高亮渲染工具<code>highlight.js</code>
          </li>
          <li>其他常用工具库等</li>
        </ul>
        <p>
          <strong>后端</strong>：
        </p>
        <p>后端使用腾讯云服务器，框架使用的是nestjs：</p>
        <ul>
          <li>用户管理：管理员登录、未登录访问</li>
          <li>数据库：存放管理员的博客数据</li>
        </ul>
        <p>
          <strong>其他</strong>：
        </p>
        <ul>
          <li>
            <code>eslint</code>规范代码风格
          </li>
          <li>
            <code>commitlint</code>保证<code>git commit</code>提交规范
          </li>
        </ul>
      </div>
    </main>
  );
};

export default About;
