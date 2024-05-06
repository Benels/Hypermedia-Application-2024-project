import{ createClient} from "@supabase/supabase-js";

const supabaseUrl = 'https://qpznxdvtbsibmwyurkfl.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFwem54ZHZ0YnNpYm13eXVya2ZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ1NDk4NTYsImV4cCI6MjAzMDEyNTg1Nn0.--qyC5P0Qvn22AnIMZvM5AzrwPutYx2ko3qxsV_TvHs';

export const supabase = createClient(supabaseUrl, supabaseKey);