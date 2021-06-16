import { Configuration } from '@/TypeScripts/shared/interfaces'
import { Component } from '@core/Component'
import { VNode } from '@core/interfaces'
import { StateManager } from '@core/StateManager'
import { initialVNode } from './initialVNode'

export class ChoiceOfDurationOfRelevanceComponent extends Component {
    activeNode: VNode

    constructor(dynamic: boolean, initialVnode = initialVNode) {
        super(dynamic)
        this.activeNode = JSON.parse(JSON.stringify(initialVnode))
    }

    init() {
        super.install(this.activeNode, this.parent)
        this.activeNode.$element.addEventListener(
            'change',
            this.onChangeDurationOfRelevance
        )
        this.userEventEmitter.subscribe(
            'choosenConfig',
            (configuration: Configuration) => {
                if (configuration) {
                    document.forms['durationOfRelevance'].elements[0].value =
                        configuration.revelance
                    document.forms['durationOfRelevance'].elements[1].value =
                        configuration.revelance
                    this.onChangeDurationOfRelevance()
                }
            }
        )
    }
    onChangeDurationOfRelevance = () => {
        this.userEventEmitter.emit(
            'durationOfRelevance',
            document.forms['durationOfRelevance'].elements[0].value
        )
    }
}
