import {createClient} from "@supabase/supabase-js";

export default defineEventHandler(async (event) => {


    /**
     * API call to supabase in order to retrieve all the personal information
     * of an employee given her ID.
     */

    const supabaseUrl = 'https://qpznxdvtbsibmwyurkfl.supabase.co'
    const supabaseKey = process.env.SUPABASE_KEY
    const supabase = createClient(supabaseUrl, supabaseKey)

    const id = event.context.params.id

    let { data: person , error } = await supabase
        .from('person')
        .select('*').eq('person_id', id).limit(1).single()
    if(error) {
        throw createError({statusCode: 400, statusMessage: error.message})
    }

    return person
})