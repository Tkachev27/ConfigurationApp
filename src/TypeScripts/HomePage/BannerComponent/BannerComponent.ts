import { Component } from '@core/Component'
import { VNode } from '@core/interfaces'
import { clone } from '@core/utils/VNode/clone'
import { initialVNode } from './initialVNode'

export class BannerComponent extends Component {
    activeNode: VNode

    constructor(dynamic: boolean, initialVnode = initialVNode) {
        super(dynamic)
        this.activeNode = clone(initialVnode)
    }

    init() {
        super.install(this.activeNode, this.parent)
    }
}
