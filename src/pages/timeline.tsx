import { Layout } from "@/components/Layout";
import { ClockCircleOutlined } from '@ant-design/icons';
import { Timeline } from 'antd';
import * as domain from "domain";

const def =()=> {
    return <Layout content={FC()}></Layout>;
};

const FC=()=>{
    return <main className={`w-fit mt-3`}>
        <Timeline mode="left">
            <Timeline.Item>2015-09-01</Timeline.Item>
            <Timeline.Item color="green">Solve initial network problems 2015-09-01</Timeline.Item>
            <Timeline.Item label={<span>111111</span>} position={'left'}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                beatae vitae dicta sunt explicabo.
            </Timeline.Item>
            <Timeline.Item color="red">Network problems being solved 2015-09-01</Timeline.Item>
            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
            <Timeline.Item >
                Technical testing 2015-09-01
            </Timeline.Item>
        </Timeline>
    </main>
}

export default def
