import {
    Configuration,
    CPU,
    GPU,
    Memory,
    Program,
    RAM,
} from '@/TypeScripts/shared/interfaces'
import { ConfigService } from '@/TypeScripts/shared/services/config.service'
import { ProgramsService } from '@/TypeScripts/shared/services/programs.service'
import { Component } from '@core/Component'
import { VNode } from '@core/interfaces'
import { StateManager } from '@core/StateManager'
import { clone } from '@core/utils/VNode/clone'
import { initialVNode } from './initialVNode'

export class OptimalConfiguration extends Component {
    activeNode: VNode
    programs: Array<Program>
    cpuList: Array<CPU>
    gpuList: Array<GPU>
    ramList: Array<RAM>
    memoryList: Array<Memory>
    checkList: Array<string> = []
    relavence: number = 1
    id
    configuration: Configuration = {
        programs: [],
    }
    config
    constructor(dynamic: boolean, initialVnode = initialVNode) {
        super(dynamic)
        this.activeNode = clone(initialVnode)
        this.config = clone(this.activeNode.children[2])
        this.programs = ProgramsService.getPrograms()
        this.cpuList = ProgramsService.getCPU()
        this.gpuList = ProgramsService.getGPU()
        this.ramList = ProgramsService.getRAM()
        this.memoryList = ProgramsService.getMemory()
    }

    init() {
        if (this.configuration._id) {
            this.configuration = StateManager.getDataFromStorage(
                this.configuration._id
            )
            //отрисовать конфиг
        } else {
            this.activeNode.children[2].children =
                'Сначала ваберети необходимые программы'
        }

        super.install(this.activeNode, this.parent)

        this.userEventEmitter.subscribe(
            'fieldsOfPrograms',
            (checkList: Array<string>) => {
                this.checkList = checkList

                this.showConfiguration()
            }
        )
        this.userEventEmitter.subscribe(
            'durationOfRelevance',
            (relavence: number) => {
                this.relavence = relavence
                this.showConfiguration()
            }
        )
        this.userEventEmitter.subscribe(
            'choosenConfig',
            (configuration: Configuration) => {
                if (configuration) {
                    this.configuration = configuration
                    this.showConfiguration()
                }
            }
        )

        this.activeNode.$element.addEventListener('click', this.onSaveConfig)
        this.activeNode.$element.addEventListener('keyup', this.onAddName)
    }
    onAddName = () => {
        this.configuration.name =
            document.forms['nameOfConfiguration'].elements[0].value
    }
    onSaveConfig = (event) => {
        if (event.target.dataset.type == 'saveButton')
            if (this.id) this.configuration._id = this.id
        ConfigService.update(this.configuration).then((config) => {
            this.userEventEmitter.emit('updateConfigList')

            console.log('created', config)
        })
    }

    showConfiguration = () => {
        if (this.configuration._id) {
            document.forms['nameOfConfiguration'].elements[0].value =
                this.configuration.name
            this.id = this.configuration._id
            delete this.configuration._id
        } else {
            this.configuration.programs = []
            this.configuration.revelance = this.relavence

            for (let name of this.checkList) {
                this.configuration.programs.push(
                    this.programs[
                        this.programs.findIndex((p) => p.name == name)
                    ]
                )
            }
            this.configuration.selectedCPU = this.chooseCPU(
                this.configuration.programs
            )
            this.configuration.selectedGPU = this.chooseGPU(
                this.configuration.programs
            )
            this.configuration.cputype =
                this.configuration.selectedCPU.name.includes('AMD')
                    ? 'AMD'
                    : 'Intel'
            this.configuration.selectedRAM = this.chooseRAM(
                this.configuration.programs,
                this.configuration.cputype
            )
            this.configuration.selectedMemory = this.chooseMemory(
                this.configuration.programs
            )
            this.configuration.cost =
                this.configuration.selectedCPU.cost +
                this.configuration.selectedGPU.cost +
                this.configuration.selectedMemory.cost +
                this.configuration.selectedRAM.optimalRAM.cost *
                    this.configuration.selectedRAM.amount
        }

        for (let item of this.config.children) {
            switch (item.children[1].attributes['data-type']) {
                case 'cpu':
                    item.children[1].children =
                        this.configuration.selectedCPU.name
                    break
                case 'gpu':
                    item.children[1].children =
                        this.configuration.selectedGPU.name
                    break
                case 'ram':
                    item.children[1].children = `${this.configuration.selectedRAM.optimalRAM.name} х ${this.configuration.selectedRAM.amount}`
                    break
                case 'memory':
                    item.children[1].children =
                        this.configuration.selectedMemory.name
                    break
                case 'cost':
                    item.children[1].children = this.configuration.cost

                    break
                default:
                    break
            }
        }

        this.activeNode.children[2].children = clone(this.config.children)

        // if (
        //     this.activeNode.children.findIndex(
        //         (p) => p.attributes['data-type'] == 'saveButton'
        //     ) == -1
        // ) {
        //     this.activeNode.children.push({
        //         children: 'Сохранить',
        //         tag: 'button',
        //         attributes: { class: 'btn', 'data-type': 'saveButton' },
        //     })
        // }

        this.patch(this.activeNode)
    }

