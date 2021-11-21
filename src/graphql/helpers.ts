/**
 * Helpers to use Urql api.
 */

import {UseMutationResponse} from '@urql/vue'
import { Ref } from 'vue'

type MutationFunction<TMutation, TArgs> = () => UseMutationResponse<TMutation, TArgs>

type RefArgs<TArgs> = { [K in keyof TArgs]: Ref<TArgs[K]> }

export function bindRefs<TMutation, TArgs>(
	mutation: MutationFunction<TMutation, TArgs>,
	refArgs: RefArgs<TArgs>) {
  const { executeMutation, fetching, error , data } = mutation()

  const execute = async () => {
    const args = {} as TArgs
    for(const key in refArgs) {
      args[key] = refArgs[key].value
    }
    return await executeMutation(args)
  }

  return {
    execute,
    fetching,
    error,
    data
  }
}