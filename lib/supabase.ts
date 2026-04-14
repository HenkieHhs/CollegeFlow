import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = 'https://your-supabase-url';
const supabaseAnonKey = 'your-anon-key';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database functions for summaries
export const getSummaries = async () => {
    const { data, error } = await supabase
        .from('summaries')
        .select('*');

    if (error) throw error;
    return data;
};

export const addSummary = async (summary) => {
    const { data, error } = await supabase
        .from('summaries')
        .insert([summary]);

    if (error) throw error;
    return data;
};

export const updateSummary = async (id, summary) => {
    const { data, error } = await supabase
        .from('summaries')
        .update(summary)
        .match({ id });

    if (error) throw error;
    return data;
};

export const deleteSummary = async (id) => {
    const { data, error } = await supabase
        .from('summaries')
        .delete()
        .match({ id });

    if (error) throw error;
    return data;
};