    chooseCPU = (programs: Array<Program>) => {
        let reqCPUCores = 0
        programs.forEach((program) => {
            let newVal = this.findNextValue(
                program.requirements[0].year,
                program.requirements[1].year,
                program.requirements[0].cpu.cores,
                program.requirements[1].cpu.cores,
                Number(this.relavence) + Number(program.requirements[1].year)
            )
            reqCPUCores = newVal > reqCPUCores ? newVal : reqCPUCores
        })

        const optimalCPUs = this.cpuList.filter(
            (cpu) => cpu.cores >= reqCPUCores
        )
        let optimalCPU: CPU =
            this.cpuList[this.cpuList.findIndex((p) => p.cores == 24)]
        if (optimalCPUs.length == 1) {
            optimalCPU == optimalCPUs[0]
        } else if (optimalCPUs.length > 1) {
            optimalCPUs.forEach((cpu) => {
                if (cpu.cost < optimalCPU.cost) optimalCPU = cpu
            })
        }
        return optimalCPU
    }

    chooseGPU = (programs: Array<Program>) => {
        let reqGPUVMs = 0
        programs.forEach((program) => {
            let newVal = this.findNextValue(
                program.requirements[0].year,
                program.requirements[1].year,
                program.requirements[0].gpu.vmemory,
                program.requirements[1].gpu.vmemory,
                Number(this.relavence) + Number(program.requirements[1].year)
            )
            reqGPUVMs = newVal > reqGPUVMs ? newVal : reqGPUVMs
        })

        const optimalGPUs = this.gpuList.filter(
            (gpu) => gpu.vmemory >= reqGPUVMs
        )
        let optimalGPU: GPU =
            this.gpuList[this.gpuList.findIndex((p) => p.vmemory == 16)]
        if (optimalGPUs.length == 1) {
            optimalGPU == optimalGPUs[0]
        } else if (optimalGPUs.length > 1) {
            optimalGPUs.forEach((gpu) => {
                if (gpu.cost < optimalGPU.cost) optimalGPU = gpu
            })
        }
        return optimalGPU
    }
    chooseRAM = (programs: Array<Program>, cputype: string) => {
        let reqVolume = 0
        programs.forEach((program) => {
            let newVal = this.findNextValue(
                program.requirements[0].year,
                program.requirements[1].year,
                program.requirements[0].ram.memory,
                program.requirements[1].ram.memory,
                Number(this.relavence) + Number(program.requirements[1].year)
            )
            reqVolume = newVal > reqVolume ? newVal : reqVolume
        })

        let volume = 0
        let amount = 0
        switch (true) {
            case reqVolume < 4:
                volume = 4
                amount = 1
                break
            case reqVolume >= 4 && reqVolume < 8:
                volume = 4
                amount = 2
                break
            case reqVolume >= 8 && reqVolume < 16:
                volume = 4
                amount = 4
                break
            case reqVolume >= 16 && reqVolume < 32:
                volume = 8
                amount = 4
                break

            default:
                volume = 16
                amount = 4
                break
        }

        let optimalRAM = this.ramList.filter((ram) => ram.memory == volume)
        if (cputype == 'AMD') {
            optimalRAM.filter((ram) => ram.frequency == 3200)
        } else {
            optimalRAM.filter((ram) => ram.frequency == 2666)
        }
        return { optimalRAM: optimalRAM[0], amount }
    }

    chooseMemory = (programs: Array<Program>) => {
        let volume = 0
        programs.forEach((program) => {
            let newVal = this.findNextValue(
                program.requirements[0].year,
                program.requirements[1].year,
                program.requirements[0].memory.amount,
                program.requirements[1].memory.amount,
                Number(this.relavence) + Number(program.requirements[1].year)
            )
            volume = newVal + volume
        })

        const optimalMemorys = this.memoryList.filter(
            (mem) => mem.amount >= volume
        )

        let optimalMemory: Memory =
            this.memoryList[this.memoryList.findIndex((p) => p.amount == 120)]
        if (optimalMemorys.length == 1) {
            optimalMemory == optimalMemorys[0]
        } else if (optimalMemorys.length > 1) {
            optimalMemory = optimalMemorys[0]
            optimalMemorys.forEach((mem) => {
                if (mem.cost < optimalMemory.cost) optimalMemory = mem
            })
        }
        return optimalMemory
    }

    findNextValue = (
        x1: number,
        x2: number,
        y1: number,
        y2: number,
        newX: number
    ): number => {
        // console.log(x1, x2, y1, y2, newX)

        return (
            (-1 * (y2 - y1) * newX) / (x1 - x2) +
            (-1 * (x2 * y1 - x1 * y2)) / (x1 - x2)
        )
    }
}
