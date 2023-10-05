import { makeAutoObservable } from 'mobx'
import { supabase } from '../../supabaseConfig'

class AuthStore {
  constructor () {
    makeAutoObservable(this)
  }

  isUser: boolean = true

  setIsUser = () => {
    this.isUser = !this.isUser
  }

  * handleLogin (email: string, password: string) {
    try {
      const { error } = yield supabase.auth.signInWithPassword({
        email,
        password
      })
      this.setIsUser()
    } catch (error) {
      console.log(error)
    }
  }
}

export const AuthorizationStore = new AuthStore()
