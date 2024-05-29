import {createClient} from "@supabase/supabase-js";

export default defineEventHandler(async (event) => {
    const supabaseUrl = 'https://qpznxdvtbsibmwyurkfl.supabase.co'
    const supabaseKey = process.env.SUPABASE_KEY
    const supabase = createClient(supabaseUrl, supabaseKey)

    let { data: person , error } = await supabase
        .from('activity')
        .select('*').order('started', {ascending: false}).limit(1);
    if(error) {
        throw createError({statusCode: 400, statusMessage: error.message})
    }

    return person
})
