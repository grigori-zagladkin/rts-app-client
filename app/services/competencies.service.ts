import { axiosClassic, instance } from "../api/api.interceptor";
import { IEditCompetence } from "../components/screens/Admin/Competencies/competence-edit.intrface";
import { getCompetenciesUrl } from "../config/api.config";

export const CompetenciesService = {
    async getAllCompetencies() {
        return axiosClassic.get(getCompetenciesUrl(``), {
            params: {},
        });
    },
    async getCompetenceBySlug(slug: string) {
        return axiosClassic.get(getCompetenciesUrl(`/by-slug/${slug}`));
    },
    async createCompetence() {
        return instance.post(getCompetenciesUrl(``));
    },
    async getCompetenceById(id: number) {
        return instance.get(getCompetenciesUrl(`/${id}`));
    },
    async updateCompetence(id: number, data: IEditCompetence) {
        return instance.post(getCompetenciesUrl(`/${id}`), data);
    },
    async deleteCompetence(id: number) {
        return await instance.delete(getCompetenciesUrl(`/${id}`));
    },
};
