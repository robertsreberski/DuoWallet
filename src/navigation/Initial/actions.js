const GOTO_INITIALIZE = 'GOTO_INITIALIZE'
const GOTO_MAIN = 'GOTO_MAIN'

export const actions = {GOTO_INITIALIZE, GOTO_MAIN}

export const goToInitialization = () => {
    return {
        type: GOTO_INITIALIZE,
    }
}

export const startApp = () => {
    return {
        type: GOTO_MAIN,
    }
}