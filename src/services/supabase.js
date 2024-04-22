import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://tmtzodqgsdaekrhrjtfv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRtdHpvZHFnc2RhZWtyaHJqdGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM0ODM0NzEsImV4cCI6MjAyOTA1OTQ3MX0.GxZFWH1-ZbvGHYILtMcE5p-lxDCR2aFRWHPZe9rtWpE";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
