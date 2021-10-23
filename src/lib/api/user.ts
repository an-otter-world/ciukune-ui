import { getApi, ObjectResource } from '@dontnod/wlh'

export class User extends ObjectResource {
  get email() { return this.get<string>('email') }
}
