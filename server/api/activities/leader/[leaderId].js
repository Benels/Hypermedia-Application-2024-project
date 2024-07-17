import {createClient} from "@supabase/supabase-js";

export default defineEventHandler(async (event) => {

    /**
     * API call to supabase in order to retrieve from database all the activities proposed by HERmet
     * for which the person with a given ID is leader of.
     */

    const supabaseUrl = 'https://qpznxdvtbsibmwyurkfl.supabase.co'
    const supabaseKey = process.env.SUPABASE_KEY
    const supabase = createClient(supabaseUrl, supabaseKey)

    const id = event.context.params.leaderId

    let { data: act , error } = await supabase
        .from('activity')
        .select('*').eq('leader', id);
    if(error) {
        throw createError({statusCode: 400, statusMessage: error.message})
    }
    return act
})