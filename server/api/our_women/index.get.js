//import {supabase} from '@/plugins/supabase';
//import { serverSupabaseClient } from '#supabase/server'
import {createClient} from "@supabase/supabase-js";
//import { createClient } from '@supabase/supabase-js'


export default defineEventHandler(async (event) => {
    //const supabase = createClient('https://qpznxdvtbsibmwyurkfl.supabase.co/', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFwem54ZHZ0YnNpYm13eXVya2ZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ1NDk4NTYsImV4cCI6MjAzMDEyNTg1Nn0.--qyC5P0Qvn22AnIMZvM5AzrwPutYx2ko3qxsV_TvHs')

    const supabaseUrl = 'https://qpznxdvtbsibmwyurkfl.supabase.co'
    const supabaseKey = process.env.SUPABASE_KEY
    const supabase = createClient(supabaseUrl, supabaseKey)

   // console.log(process.env.SUPABASE_KEY)
    //console.log(supabase)
    //const client = serverSupabaseClient(event)


    let { data: person , error } = await supabase
        .from('person')
        .select('*')
    if(error) {
        throw createError({statusCode: 400, statusMessage: error.message})
    }

    console.log("done")
    if(error == null){
        console.log("no error")
    }
    console.log(error)
    console.log(person)
    console.assert(person != null)

    return person
})
