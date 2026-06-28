const SUPABASE_URL = "https://ktviajelfvskvsqqpkaq.supabase.co";

const SUPABASE_KEY = "sb_publishable_oRc8qzRuPLoY2e_YHrDUaA_wUaZGkAj";


// Create client
const db = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

// Make it available everywhere
window.db = db;

console.log("✅ Supabase Connected", db);