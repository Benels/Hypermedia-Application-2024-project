import {createClient} from "@supabase/supabase-js";

export default defineEventHandler(async (event) => {
    const supabaseUrl = 'https://qpznxdvtbsibmwyurkfl.supabase.co'
    const supabaseKey = process.env.SUPABASE_KEY
    const supabase = createClient(supabaseUrl, supabaseKey)

    const id = event.context.params.id

    let { data: act , error } = await supabase
        .from('activity')
        .select('name, activity_id, is_service, picture').eq('leader', id)
    if(error) {
        throw createError({statusCode: 400, statusMessage: error.message})
    }
    return act
})