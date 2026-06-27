const SUPABASE_URL = "https://ktviajelfvskvsqqpkaq.supabase.co";

const SUPABASE_KEY = "YOUR_PUBLISHABLE_KEY";

const supabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

console.log("✅ Supabase Connected", supabase);