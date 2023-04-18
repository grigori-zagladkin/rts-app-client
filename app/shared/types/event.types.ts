import { IBase } from '@/utils/base.interface'

export interface IEvent extends IBase {
	slug: string
	title: string
	description: string
	date: string
	imagesPath: Array<string>
	status: boolean
}
