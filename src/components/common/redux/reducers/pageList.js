const initialResult = {};
export const pageListReducer = (state = initialResult, action) => {
    switch (action.type) {
        case "PAGE_LIST": return {
            ...state,
            page_list: action.data
        }

        default: return state
    }
}

export const AUTH ={

}