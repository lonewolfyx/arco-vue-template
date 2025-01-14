type RoleType = '' | '*' | 'admin' | 'user'

export interface UserState {
    info?: {},
    role: RoleType
}