import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SPBASE_URL;
const supabaseKey = import.meta.env.VITE_SPBASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);
