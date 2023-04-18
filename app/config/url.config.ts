export const getDevelopmentsUrl = (slug: string) => `/developments/${slug}`
export const getCoursesUrl = (slug: string) => `/courses/${slug}`
export const getEmployeesUrl = (slug: string) => `/employees/${slug}`
export const getEventsUrl = (slug: string) => `/events/${slug}`
export const getCompetenciesUrl = (slug: string) => `/competencies/${slug}`

export const getAdminUrl = (url: string) => `/manage/${url}`
export const getAdminHomeUrl = (url: string) => getAdminUrl(``).slice(0, -1)
