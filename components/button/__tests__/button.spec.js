import { mount } from '@vue/test-utils'
import Button from '../index'

describe('Button', () => {
    it('renders correctly', () => {
        const wrapper = mount({
            render() {
                return <Button>Follow</Button>
            },
        })
        expect(wrapper.html()).toMatchSnapshot()
    })

    it('click event should be called correctly', () => {
        const fn = jest.fn()
        const wrapper = mount({
            render (){
                return <Button onClick={fn}>点击</Button>
            },
        })
        wrapper.trigger('click')
        expect(fn).toBeCalled()
        wrapper.trigger('click')
        expect(fn).toBeCalledTimes(2)
    })
})