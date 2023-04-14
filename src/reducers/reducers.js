import { useReducer } from "react"

export function searchReducer(state, action) {
    switch (action.type) {
        case 'cross':
            return ({ ...state, cross: action.payload })

        case 'text':
            return ({ ...state, text: action.payload })

        default:
            return (state)
    }
}

