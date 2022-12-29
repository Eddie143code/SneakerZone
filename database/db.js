import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_DATABASE_URL;
const key = process.env.NEXT_PUBLIC_API;
const supabase = createClient(url, key);

export default supabase;
