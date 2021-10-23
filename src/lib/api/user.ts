import { getApi, ObjectResource } from '@dontnod/wlh'

export class User extends ObjectResource {
  get email() { return this.get<string>('email') }
  set email(value: string) { this.set<string>('email', value) }

  get username() { return this.get<string>('username') }
  set username(value: string) { this.set<string>('username', value) }
}
