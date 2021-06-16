import { VNode } from '@core/interfaces'

export const initialVNode: VNode = {
    tag: 'div',
    attributes: { class: 'config-list' },
    children: [
        {
            tag: 'ul',
            attributes: { class: 'config-list__list' },
            children: [
                {
                    tag: 'li',
                    attributes: {
                        class: 'config-list__field',
                        'data-type': 'configItem',
                    },
                    children: 'test',
                },
            ],
        },
    ],
}
