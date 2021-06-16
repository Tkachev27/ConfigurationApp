import { StateManager } from '@core/StateManager'
import { Configuration } from '../interfaces'

export class ConfigService {
    static async update(configuration: Configuration) {
        return await new Promise((resolve, reject) => {
            setTimeout(() => {
                let _id
                if (configuration._id) {
                    _id = configuration._id
                } else {
                    _id =
                        (
                            Math.floor(Math.random() * (100000000 - 1)) + 1
                        ).toString() + 'config'
                    configuration._id = _id
                }

                StateManager.setToStorage(_id, configuration)

                resolve(configuration)
            }, 200)
        })
    }

    static async getAll() {
        return await new Promise((resolve, reject) => {
            setTimeout(() => {
                let list: Array<Configuration> = []

                for (var i = 0; i < localStorage.length; i++) {
                    if (localStorage.key(i).includes('config')) {
                        list.push(
                            StateManager.getDataFromStorage(localStorage.key(i))
                        )
                    }
                }

                resolve(list)
            }, 200)
        })
    }
}
