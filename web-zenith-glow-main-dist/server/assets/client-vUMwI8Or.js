import { createClient } from "@supabase/supabase-js";
//#region \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
//#endregion
//#region src/integrations/supabase/client.ts
var client_exports = /* @__PURE__ */ __exportAll({ supabase: () => supabase });
function createSupabaseClient() {
	return createClient("https://tpqzimhueljnetwbdqay.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRwcXppbWh1ZWxqbmV0d2JkcWF5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE4NzM1NDIsImV4cCI6MjA5NzQ0OTU0Mn0.hg4SYSnhb9o-mJD3i4E-wRuSock7CUiDqSPLRSq1M9I", { auth: {
		storage: typeof window !== "undefined" ? localStorage : void 0,
		persistSession: true,
		autoRefreshToken: true
	} });
}
var _supabase;
var supabase = new Proxy({}, { get(_, prop, receiver) {
	if (!_supabase) _supabase = createSupabaseClient();
	return Reflect.get(_supabase, prop, receiver);
} });
//#endregion
export { supabase as n, client_exports as t };
