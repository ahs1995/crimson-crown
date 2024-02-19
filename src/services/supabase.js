import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://hpcmgolqmqwcoexcpvuu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhwY21nb2xxbXF3Y29leGNwdnV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU3Mzg3MzUsImV4cCI6MjAyMTMxNDczNX0.2_QTQjv0n-CWwAdw6EI6e7FVkQcgYkGBSZWPfQ2cqsU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
