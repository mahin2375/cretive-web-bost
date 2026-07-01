import { n as supabase } from "./client-vUMwI8Or.js";
//#region src/lib/marketplace.ts
async function listServicesPublic(params) {
	let q = supabase.from("services").select("id,slug,title,short_description,featured_image,rating_avg,rating_count,popularity,created_at,category:categories(id,name,slug),packages(id,tier,name,price_cents,delivery_days,revisions,features)").eq("status", "active");
	if (params?.category) q = q.eq("category.slug", params.category);
	if (params?.search) q = q.or(`title.ilike.%${params.search}%,short_description.ilike.%${params.search}%`);
	if (params?.sort === "popular") q = q.order("popularity", { ascending: false });
	else if (params?.sort === "rating") q = q.order("rating_avg", { ascending: false });
	else if (params?.sort === "price_asc") q = q.order("packages.price_cents", { ascending: true });
	else if (params?.sort === "price_desc") q = q.order("packages.price_cents", { ascending: false });
	else q = q.order("created_at", { ascending: false });
	const { data, error } = await q;
	if (error) throw error;
	return data ?? [];
}
async function getServicePublic(slug) {
	const { data, error } = await supabase.from("services").select("*,category:categories(id,name,slug),packages(*),reviews(id,rating,comment,created_at,user:profiles(display_name,avatar_url))").eq("slug", slug).eq("status", "active").single();
	if (error) throw error;
	return data;
}
async function listCategoriesPublic() {
	const { data, error } = await supabase.from("categories").select("*").order("sort_order");
	if (error) throw error;
	return data ?? [];
}
async function listMembershipPlansPublic() {
	const { data, error } = await supabase.from("membership_plans").select("*").eq("active", true).order("sort_order");
	if (error) throw error;
	return data ?? [];
}
//#endregion
export { listServicesPublic as i, listCategoriesPublic as n, listMembershipPlansPublic as r, getServicePublic as t };
