import { instance } from "../api/api.interceptor";

export const fileService = {
    async createFile(file: FormData) {
        return instance.post("/files", file, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
    },
    async deleteFile(fileName: string) {
        return instance.delete(`/files/${fileName}`);
    },
};
