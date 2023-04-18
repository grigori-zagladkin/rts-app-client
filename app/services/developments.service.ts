import { axiosClassic, instance } from "../api/api.interceptor";
import { getDevelopmentsUrl } from "../config/api.config";

export const DevelopmentService = {
    async getDevelopmentBySlug(slug: string) {
        return axiosClassic.get(getDevelopmentsUrl(`/by-slug/${slug}`));
    },
    async getAllDevelopments() {
        return axiosClassic.get(getDevelopmentsUrl(""));
    },
    async createDevelopment() {
        return instance.post(getDevelopmentsUrl(""));
    },
    async getDevelopmentById(id: number) {
        return instance.get(getDevelopmentsUrl(`/${id}`));
    },
    async updateDevelopment(id: number, data: any) {
        return instance.put(getDevelopmentsUrl(`/${id}`), data);
    },
    async deleteDevelopment(id: number) {
        return instance.delete(getDevelopmentsUrl(`/${id}`));
    },
};
