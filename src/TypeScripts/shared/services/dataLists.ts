import { CPU, GPU, Memory, Program, RAM } from './../interfaces'

export const programList: Array<Program> = [
    //all frequency in mHz(МГц)
    //office
    //#1
    {
        name: 'Microsoft Office',
        type: 'office',
        requirements: [
            {
                year: 2020,
                cpu: {
                    cores: 1,
                    frequency: 1000,
                },
                gpu: {
                    vmemory: 0.512,
                    frequency: 1000,
                },

                ram: {
                    memory: 2,
                    frequency: 1600,
                },
                memory: {
                    amount: 3,
                },
            },
            {
                year: 2021,
                cpu: {
                    cores: 2,
                    frequency: 1600,
                },
                gpu: {
                    vmemory: 1,
                    frequency: 1000,
                },

                ram: {
                    memory: 4,
                    frequency: 2400,
                },
                memory: {
                    amount: 4,
                },
            },
        ],
    },
    //#2
    {
        name: 'Adobe Photoshop',
        type: 'office',
        requirements: [
            {
                year: 2020,
                cpu: {
                    cores: 2,
                    frequency: 2000,
                },
                gpu: {
                    vmemory: 4,
                    frequency: 1392,
                },

                ram: {
                    memory: 4,
                    frequency: 2400,
                },
                memory: {
                    amount: 3.1,
                },
            },
            {
                year: 2021,
                cpu: {
                    cores: 4,
                    frequency: 4200,
                },
                gpu: {
                    vmemory: 6,
                    frequency: 1809,
                },

                ram: {
                    memory: 8,
                    frequency: 2400,
                },
                memory: {
                    amount: 4,
                },
            },
        ],
    },
    //#3
    {
        name: 'Adobe Illustrator',
        type: 'office',
        requirements: [
            {
                year: 2020,
                cpu: {
                    cores: 2,
                    frequency: 2000,
                },
                gpu: {
                    vmemory: 2,
                    frequency: 1600,
                },

                ram: {
                    memory: 2,
                    frequency: 2400,
                },
                memory: {
                    amount: 2,
                },
            },
            {
                year: 2021,
                cpu: {
                    cores: 4,
                    frequency: 4200,
                },
                gpu: {
                    vmemory: 4,
                    frequency: 2000,
                },

                ram: {
                    memory: 2,
                    frequency: 2400,
                },
                memory: {
                    amount: 4,
                },
            },
        ],
    },

    //engineering
    //#4
    {
        name: 'Solidworks',
        type: 'engineering',
        requirements: [
            {
                year: 2020,
                cpu: {
                    cores: 2,
                    frequency: 3300,
                },
                gpu: {
                    vmemory: 4,
                    frequency: 1219,
                },

                ram: {
                    memory: 16,
                    frequency: 2400,
                },
                memory: {
                    amount: 20,
                },
            },
            {
                year: 2021,
                cpu: {
                    cores: 4,
                    frequency: 4000,
                },
                gpu: {
                    vmemory: 4,
                    frequency: 1354,
                },

                ram: {
                    memory: 16,
                    frequency: 2400,
                },
                memory: {
                    amount: 20,
                },
            },
        ],
    },
    //#5
    {
        name: 'AutoCAD',
        type: 'engineering',
        requirements: [
            {
                year: 2020,
                cpu: {
                    cores: 2,
                    frequency: 3000,
                },
                gpu: {
                    vmemory: 2,
                    frequency: 2000,
                },

                ram: {
                    memory: 8,
                    frequency: 2400,
                },
                memory: {
                    amount: 4,
                },
            },
            {
                year: 2021,
                cpu: {
                    cores: 2,
                    frequency: 3000,
                },
                gpu: {
                    vmemory: 4,
                    frequency: 1500,
                },

                ram: {
                    memory: 16,
                    frequency: 2400,
                },
                memory: {
                    amount: 6,
                },
            },
        ],
    },
    //#6
    {
        name: 'MATLAB',
        type: 'engineering',
        requirements: [
            {
                year: 2020,
                cpu: {
                    cores: 2,
                    frequency: 1000,
                },
                gpu: {
                    vmemory: 2,
                    frequency: 1530,
                },

                ram: {
                    memory: 4,
                    frequency: 2400,
                },
                memory: {
                    amount: 10,
                },
            },
            {
                year: 2021,
                cpu: {
                    cores: 2,
                    frequency: 2000,
                },
                gpu: {
                    vmemory: 2,
                    frequency: 1530,
                },

                ram: {
                    memory: 4,
                    frequency: 2400,
                },
                memory: {
                    amount: 10,
                },
            },
        ],
    },
    //game
    //#7
    {
        name: 'CS GO',
        type: 'game',
        requirements: [
            {
                year: 2020,
                cpu: {
                    cores: 4,
                    frequency: 2400,
                },
                gpu: {
                    vmemory: 1,
                    frequency: 1392,
                },

                ram: {
                    memory: 2,
                    frequency: 2400,
                },
                memory: {
                    amount: 15,
                },
            },
            {
                year: 2021,
                cpu: {
                    cores: 4,
                    frequency: 2400,
                },
                gpu: {
                    vmemory: 3,
                    frequency: 1392,
                },

                ram: {
                    memory: 4,
                    frequency: 2600,
                },
                memory: {
                    amount: 15,
                },
            },
        ],
    },
    //#8
    {
        name: 'Dota',
        type: 'game',
        requirements: [
            {
                year: 2020,
                cpu: {
                    cores: 2,
                    frequency: 2400,
                },
                gpu: {
                    vmemory: 0.512,
                    frequency: 600,
                },

                ram: {
                    memory: 4,
                    frequency: 2000,
                },
                memory: {
                    amount: 15,
                },
            },
            {
                year: 2021,
                cpu: {
                    cores: 2,
                    frequency: 2800,
                },
                gpu: {
                    vmemory: 1,
                    frequency: 1000,
                },

                ram: {
                    memory: 4,
                    frequency: 2400,
                },
                memory: {
                    amount: 15,
                },
            },
        ],
    },
    //#9
    {
        name: 'Call of Duty',
        type: 'game',
        requirements: [
            {
                year: 2020,
                cpu: {
                    cores: 2,
                    frequency: 3600,
                },
                gpu: {
                    vmemory: 2,
                    frequency: 1020,
                },

                ram: {
                    memory: 8,
                    frequency: 2400,
                },
                memory: {
                    amount: 25,
                },
            },
            {
                year: 2021,
                cpu: {
                    cores: 6,
                    frequency: 3500,
                },
                gpu: {
                    vmemory: 4,
                    frequency: 1725,
                },

                ram: {
                    memory: 8,
                    frequency: 2400,
                },
                memory: {
                    amount: 175,
                },
            },
        ],
    },
]

