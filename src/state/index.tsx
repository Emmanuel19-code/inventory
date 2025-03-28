import {createSlice,PayloadAction} from "@reduxjs/toolkit";

export interface InitialStateTypes{
     isSidebarCollapsed:boolean;
     isDarkMode: boolean;
}

const intitialState:InitialStateTypes {

}

export const globalSlice = createSlice({
    name:'global',
})