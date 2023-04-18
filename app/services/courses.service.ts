import { instance } from "../api/api.interceptor";
import { getCoursesUrl } from "../config/api.config";

export const CoursesService = {
    async getAllCourses() {
        return instance.get(getCoursesUrl(``));
    },
    async getCourseBySlug() {},
    async createCourse() {},
    async getCourseById(id: number) {},
    async updateCourse(id: number, data: any) {},
    async deleteCourse(id: number) {
        return instance.delete;
    },
};
