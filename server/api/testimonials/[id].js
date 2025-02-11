import {createClient} from "@supabase/supabase-js";

export default defineEventHandler(async (event) => {


    /**
     * API call to supabase in order to retrieve the testimonial for a certain activity given its ID.
     */

    const supabaseUrl = 'https://qpznxdvtbsibmwyurkfl.supabase.co'
    const supabaseKey = process.env.SUPABASE_KEY
    const supabase = createClient(supabaseUrl, supabaseKey)

    const id = event.context.params.id;

    let { data: person , error } = await supabase
        .from('testimonials')
        .select('*').eq('activity_id', id);
    if(error) {
        throw createError({statusCode: 400, statusMessage: error.message})
    }

    return person
})
