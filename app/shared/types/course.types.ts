import { IBase } from '@/utils/base.interface'

import { ICompetence } from './competencies.types'
import { IEmployee } from './employees.types'

export interface ICourse extends IBase {
	title: string
	description: string
	imagesPath: Array<string>
	slug: string

	competencies: Array<ICompetence>
	employees: Array<IEmployee>
}
