const uiInit = {open:false, anchor:null}
export const ui = ( state=uiInit, action) => {
    switch(action.type) {
        case 'TOGGLE_OPEN':
            return {
                open: action.open,
                achor: action.anchor
            }
        default:
            return state
    }
}
