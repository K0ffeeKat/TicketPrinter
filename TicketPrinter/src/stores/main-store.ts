import { makeAutoObservable } from 'mobx'
import { supabase } from '../../supabaseConfig'

class Store {
  constructor () {
    makeAutoObservable(this)
  }

  userInfo = []
  fetchingError = ''

  setUserInfo = (instance: any) => {
    this.userInfo = instance
  }

  setFetchingError = (message: string) => {
    this.fetchingError = message
  }

  async handleUserInfoRequest (id: number | null) {
    try {
      this.setUserInfo([])
      this.setFetchingError('')
      const { data, error } = await supabase
        .from('user_info')
        .select('*')
        .eq('id', id)
      this.setUserInfo(data)
      console.log('userinfo: ', this.userInfo)
      if (data.length === 0) {
        this.setFetchingError('No user found, please try again')
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export const MainStore = new Store()