export const CPUList: Array<CPU> = [
    {
        name: 'Intel Core i5-10400F',
        cost: 157,
        cores: 12,
        frequency: 4300,
        memFrequency: 2666,
    },
    {
        name: 'Intel Core i5-10600f',
        cost: 270,
        cores: 12,
        frequency: 4800,
        memFrequency: 2666,
    },

    {
        name: 'Intel Core i7-10700',
        cost: 333,
        cores: 19,
        frequency: 4800,
        memFrequency: 2933,
    },
    {
        name: 'Intel Core i9-10900',
        cost: 333,
        cores: 20,
        frequency: 5200,
        memFrequency: 2933,
    },

    {
        name: 'Intel Core i3-10100f',
        cost: 97,
        cores: 8,
        frequency: 4300,
        memFrequency: 2666,
    },

    {
        name: 'AMD Ryzen 3 3100',
        cost: 218.5,
        cores: 8,
        frequency: 3900,
        memFrequency: 3200,
    },

    {
        name: 'AMD Ryzen 5 3600',
        cost: 209.99,
        cores: 12,
        frequency: 4200,
        memFrequency: 3200,
    },

    {
        name: 'AMD Ryzen 7 3700',
        cost: 308.99,
        cores: 16,
        frequency: 4400,
        memFrequency: 3200,
    },

    {
        name: 'AMD Ryzen 9 3900X',
        cost: 382.17,
        cores: 24,
        frequency: 4600,
        memFrequency: 3200,
    },
]

