import { IBase } from '@/utils/base.interface'

import { ICompetence } from './competencies.types'

export interface IEmployee extends IBase {
	firstName: string
	secondName: string
	photoPath: string
	information: string
	slug: string
	competencies: Array<ICompetence>
}
