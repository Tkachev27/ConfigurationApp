import { Component } from '@core/Component'
import { VNode } from '@core/interfaces'
import { initialVNode } from './initialVNode'

export class Navigation extends Component {
    activeNode: VNode

    constructor(dynamic: boolean, initialVnode = initialVNode) {
        super(dynamic)
        this.activeNode = JSON.parse(JSON.stringify(initialVnode))
    }

    init() {
        super.install(this.activeNode, this.parent)
        this.activeNode.$element.addEventListener('click', (event: any) => {
            if (event.target.dataset.type == 'openNav') {
                this.activeNode.children[1].attributes.class =
                    this.activeNode.children[1].attributes.class.replace(
                        'navigation-panel__content--hidden',
                        'navigation-panel__content--visible'
                    )
                this.activeNode.children[2].attributes.class =
                    this.activeNode.children[2].attributes.class.replace(
                        'navigation-panel__content--hidden',
                        'navigation-panel__content--visible'
                    )

                this.patch(this.activeNode)
            }
            if (event.target.dataset.type == 'closeNav') {
                this.activeNode.children[1].attributes.class =
                    this.activeNode.children[1].attributes.class.replace(
                        'navigation-panel__content--visible',
                        'navigation-panel__content--hidden'
                    )
                this.activeNode.children[2].attributes.class =
                    this.activeNode.children[2].attributes.class.replace(
                        'navigation-panel__content--visible',
                        'navigation-panel__content--hidden'
                    )

                this.patch(this.activeNode)
            }
        })
    }
}
