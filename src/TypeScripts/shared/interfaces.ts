//'office', 'game', 'science', 'engineering'

// <!-- программы: фотошоп,иллюстратор, офис, браузер хром, файнал кат, матлаб, автокад, солидворк, ансис, dota, cs, cod, gta -->
export interface Program {
    name: string
    type: string

    requirements: Array<Requirement>
}

export interface Configuration {
    selectedCPU?: CPU
    selectedGPU?: GPU
    selectedRAM?: {
        optimalRAM: RAM
        amount: number
    }
    _id?: string
    name?: string
    revelance?: number
    selectedMemory?: Memory
    cputype?: string
    cost?: number
    programs: Array<Program>
}

export interface Requirement {
    year: number
    cpu: {
        cores: number
        frequency: number
    }
    gpu: {
        vmemory: number
        frequency: number
    }

    ram: {
        memory: number
        frequency: number
    }
    memory: {
        amount: number
    }
}
//#3100 #3600 #3700 #3800 #i3 10100f #i5 10400f #i5 10600f #i7 10700
export interface CPU {
    name: string
    cost: number
    cores: number
    frequency: number
    memFrequency: number
}
//1030 1650 3060 3070 3080 5500 6700 6800
export interface GPU {
    name: string
    cost: number
    vmemory: number
    frequency: number
}

//DNS HyperX DDR4 2400 2666 3000 3200 * 4, 8, 16 = 12 видов
//https://www.dns-shop.ru/catalog/17a89a3916404e77/operativnaya-pamyat-dimm/?brand=hyperx&f[8ls]=2tzk
export interface RAM {
    name: string
    cost: number
    memory: number
    frequency: number
}

//SSD western digital DNS 120 240 480 512 1000 2000
//https://www.dns-shop.ru/catalog/dd58148920724e77/ssd-m2-nakopiteli/?brand=westerndigital
export interface Memory {
    name: string
    cost: number
    amount: number
}
