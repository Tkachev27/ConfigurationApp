import { VNode } from '@core/interfaces'

export const initialVNode: VNode = {
    tag: 'div',
    attributes: { class: 'choiceOfFieldsOfActivity' },
    children: [
        { tag: 'h3', attributes: {}, children: 'Выберите сферу деятельности' },

        {
            tag: 'form',
            attributes: { name: 'fieldsOfActivity' },
            children: [
                {
                    tag: 'ul',
                    attributes: { class: 'choiceOfFieldsOfActivity__list' },
                    children: [
                        {
                            tag: 'li',
                            attributes: {
                                class: 'choiceOfFieldsOfActivity__field',
                            },
                            children: [
                                {
                                    tag: 'input',
                                    attributes: {
                                        id: 'example',
                                        type: 'checkbox',
                                        name: 'example',
                                        class: 'custom-checkbox',
                                        value: 'example',
                                    },
                                    children: [],
                                },
                                {
                                    tag: 'label',
                                    attributes: {
                                        for: 'example',
                                    },
                                    children: 'example решения',
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
}
