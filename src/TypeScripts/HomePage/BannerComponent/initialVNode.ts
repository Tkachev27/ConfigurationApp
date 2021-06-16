import { VNode } from '@core/interfaces'

export const initialVNode: VNode = {
    children: [
        {
            children: [
                {
                    children: [
                        {
                            children: 'Собери',
                            tag: 'p',
                            attributes: {
                                class: 'banner__text__item1',
                            },
                        },
                        {
                            children: 'Свой',
                            tag: 'p',
                            attributes: {
                                class: 'banner__text__item2',
                            },
                        },
                        {
                            children: 'Супер',
                            tag: 'p',
                            attributes: {
                                class: 'banner__text__item3',
                            },
                        },
                        {
                            children: 'Компьютер',
                            tag: 'p',
                            attributes: {
                                class: 'banner__text__item4',
                            },
                        },
                    ],
                    tag: 'div',
                    attributes: { class: 'banner__text' },
                },
                {
                    children: [
                        {
                            children: [],
                            tag: 'img',
                            attributes: {
                                src: '/src/Images/pc.png',
                                alt: '',
                            },
                        },
                    ],
                    tag: 'div',
                    attributes: { class: 'banner__img' },
                },
            ],
            tag: 'div',
            attributes: { class: 'banner__wrapper' },
        },
        {
            children: [
                {
                    children: 'Конфигурировать',
                    tag: 'a',
                    attributes: {
                        href: '/configurator',
                        class: 'logo__link',
                        'data-link': 'true',
                    },
                },
            ],
            tag: 'button',
            attributes: { class: 'btn' },
        },
    ],
    tag: 'div',
    attributes: { class: 'banner' },
}
