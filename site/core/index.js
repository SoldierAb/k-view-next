import KView from 'k-view-next'
import 'k-view-next/es/style'

export default (app)=>{
    app.use(KView)
    return app
}