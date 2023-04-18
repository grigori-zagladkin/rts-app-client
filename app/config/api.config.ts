export const API_URL = `${process.env.APP_URL}/api`

export const getAuthUrl = (url: string) => `/auth${url}`
export const getEventsUrl = (url: string) => `/events${url}`
export const getDevelopmentsUrl = (url: string) => `/developments${url}`
export const getEmployeesUrl = (url: string) => `/employees${url}`
export const getCoursesUrl = (url: string) => `/courses${url}`
export const getCompetenciesUrl = (url: string) => `/competencies${url}`
