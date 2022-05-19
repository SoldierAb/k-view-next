import type { ExtractPropTypes } from 'vue'

const %lowCompName%Props = () => ({
    type: String,
})

export type %CompName%Props =  Partial<ExtractPropTypes<ReturnType<typeof %lowCompName%Props>>>;

export interface %CompName%Locale {
    text: string;
}

export default %lowCompName%Props