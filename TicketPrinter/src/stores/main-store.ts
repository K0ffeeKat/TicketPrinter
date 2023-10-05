import { makeAutoObservable } from 'mobx'
import { supabase } from '../../supabaseConfig'

class Store {
  constructor () {
    makeAutoObservable(this)
  }

  userInfo = []
  fetchError = ''

  setUserInfo = (instance: any) => {
    this.userInfo = instance
  }

  setFetchError = (message: string) => {
    this.fetchError = message
  }

  * handleUserInfoRequest (id: number | null) {
    try {
      const { data } = yield supabase
        .from('user_info')
        .select('*')
        .eq('id', id)
      if (data.length > 0) {
        this.setUserInfo(data)
        this.setFetchError('')
      } else {
        this.setFetchError('Wrong ID, please try again')
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export const MainStore = new Store()
