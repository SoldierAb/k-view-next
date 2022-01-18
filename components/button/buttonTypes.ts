import { ExtractPropTypes } from 'vue'

const buttonProps = () => ({
    type: String
})

export type ButtonProps =  Partial<ExtractPropTypes<ReturnType<typeof buttonProps>>>;

export default buttonProps