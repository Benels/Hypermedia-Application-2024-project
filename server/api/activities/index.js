import {createClient} from "@supabase/supabase-js";

export default defineEventHandler(async (event) => {


    /**
     * API call to supabase in order to retrieve from database all the activities proposed by HERmet.
     */

    const supabaseUrl = 'https://qpznxdvtbsibmwyurkfl.supabase.co'
    const supabaseKey = process.env.SUPABASE_KEY
    const supabase = createClient(supabaseUrl, supabaseKey)

    let { data: person , error } = await supabase
        .from('activity')
        .select('*')
    if(error) {
        throw createError({statusCode: 400, statusMessage: error.message})
    }

    return person
})
