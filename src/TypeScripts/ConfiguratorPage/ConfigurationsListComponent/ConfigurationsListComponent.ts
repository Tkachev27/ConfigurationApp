import { Configuration } from '@/TypeScripts/shared/interfaces'
import { ConfigService } from '@/TypeScripts/shared/services/config.service'
import { Component } from '@core/Component'
import { VNode } from '@core/interfaces'
import { StateManager } from '@core/StateManager'
import { clone } from '@core/utils/VNode/clone'
import { initialVNode } from './initialVNode'

export class ConfigurationsListComponent extends Component {
    activeNode: VNode
    $configListItem
    configList

    constructor(dynamic: boolean, initialVnode = initialVNode) {
        super(dynamic)
        this.activeNode = clone(initialVnode)
        this.$configListItem = clone(this.activeNode.children[0].children[0])
    }

    async init() {
        this.configList = await ConfigService.getAll()
        this.activeNode.children[0].children = []

        this.configList.forEach((element) => {
            this.$configListItem.children = element.name ? element.name : ''
            this.$configListItem.attributes['data-type'] = element._id

            this.activeNode.children[0].children.push(
                clone(this.$configListItem)
            )
        })

        console.log(this.activeNode.children[0])

        super.install(this.activeNode, this.parent)
        this.activeNode.$element.addEventListener(
            'click',
            this.onChangeSelectedConfig
        )
        this.userEventEmitter.subscribe('updateConfigList', async () => {
            this.configList = await ConfigService.getAll()
            this.activeNode.children[0].children = []
            this.configList.forEach((element) => {
                this.$configListItem.children = element.name
                this.$configListItem.attributes['data-type'] = element._id
                this.activeNode.children[0].children.push(
                    clone(this.$configListItem)
                )
            })
            this.patch(this.activeNode)
        })
    }
    onChangeSelectedConfig = (event) => {
        console.log(this.configList[0]._id)

        this.userEventEmitter.emit(
            'choosenConfig',
            this.configList[
                this.configList.findIndex(
                    (p) => p._id == event.target.dataset.type
                )
            ]
        )
    }
}
