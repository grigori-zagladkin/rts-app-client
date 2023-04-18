import { axiosClassic, instance } from "../api/api.interceptor";
import { getEventsUrl } from "../config/api.config";

export const EventsService = {
    async getAllEvents(searchTerm?: string) {
        return await axiosClassic.get(getEventsUrl(``), {
            params: searchTerm ? searchTerm : {},
        });
    },
    async getEventBySlug(slug: string) {
        return await axiosClassic.get(getEventsUrl(`/by-slug/${slug}`));
    },
    async getEventById(id: number) {
        return await instance.get(getEventsUrl(`/${id}`));
    },
    async createEvent() {
        return await instance.post<number>(getEventsUrl(``));
    },
    async updateEvent(id: number, data: any) {
        return await instance.put(getEventsUrl(`/${id}`), data);
    },
    async deleteEvent(id: number) {
        return await instance.delete(getEventsUrl(`/${id}`));
    },
};
