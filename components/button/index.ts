import type { App, Plugin } from 'vue'
import Button from './Button'
import ButtonGroup from './ButtonGroup'

Button.install = function (app: App) {
    app.component(Button.name, Button)
    app.component(ButtonGroup.name, ButtonGroup)
    return app
}

export { ButtonGroup }

export default Button as typeof Button & Plugin & typeof ButtonGroup
