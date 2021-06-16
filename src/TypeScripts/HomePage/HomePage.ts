import { Page } from '@core/Page'
import { StateManager } from '@core/StateManager'

import { BannerComponent } from "./BannerComponent/BannerComponent"



export class HomePage extends Page {
    componentList: Array<any> = []
    name: string

    constructor(name: string) {
        super(name)
        this.name = name
    }

    createComponents() {
        this.componentList = []

        this.componentList.push(new BannerComponent(true))

     
        for (let i = 0; i < this.componentList.length; i++) {
            const data = StateManager.getDataFromStorage(`${this.name}-${i}`)
            if (data) {
                this.componentList[i].activeNode = data
            }
        }
    }
    componentInit() {
        super.componentInit(this.componentList)
    }
}
