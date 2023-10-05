import { MMKV } from 'react-native-mmkv'

const storage = new MMKV({ id: 'supabase-storage' })

export const mmkvStorageConfig = {
  setItem: (key, data) => { storage.set(key, data) },
  getItem: (key) => { storage.getString(key) },
  removeItem: (key) => { storage.delete(key) }
}
