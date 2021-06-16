import { Page } from '@core/Page'
import { StateManager } from '@core/StateManager'
import { ChoiceOfDurationOfRelevanceComponent } from './ChoiceOfDurationOfRelevanceComponent/ChoiceOfDurationOfRelevanceComponent'
import { ChoiceOfFieldsOfActivityComponent } from './ChoiceOfFieldsOfActivityComponent/ChoiceOfFieldsOfActivityComponent'
import { ChoiceOfProgramsComponent } from './ChoiceOfProgramsComponent/ChoiceOfProgramsComponent'
import { ConfigurationsListComponent } from './ConfigurationsListComponent/ConfigurationsListComponent'
import { OptimalConfiguration } from './OptimalConfiguration/OptimalConfigurationComponent'

export class ConfiguratorPage extends Page {
    componentList: Array<any> = []
    name: string

    constructor(name: string) {
        super(name)
        this.name = name
    }

    createComponents() {
        this.componentList = []
        this.componentList.push(new ConfigurationsListComponent(true))
        this.componentList.push(new ChoiceOfFieldsOfActivityComponent(true))

        this.componentList.push(new ChoiceOfDurationOfRelevanceComponent(true))
        this.componentList.push(new ChoiceOfProgramsComponent(true))

        this.componentList.push(new OptimalConfiguration(true))

        for (let i = 0; i < this.componentList.length; i++) {
            const data = StateManager.getDataFromStorage(`${this.name}-${i}`)
            if (data) {
                this.componentList[i].activeNode = data
            }
        }
    }
    componentInit() {
        let fieldAndDurationparentElement: HTMLElement =
            document.createElement('div')
        fieldAndDurationparentElement.setAttribute('class', 'fieldAndDuration')

        let listparentElement: HTMLElement = document.createElement('div')
        listparentElement.setAttribute('class', 'config-list')
        this.parent.appendChild(listparentElement)

        this.parent.appendChild(fieldAndDurationparentElement)

        for (let i = 0; i < this.componentList.length; i++) {
            if (i == 0) {
                this.componentList[i].setParametrs(
                    this.eventEmitter,
                    listparentElement,
                    `${this.name}-${i}`,
                    i
                )
            } else if (i == 1 || i == 2) {
                this.componentList[i].setParametrs(
                    this.eventEmitter,
                    fieldAndDurationparentElement,
                    `${this.name}-${i}`,
                    i
                )
            } else {
                this.componentList[i].setParametrs(
                    this.eventEmitter,
                    this.parent,
                    `${this.name}-${i}`,
                    i
                )
            }

            this.componentList[i].init()
        }
    }
}
