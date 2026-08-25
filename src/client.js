import {createClient} from '@supabase/supabase-js'

const URL = 'https://cfslmqmwrocezbchhqwa.supabase.co'
const API_KEY = 'sb_publishable_Yc_MQwpoAbKVgVJCGHl1wA_7oEcBwbR'

export const supabase = createClient(URL, API_KEY)