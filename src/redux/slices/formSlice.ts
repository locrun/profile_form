import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { SelectOption } from "shared/options";

interface FormState {
  phone: string;
  email: string;
  nickname: string;
  name: string;
  surname: string;
  sex: SelectOption;
  advantages: string[];
  selectedCheckboxes: number[];
  selectedRadio: number[];
  about: string;
}

export interface FormStateContainer {
  formData: FormState;
}

const initialState: FormStateContainer = {
  formData: {
    phone: "",
    email: "",
    nickname: "",
    name: "",
    surname: "",
    sex: { value: "Не выбрано", label: "Не выбрано" },
    advantages: [],
    selectedCheckboxes: [],
    selectedRadio: [],
    about: "",
  },
};
export const formSlice = createSlice({
  name: "formData",
  initialState,
  reducers: {
    setFormData: (state, action: PayloadAction<FormState>) => {
      state.formData = action.payload;
    },
    resetFormData: (state) => {
      state.formData = {
        phone: "",
        email: "",
        nickname: "",
        name: "",
        surname: "",
        sex: { value: "Не выбрано", label: "Не выбрано" },
        advantages: [],
        selectedCheckboxes: [],
        selectedRadio: [],
        about: "",
      };
    },
  },
});

export const { setFormData, resetFormData } = formSlice.actions;

export default formSlice.reducer;
