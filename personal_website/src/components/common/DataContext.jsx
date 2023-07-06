import { createContext, useReducer, useState } from 'react';
import { RouterProvider } from 'react-router-dom';

const initialState = {
    type: null,
    openVideo: null,
};

const DataContext = createContext(initialState); // 建立環境

export const DataProvider = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(true); // 管理彈跳視窗
    const [state, dispatch] = useReducer((state, action) => {
        console.log('state', state);
        console.log('action', action);
        switch (action.type) {
            case 'openVideo':
                return {
                    ...state,
                    openVideo: action.payload,
                };

            default:
                return state;
        }
    }, initialState);

    // 處理開啟模組
    const handleOpenWindows = (state) => {
        dispatch({
            type: 'openVideo',
            payload: state,
        });
    };

    const dataDefaultValues = {
        state,
        handleOpenWindows, // 處理開啟模組
    };
    return <DataContext.Provider value={{ dataDefaultValues }}>{children}</DataContext.Provider>;
};

export default DataContext;
