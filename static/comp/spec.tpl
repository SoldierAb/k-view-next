import { mount } from '@vue/test-utils'
import %CompName% from '../index'

describe('%CompName%', () => {
    it('renders correctly', () => {
        const wrapper = mount({
            render() {
                return <%CompName%>Follow</%CompName%>
            },
        })
        expect(wrapper.html()).toMatchSnapshot()
    })
})