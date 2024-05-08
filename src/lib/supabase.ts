import { createClient } from '@supabase/supabase-js'
import type { Database, PublicSchema } from './types/database.types'

const supabaseUrl = import.meta.env.SUPABASE_URL
const supabaseKey = import.meta.env.SUPABASE_ANON_KEY

export const supabase = createClient<Database, 'public', PublicSchema>(
  supabaseUrl,
  supabaseKey,
)
