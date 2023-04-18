import { IBase } from '@/utils/base.interface'

export enum Role {
	ADMIN,
	USER,
}

export interface IUser extends IBase {
	email: string
	password: string
	role: Role
}
