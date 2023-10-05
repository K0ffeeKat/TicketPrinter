import 'react-native-url-polyfill/auto'
import { createClient } from '@supabase/supabase-js'
import AsyncStorage from '@react-native-async-storage/async-storage'

const supabaseUrl = 'https://pdghpxiwmornmihrexws.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBkZ2hweGl3bW9ybm1paHJleHdzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY0ODQ5MTMsImV4cCI6MjAxMjA2MDkxM30._k9qTTHoC1OD_cZ6YRahw4xRlJm7Yu6z9a6-8KvXZFY'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false
  }
})
