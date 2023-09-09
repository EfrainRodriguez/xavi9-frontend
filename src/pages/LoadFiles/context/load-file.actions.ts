import { uploadPdfApi } from "../../../api/upload-files";
import { ActionTypes, Action, Dispatch } from "./load-file.types";

export const setFiles = (files: File[]): Action => ({
    type: ActionTypes.SET_FILES,
    payload: files
});

export const setIsLoading = (isLoading: boolean): Action => ({
    type: ActionTypes.SET_IS_LOADING,
    payload: isLoading
});

export const sendPdfFiles = async (dispatch: Dispatch, files: File[]) => {
    dispatch(setIsLoading(true));
    try {
        await uploadPdfApi(files);
        dispatch(setIsLoading(false));
    } catch (error) {
        dispatch(setIsLoading(false));
        throw error;
    }
};
