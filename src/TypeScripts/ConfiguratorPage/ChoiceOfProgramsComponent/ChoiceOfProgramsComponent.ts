import { Configuration, Program } from '@/TypeScripts/shared/interfaces'
import { ProgramsService } from '@/TypeScripts/shared/services/programs.service'
import { Component } from '@core/Component'
import { VNode } from '@core/interfaces'
import { StateManager } from '@core/StateManager'
import { clone } from '@core/utils/VNode/clone'
import { initialVNode } from './initialVNode'

export class ChoiceOfProgramsComponent extends Component {
    activeNode: VNode
    programs: Array<Program>
    formFileds: VNode
    fieldList: VNode

    exField: VNode

    constructor(dynamic: boolean, initialVnode = initialVNode) {
        super(dynamic)
        this.activeNode = clone(initialVnode)
        this.formFileds = this.activeNode.children[1]
        this.fieldList = clone(this.formFileds.children[0])

        this.exField = clone(this.formFileds.children[0].children[0])
        this.programs = ProgramsService.getPrograms()
    }

    init() {
        this.prepareInit()
        super.install(this.activeNode, this.parent)

        this.userEventEmitter.subscribe('fieldsOfActivity', (checkList) => {
            this.updateFields(checkList)
        })

        this.activeNode.$element.addEventListener(
            'change',
            this.onChangeSelectedPrograms
        )
        this.userEventEmitter.subscribe(
            'choosenConfig',
            (configuration: Configuration) => {
                if (configuration) {
                    const formElements =
                        document.forms['fieldsOfPrograms'].elements
                    let fields: any = new Set()

                    configuration.programs.forEach((prog) =>
                        fields.add(prog.type)
                    )

                    fields = Array.from(fields)

                    this.updateFields(fields)

                    for (let i = 0; i < formElements.length; i++) {
                        if (
                            configuration.programs.findIndex(
                                (p) => p.name == formElements[i].name
                            ) != -1
                        )
                            formElements[i].checked = true
                    }
                    this.onChangeSelectedPrograms()
                }
            }
        )
    }
    onChangeSelectedPrograms = () => {
        let checkList = []
        const formElements = document.forms['fieldsOfPrograms'].elements

        for (let i = 0; i < formElements.length; i++) {
            if (formElements[i].checked) checkList.push(formElements[i].value)
            else checkList.splice(i, 1)
        }

        this.userEventEmitter.emit('fieldsOfPrograms', checkList)
    }
    prepareInit() {
        this.formFileds.children = 'Сначала выберите сферы детельности'
    }
    updateFields = (fields: Array<string>) => {
        // let fieldName={ tag: 'h2', attributes: {}, children: 'words' }
        this.formFileds.children = []

        for (let field of fields) {
            this.fieldList.children = []

            for (let program of this.programs) {
                if (program.type == field) {
                    this.exField.children[0].attributes.id = program.name
                    this.exField.children[0].attributes.name = program.name
                    this.exField.children[0].attributes.value = program.name
                    this.exField.children[1].attributes.for = program.name

                    this.exField.children[1].children = program.name
                    this.fieldList.children.push(clone(this.exField))
                }
            }
            this.formFileds.children.push(clone(this.fieldList))
        }
        this.patch(this.activeNode)
    }
}
