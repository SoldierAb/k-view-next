import KView from 'k-view-next'
import 'k-view-next/lib/style'

import DemoBox from '../components/DemoBox.vue'

export default (app) => {
    app.component(DemoBox.name, DemoBox)
    app.use(KView)
    return app
}