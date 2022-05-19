import type { App, Plugin } from 'vue'
import %CompName% from './%CompName%'

%CompName%.install = function (app: App) {
    app.component(%CompName%.name, %CompName%)
    return app
}

export default %CompName% as typeof %CompName% & Plugin
