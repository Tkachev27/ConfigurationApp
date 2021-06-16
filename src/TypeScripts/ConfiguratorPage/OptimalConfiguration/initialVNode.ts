import { VNode } from '@core/interfaces'

export const initialVNode: VNode = {
    tag: 'div',
    attributes: { class: 'config' },
    children: [
        { tag: 'h3', attributes: {}, children: 'Конфигурация' },
        {
            tag: 'form',
            attributes: { name: 'nameOfConfiguration', class: 'nameForm' },
            children: [
                {
                    tag: 'input',
                    attributes: {
                        id: 'configName',
                        type: 'text',

                        name: 'configName',
                    },
                    children: [],
                },
                {
                    tag: 'span',
                    attributes: { class: 'bar' },
                    children: '',
                },
                {
                    tag: 'span',
                    attributes: { class: 'highlight' },
                    children: '',
                },
                {
                    tag: 'label',
                    attributes: { for: 'configName' },
                    children: 'Название сборки :',
                },
            ],
        },
        {
            tag: 'div',
            attributes: { class: 'config__List' },
            children: [
                {
                    tag: 'div',
                    attributes: { class: 'config__item' },
                    children: [
                        {
                            tag: 'p',
                            attributes: {},
                            children: 'Процессор:',
                        },
                        {
                            tag: 'p',
                            attributes: { 'data-type': 'cpu' },
                            children: 'Optimal',
                        },
                    ],
                },
                {
                    tag: 'div',
                    attributes: { class: 'config__item' },
                    children: [
                        {
                            tag: 'p',
                            attributes: {},
                            children: 'Видеокарта:',
                        },
                        {
                            tag: 'p',
                            attributes: { 'data-type': 'gpu' },
                            children: 'Optimal',
                        },
                    ],
                },
                {
                    tag: 'div',
                    attributes: { class: 'config__item' },
                    children: [
                        {
                            tag: 'p',
                            attributes: {},
                            children: 'ОЗУ:',
                        },
                        {
                            tag: 'p',
                            attributes: { 'data-type': 'ram' },
                            children: 'Optimal',
                        },
                    ],
                },
                {
                    tag: 'div',
                    attributes: { class: 'config__item' },
                    children: [
                        {
                            tag: 'p',
                            attributes: {},
                            children: 'ПЗУ:',
                        },
                        {
                            tag: 'p',
                            attributes: { 'data-type': 'memory' },
                            children: 'Optimal',
                        },
                    ],
                },
                {
                    tag: 'div',
                    attributes: { class: 'config__item' },
                    children: [
                        {
                            tag: 'p',
                            attributes: {},
                            children: 'Цена:',
                        },
                        {
                            tag: 'p',
                            attributes: { 'data-type': 'cost' },
                            children: 'Optimal',
                        },
                    ],
                },
            ],
        },
        {
            children: 'Сохранить',
            tag: 'button',
            attributes: { class: 'btn', 'data-type': 'saveButton' },
        },
    ],
}
