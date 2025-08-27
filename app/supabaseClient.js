import { createClient } from "@supabase/supabase-js";

const supaBaseUrl = process.env.NEXT_PUBLIC_SUPABASE_PROJECT_URL;
const supaBaseApiKey = process.env.NEXT_PUBLIC_UPABASE_API_KEY;

export const supabase = createClient(supaBaseUrl, supaBaseApiKey);
