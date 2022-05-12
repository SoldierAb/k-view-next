import ConfigProvider from './config-provider'
import Button from './button'


export {
    ConfigProvider,
    Button,
}

export interface KViewComponents {
    ConfigProvider: typeof ConfigProvider;
    Button: typeof Button;
}