import BLOG from "blog.config";
import { LayoutBase } from "./LayoutBase";
import React from "react";
import style from "../styles/about.module.scss";
import { Tag } from "antd";
import Card from "@/themes/components/Card";

export const LayoutAbout = (props: any) => {
  return (
    <LayoutBase {...props}>
      <Card className="w-full">
        <div className={`px-6 py-8`}>
            <div className={style.person}>
                <h3 className={`text-3xl font-bold`}>关于我</h3>
                <p className={`mt-6`}>
                    <Tag color="#2db7f5">当前位置</Tag>
                    <span>广州</span>
                </p>
                <p className={`mt-3`}>
                    <Tag color="#87d068">关于工作</Tag>
                    <span>前端开发工程师</span>
                </p>
            </div>

            <div className={style.about_html+` mt-10`}>
                <h3 id="关于本站" className={`text-3xl font-bold`}>
                    关于本站
                </h3>
                <p >
                    本站是自己学习了<strong>React</strong>后，用<strong>React</strong>
                    写的个人博客系统，包括<strong>博客展示页面</strong>和
                    <strong>后台管理页面</strong>，现在看到的就是
                    <strong>博客展示页面</strong>~
                </p>
                <p>
                    主要整理、分享一些自己的学习笔记和心得，若有错误，欢迎大家指出、交流！
                </p>
                <p>
                    目前<strong>博客展示页面</strong>已成功部署
                </p>
                <p>
                    <strong>后台管理页面</strong>
                    使用的是vue3，<strong>目前</strong>
                    仅仅有发布和删除功能。
                </p>
                <p>博客主要使用到的库如下：</p>
                <p>
                    <strong>前端</strong>（博客展示页面）：
                </p>
                <ul>
                    <li>
                        使用
                        <code>
                            <a
                                href="https://github.com/lzxjack/my-react"
                                target="_blank"
                                rel="noreferrer"
                            >
                                nextjs
                            </a>
                        </code>
                        开发
                    </li>
                    <li>
                        <code>AntD</code>组件库（自定义样式/按需导入）
                    </li>
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
        </div>
      </Card>
    </LayoutBase>
  );
};
