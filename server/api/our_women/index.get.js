//import {supabase} from '@/plugins/supabase';
import { serverSupabaseClient } from '#supabase/server'
//import { createClient } from '@supabase/supabase-js'


export default defineEventHandler(async (event) => {
    //const supabase = createClient('https://qpznxdvtbsibmwyurkfl.supabase.co/', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFwem54ZHZ0YnNpYm13eXVya2ZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ1NDk4NTYsImV4cCI6MjAzMDEyNTg1Nn0.--qyC5P0Qvn22AnIMZvM5AzrwPutYx2ko3qxsV_TvHs')

    console.log("as")

    const client = serverSupabaseClient(event)

    console.log("a")
    const { data, error }= await client.from('person').select('person_id, name, surname, role, picture').order('surname, name', {ascending: true})
    if(error) {
        console.log("b")
        throw createError({statusCode: 400, statusMessage: error.message})
    }

    //return data
    return "ciao"
})
