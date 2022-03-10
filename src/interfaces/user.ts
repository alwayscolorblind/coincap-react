import { UserState } from '../store/slices/user'

export type UserStorageType = Pick<UserState, 'coins' | 'previousAccount'>
