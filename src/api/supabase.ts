
import { createClient } from '@supabase/supabase-js';
import type { Database } from './database.types';

const supabaseUrl = "https://tlerhfbhwgegtdhbhtlf.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRsZXJoZmJod2dlZ3RkaGJodGxmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYwOTc4NTQsImV4cCI6MjA2MTY3Mzg1NH0.407jBA_JUJIp4eq97iRLSruVUPdh4vHucWDsDnzFl_8";
const supabase = createClient<Database>(supabaseUrl, supabaseKey);

export default supabase;