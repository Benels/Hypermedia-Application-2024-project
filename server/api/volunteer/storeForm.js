import { createClient } from '@supabase/supabase-js';
import { readBody, sendError, createError } from 'h3';

export default eventHandler(async (event) => {

    const supabaseUrl = 'https://qpznxdvtbsibmwyurkfl.supabase.co'
    const supabaseKey = process.env.SUPABASE_KEY
    const supabase = createClient(supabaseUrl, supabaseKey)

    if (event.req.method === 'POST') {
        try {
            console.log('Received POST request');
            const body = await readBody(event);
            console.log('Request body:', body);
            const { name, surname, email, phone, occupation, days, hours, text } = body;

            if (!name || !surname || !email || !phone || !occupation || !days || !hours || !text) {
                throw createError({
                    statusCode: 400,
                    statusMessage: 'All fields are required'
                });
            }

            const { data, error } = await supabase
                .from('form_submissions')
                .insert([{ name, surname, email, phone, occupation, days, hours, text }]);

            if (error) {
                throw error;
            }

            return { success: true, message: 'Form submitted successfully', data };
        } catch (error) {
            console.error('Error:', error);
            sendError(event, createError({
                statusCode: 500,
                statusMessage: 'Error submitting form',
                data: error.message
            }));
        }
    } else {
        sendError(event, createError({
            statusCode: 405,
            statusMessage: 'Method not allowed'
        }));
    }
});
