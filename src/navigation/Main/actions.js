
const GOTO_ADD = 'GOTO_ADD'
const GOTO_MAIN = 'GOTO_MAIN'

export const actions = {
    GOTO_ADD, GOTO_MAIN
}

export const goToAdd = () => {
    return {
        type: GOTO_ADD,
    }
}

export const goToMain = () => {
    return {
        type: GOTO_MAIN,
    }
}