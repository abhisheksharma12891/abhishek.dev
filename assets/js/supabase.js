const SUPABASE_URL = "https://ktviajelfvskvsqqpkaq.supabase.co";

const SUPABASE_KEY = "sb_publishable_oRc8qzRuPLoY2e_YHrDUaA_wUaZGkAj";

// Create client
window.db = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

console.log("✅ Supabase Connected", window.db);