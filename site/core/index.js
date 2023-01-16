import KView from 'k-view-next'
import 'k-view-next/style'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';

import { CopyOutlined } from '@ant-design/icons-vue'

import DemoBox from '../components/DemoBox.vue'

export default (app) => {
    app.component(CopyOutlined.name, CopyOutlined)
    app.component(DemoBox.name, DemoBox)
    app.use(KView)
    app.use(Antd)
    return app
}