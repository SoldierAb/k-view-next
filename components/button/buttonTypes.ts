import type { ExtractPropTypes } from 'vue'

export type ButtonType = 'default' | 'primary'| 'success' | 'warning' | 'error' | 'confirm'

const buttonProps = () => ({
    type: String,
})

export type ButtonProps =  Partial<ExtractPropTypes<ReturnType<typeof buttonProps>>>;

export interface ButtonLocale {
    OkText: string;
    CancelText: string;
}


export default buttonProps