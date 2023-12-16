import { createContext } from "react";

const INITIAL_STATE = {
    city: undefined,
    date: [],
    option: {
        adult: undefined,
        children: undefined,
        room: undefined
    }
};

export const AuthContext = createContext(INITIAL_STATE);

const SearchReducer =  (state, action) => {
    switch(action.type){
        case 'NEW_SEARCH':
            return action.payload
        case 'RESET_PAGE':
            return INITIAL_STATE
        default:
            return state
    }
};

export const SearchContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(SearchReucer, INITIAL_STATE)


return (
    <SearchContext.Provider value={{city: state.city, 
                                    date: state.date,
                                    option: state.option, 
                                    dispatch}}>
        { children }
    </SearchContext.Provider>
)

}