export const GPUList: Array<GPU> = [
    {
        name: 'GeForce GTX 1650',
        cost: 318.61,
        vmemory: 4,
        frequency: 1725,
    },
    {
        name: 'GeForce GT 1030',
        cost: 117.52,
        vmemory: 2,
        frequency: 1530,
    },

    {
        name: 'GeForce RTX 3080',
        cost: 1857.75,
        vmemory: 10,
        frequency: 1710,
    },

    {
        name: 'GeForce RTX 3070',
        cost: 1233.33,
        vmemory: 8,
        frequency: 1830,
    },

    {
        name: 'GeForce RTX 3060',
        cost: 920.03,
        vmemory: 12,
        frequency: 1837,
    },

    {
        name: 'AMD Radeon RX 5500',
        cost: 699,
        vmemory: 8,
        frequency: 1845,
    },

    {
        name: 'AMD Radeon RX 6700',
        cost: 1200,
        vmemory: 12,
        frequency: 2321,
    },

    {
        name: 'AMD Radeon RX 6800',
        cost: 1579,
        vmemory: 16,
        frequency: 1815,
    },
]

export const RAMList: Array<RAM> = [
    // {
    //     name: 'Kingston HyperX 2400*4',
    //     cost: 36.46,
    //     memory: 4,
    //     frequency: 2400,
    // },
    // {
    //     name: 'Kingston HyperX 2400*8',
    //     cost: 56.73,
    //     memory: 8,
    //     frequency: 2400,
    // },
    // {
    //     name: 'Kingston HyperX 2400*16',
    //     cost: 104.01,
    //     memory: 16,
    //     frequency: 2400,
    // },
    {
        name: 'Kingston HyperX 2666*4',
        cost: 32.41,
        memory: 4,
        frequency: 2666,
    },
    {
        name: 'Kingston HyperX 2666*8',
        cost: 55.38,
        memory: 8,
        frequency: 2666,
    },
    {
        name: 'Kingston HyperX 2666*16',
        cost: 98.61,
        memory: 16,
        frequency: 2666,
    },
    // {
    //     name: 'Kingston HyperX 3000*4',
    //     cost: 33.76,
    //     memory: 4,
    //     frequency: 3000,
    // },
    // {
    //     name: 'Kingston HyperX 3000*8',
    //     cost: 55.38,
    //     memory: 8,
    //     frequency: 3000,
    // },
    // {
    //     name: 'Kingston HyperX 3000*16',
    //     cost: 108.07,
    //     memory: 16,
    //     frequency: 3000,
    // },
    // {
    //     name: 'Kingston HyperX 3200*4',
    //     cost: 36.46,
    //     memory: 4,
    //     frequency: 3200,
    // },
    {
        name: 'Kingston HyperX 3200*8',
        cost: 59.43,
        memory: 8,
        frequency: 3200,
    },
    {
        name: 'Kingston HyperX 3200*16',
        cost: 110.77,
        memory: 16,
        frequency: 3200,
    },
]

export const MemoryList: Array<Memory> = [
    {
        name: 'SSD Western Digital 120',
        cost: 31.06,
        amount: 120,
    },
    {
        name: 'SSD Western Digital 240',
        cost: 43.22,
        amount: 240,
    },
    {
        name: 'SSD Western Digital 480',
        cost: 62.13,
        amount: 480,
    },
    {
        name: 'SSD Western Digital 512',
        cost: 124.28,
        amount: 512,
    },
    {
        name: 'SSD Western Digital 1000',
        cost: 182.37,
        amount: 1000,
    },
    {
        name: 'SSD Western Digital 2000',
        cost: 297.27,
        amount: 2000,
    },
]
