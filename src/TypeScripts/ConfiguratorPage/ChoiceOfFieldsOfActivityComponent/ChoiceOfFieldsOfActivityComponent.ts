import { Configuration } from '@/TypeScripts/shared/interfaces'
import { ProgramsService } from '@/TypeScripts/shared/services/programs.service'
import { Component } from '@core/Component'
import { VNode } from '@core/interfaces'
import { StateManager } from '@core/StateManager'
import { clone } from '@core/utils/VNode/clone'
import { initialVNode } from './initialVNode'

export class ChoiceOfFieldsOfActivityComponent extends Component {
    activeNode: VNode
    fields: Array<string>

    constructor(dynamic: boolean, initialVnode = initialVNode) {
        super(dynamic)
        this.activeNode = clone(initialVnode)
        this.fields = ProgramsService.getProgramTypes()
    }

    init() {
        this.prepareInit()

        super.install(this.activeNode, this.parent)

        this.activeNode.$element.addEventListener(
            'change',
            this.onChangeFieldsOfActivity
        )
        this.userEventEmitter.subscribe(
            'choosenConfig',
            (configuration: Configuration) => {
                let fields: any = new Set()
                if (configuration) {
                    configuration.programs.forEach((prog) =>
                        fields.add(prog.type)
                    )

                    fields = Array.from(fields)
                    const formElements =
                        document.forms['fieldsOfActivity'].elements

                    for (let i = 0; i < formElements.length; i++) {
                        console.log(formElements[i])

                        if (
                            fields.findIndex(
                                (p) => p == formElements[i].name
                            ) != -1
                        )
                            formElements[i].checked = true
                    }
                    this.onChangeFieldsOfActivity()
                }
            }
        )
    }

    onChangeFieldsOfActivity = () => {
        let checkList = []
        const formElements = document.forms['fieldsOfActivity'].elements

        for (let i = 0; i < formElements.length; i++) {
            if (formElements[i].checked) checkList.push(formElements[i].value)
            else checkList.splice(i, 1)
        }
        this.userEventEmitter.emit('fieldsOfActivity', checkList)
    }

    prepareInit = () => {
        let fieldsList = this.activeNode.children[1].children[0]

        let exField = clone(fieldsList.children[0])

        fieldsList.children = []

        for (let field of this.fields) {
            exField.children[0].attributes.id = field
            exField.children[0].attributes.name = field
            exField.children[0].attributes.value = field
            exField.children[1].attributes.for = field
            exField.children[1].children = field
            fieldsList.children.push(clone(exField))
        }
    }
}
