import axios from "axios";

export const initialState = {
    name: "",
    category: "",
    difficulty: "",
    score: 0
}

export const getQuestions = async (category,difficulty) => {
    const {data} = await axios.get(`https://opentdb.com/api.php?amount=20&category=${category}&difficulty=${difficulty}&type=multiple`)
    return data.results;
}

export const reducer = (state, action) => {
    switch (action.type){
        case "SET_NAME":
            return{
                ...state,
                name: action.payload
            }
        case "SET_CATEGORY":
            return{
                ...state,
                category: action.payload
            }
        case "SET_DIFFICULTY":
            return{
                ...state,
                difficulty: action.payload
            }
        case "SET_SCORE":
            return{
                ...state,
                score: action.payload
            }
        default:
            return state;
    }
}