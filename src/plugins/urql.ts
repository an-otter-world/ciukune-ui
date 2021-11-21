/**
 * Urql plugin installation & configuration.
 */
import urql from '@urql/vue';
import { App } from 'vue';
import { cacheExchange, DataFields, ResolveInfo, Variables, Cache  } from '@urql/exchange-graphcache';
import { LoginMutation, useCurrentUserQuery } from '../graphql'
import { createClient, dedupExchange, fetchExchange } from '@urql/vue'
import { devtoolsExchange } from '@urql/devtools';

export default function install<T>(app: App<T>) {
  const urqlClient = createClient({
    url: '/graphql/',
    exchanges: [
      devtoolsExchange,
      dedupExchange,
      cacheExchange({
        updates: {
          Mutation: {
            login
          },
        },
      }),
      fetchExchange,
    ],
    fetchOptions: fetchOptions
  })
  app.use(urql, urqlClient)
}

export function useLogout() {
  const currentUserQuery = useCurrentUserQuery({
    requestPolicy: 'network-only',
    pause: true
  })
  const logout = async () => {
    localStorage.removeItem(_TOKEN_STORAGE_KEY)
    await currentUserQuery.executeQuery()
  }
  return {
    logout
  }
}

const _TOKEN_STORAGE_KEY = 'token'

function login(result: DataFields, _: Variables, cache: Cache, __: ResolveInfo) {
  const loginResponse = result as LoginMutation
  const token = loginResponse.login?.token
  if(token){
    localStorage.setItem(_TOKEN_STORAGE_KEY, token)
    cache.invalidate('Query', 'currentUser') 
  }
}

function fetchOptions() {
  const token = localStorage.getItem(_TOKEN_STORAGE_KEY)
  if(token) {
    return {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }
  }

  return {}
}
