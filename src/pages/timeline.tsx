import { Layout } from "@/components/Layout";
import { Timeline } from "antd";
import { SmileOutlined } from "@ant-design/icons";

const def = () => {
  return <Layout content={FC()}></Layout>;
};

const FC = () => {
  return (
    <main className={`w-3/5 p-6  bg-white m-auto mt-3 `}>
        <h3 className={`mb-10 text-4xl font-bold text-center text-cyan-400`}>日志</h3>
      <Timeline
        items={[
          {
            children: (
              <>
                <div className={`text-base text-gray-500 font-bold`}>2023-02-11</div>
                <p
                  className={`bg-slate-500 rounded w-96 shadow-2xl text-white p-3 mt-2`}
                >
                 添加日志页面和关于页面
                </p>
              </>
            ),
          },
          {
            children: (
              <>
                <div className={`text-base text-gray-500 font-bold`}>2022-11-06</div>
                <p
                  className={`bg-slate-500 rounded w-96 shadow-2xl text-white p-3 mt-2`}
                >
                  博客上线
                </p>
              </>
            ),
          },
        ]}
      />
    </main>
  );
};

export default def;
