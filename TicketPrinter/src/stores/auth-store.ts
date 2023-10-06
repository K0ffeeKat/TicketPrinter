import { makeAutoObservable } from 'mobx'
import { supabase } from '../../supabaseConfig'
import { type Session } from '@supabase/supabase-js'

class AuthStore {
  constructor () {
    makeAutoObservable(this)
  }

  isUser: boolean = false
  session: Session | null = null

  authError = null

  setIsUser = () => {
    if (this.session) {
      this.isUser = true
    } else {
      this.isUser = false
    }
  }

  setAuthError = (authError) => {
    this.authError = authError
  }

  setSession = (userSession) => {
    this.session = userSession
    this.setIsUser()
  }

  * handleLogin (userEmail: string, userPassword: string) {
    try {
      let { data, error } = yield supabase.auth.signInWithPassword({
        email: userEmail,
        password: userPassword
      })
      this.setSession(data)
      if (error) {
        this.setAuthError(error)
      }
    } catch (error) {
      console.log(error)
    }
  }

  * handleSignOut () {
    try {
      const { error } = yield supabase.auth.signOut()
      if (error) {
        this.setAuthError(error)
      }
      this.setSession(null)
    } catch (error) {
      console.log('log out error: ', error)
    }
  }
}

export const AuthorizationStore = new AuthStore()
