export class GameService {
    static _instance?: GameService = undefined
    gold: number

    static instance() {
        if (!GameService._instance) {
            GameService._instance = new GameService()
        }
        return GameService._instance
    }

    constructor() {
        this.gold = 0
    }
}
