import axios from "axios"
import { startLoading ,setCharacterList,stopLoading} from "./charactersSlice"
import { setTotalPage,setCurrentPage } from "./paginationSlice";
import { BASE_URL } from "../constants"

//thunks=> llamadas asincronas es mejor y mas ordenados hacerlos en un archivo aparte
//funcion que ejecuta otra funcion 

// Acción para manejar errores
export const setError = (error) => {
    return {
        type: 'SET_ERROR',
        payload: error
    };
};

//obtener personajes de la API
export const getCharacters = (page) => {
    return async (dispatch, getState) => {
        try {
            
            dispatch(startLoading());
            //  solicitud a la API utilizando Axios
            const response = await axios.get(`${BASE_URL}?page=${page}&limit=10`)
            const data = response.data;

            //extraigo la info de pages
            const currentPage = data.meta.currentPage
            const totalPage = data.meta.totalPages
            dispatch(setCurrentPage(currentPage))
            dispatch(setTotalPage(totalPage))

            // Enviar los personajes obtenidos al store de Redux
            dispatch(setCharacterList(data));
            dispatch(stopLoading());
        } catch (error) {
            // Manejar cualquier error que pueda ocurrir durante la solicitud
            dispatch(setError(error.message));
            dispatch(stopLoading());
        }
    };
};