const SUPABASE_URL = "https://ktviajelfvskvsqqpkaq.supabase.co";

const SUPABASE_KEY = "sb_publishable_oRc8qzRuPLoY2e_YHrDUaA_wUaZGkAj";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

console.log("✅ Supabase Connected", supabaseClient);