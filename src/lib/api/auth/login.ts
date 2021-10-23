import { getApi, ObjectResource } from '@dontnod/wlh'
import { User } from '../user'

export class Login extends ObjectResource {
  get currentUser() { return this.getChild(User, 'current_user') }

  async login(email: string, password: string) {
    let response = await this._post({ email, password }) as {
      access: string
    }

    if(!response) {
      return;
    }

    this.api.setToken(response.access)
    await this.load(true)
  }
  
  async logout() {
    this.api.clearToken()
    await this.load(true)
  }
}

export function getLogin() {
  return getApi().get(Login, 'auth/login')
}
