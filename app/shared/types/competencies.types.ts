import { IBase } from '@/utils/base.interface'

import { ICourse } from './course.types'
import { IDevelopment } from './development.types'
import { IEmployee } from './employees.types'

export interface ICompetence extends IBase {
	title: string
	description: string
	imagesPath: Array<string>
	production: string
	slug: string
	employees: Array<IEmployee>
	developments: Array<IDevelopment>
	courses: Array<ICourse>
}
