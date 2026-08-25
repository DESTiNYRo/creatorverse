import {createClient} from '@supabase/supabase-js'

const URL = 'https://cfslmqmwrocezbchhqwa.supabase.co'
const API_KEY = 'cfslmqmwrocezbchhqwa'

export const supabase = createClient(URL, API_KEY)