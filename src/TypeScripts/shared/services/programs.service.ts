import { CPU, GPU, Memory, Program, RAM } from '../interfaces'
import { CPUList, GPUList, MemoryList, programList, RAMList } from './dataLists'

export class ProgramsService {
    static getPrograms(): Array<Program> {
        return programList
    }

    static getProgramTypes(): Array<any> {
        let types = new Set()
        programList.forEach((program) => {
            types.add(program.type)
        })
        return Array.from(types)
    }
    static getCPU(): Array<CPU> {
        return CPUList
    }
    static getGPU(): Array<GPU> {
        return GPUList
    }

    static getRAM(): Array<RAM> {
        return RAMList
    }
    static getMemory(): Array<Memory> {
        return MemoryList
    }
}
