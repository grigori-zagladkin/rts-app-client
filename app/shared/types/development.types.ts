import { IBase } from '@/utils/base.interface'

export interface IPartnerLink extends IBase {
	link: string
	iconPath: string
	description?: string
	developments: Array<IDevelopment>
}

export interface IDevelopment extends IBase {
	title: string
	slug: string
	description: string
	imagesPath: Array<string>
	technicalStats: Array<string>
}
