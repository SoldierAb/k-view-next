import { mount } from '@vue/test-utils'
import Button from '../index'

describe('KButton', () => {
    it('renders correctly', () => {
        const wrapper = mount({
            render() {
                return <Button>Follow</Button>;
            },
        });
        expect(wrapper.html()).toMatchSnapshot();
    });
})