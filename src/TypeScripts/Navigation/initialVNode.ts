import { VNode } from '@core/interfaces'

export const initialVNode: VNode = {
    children: [
        {
            children: [
                {
                    children: [],
                    tag: 'i',
                    attributes: {
                        class: 'fas fa-bars',
                        'data-type': 'openNav',
                    },
                },
                {
                    tag: 'a',
                    attributes: {
                        href: '/',
                        class: 'logo__link',
                        'data-link': 'true',
                    },
                    children: 'LOGO',
                },
            ],
            tag: 'div',
            attributes: { class: 'navigation-panel__menu' },
        },

        {
            tag: 'div',
            attributes: {
                class: 'navigation-panel__content navigation-panel__content--hidden',
            },
            children: [
                {
                    children: [
                        {
                            children: 'LOGO',
                            tag: 'a',
                            attributes: {
                                href: '/',
                                class: 'logo__link',
                                'data-link': 'true',
                            },
                        },
                    ],
                    tag: 'div',
                    attributes: {
                        class: 'logo navigation-panel__content--logo',
                    },
                },
                {
                    children: [
                        {
                            children: [],
                            tag: 'i',
                            attributes: {
                                class: 'fas fa-times',
                                'data-type': 'closeNav',
                            },
                        },
                    ],
                    tag: 'div',
                    attributes: {
                        class: 'navigation-panel__close',
                    },
                },
                {
                    children: [
                        {
                            children: [
                                {
                                    children: 'Главная',
                                    tag: 'a',
                                    attributes: {
                                        href: '/',
                                        'data-link': 'true',
                                    },
                                },
                            ],
                            tag: 'li',
                            attributes: { class: 'navigation-panel__link' },
                        },
                        {
                            children: [
                                {
                                    children: 'Конфигуратор',
                                    tag: 'a',
                                    attributes: {
                                        href: '/configurator',
                                        'data-link': 'true',
                                    },
                                },
                            ],
                            tag: 'li',
                            attributes: { class: 'navigation-panel__link' },
                        },
                        // {
                        //     children: [
                        //         {
                        //             children: 'Каталог',
                        //             tag: 'a',
                        //             attributes: {
                        //                 href: '/catalog',
                        //                 'data-link': 'true',
                        //             },
                        //         },
                        //     ],
                        //     tag: 'li',
                        //     attributes: { class: 'navigation-panel__link' },
                        // },
                        {
                            children: [
                                {
                                    children: 'О Компании',
                                    tag: 'a',
                                    attributes: {
                                        href: '/about',
                                        'data-link': 'true',
                                    },
                                },
                            ],
                            tag: 'li',
                            attributes: { class: 'navigation-panel__link' },
                        },
                    ],
                    tag: 'ul',
                    attributes: { class: 'navigation-panel__links' },
                },
            ],
        },
        {
            tag: 'div',
            attributes: {
                class: 'navigation-panel__empty-close navigation-panel__content--hidden ',
                'data-type': 'closeNav',
            },
            children: [],
        },
    ],
    tag: 'div',
    attributes: { class: 'navigation-panel' },
}
