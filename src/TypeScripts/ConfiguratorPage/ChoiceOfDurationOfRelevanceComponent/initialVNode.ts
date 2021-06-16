import { VNode } from '@core/interfaces'

export const initialVNode: VNode = {
    tag: 'div',
    attributes: { class: 'choiceOfFieldsOfActivity' },
    children: [
        {
            tag: 'form',
            attributes: { name: 'durationOfRelevance' },
            children: [
                {
                    tag: 'input',
                    attributes: {
                        id: 'durationIn',
                        type: 'range',
                        name: 'durationIn',
                        min: '1',
                        max: '5',
                        oninput: 'durationOut.value = durationIn.value',
                        value: 1,
                    },
                    children: [],
                },
                {
                    tag: 'label',
                    attributes: {
                        for: 'durationIn',
                    },
                    children: 'g',
                },
                {
                    tag: 'p',
                    attributes: {},
                    children: 'Перспектива актуальности сборки (лет):',
                },
                {
                    tag: 'output',
                    attributes: {
                        name: 'durationOut',
                        id: 'durationOut',
                    },
                    children: 1,
                },
                {
                    tag: 'label',
                    attributes: {
                        for: 'durationOut',
                    },
                    children: '',
                },
            ],
        },
    ],
}
