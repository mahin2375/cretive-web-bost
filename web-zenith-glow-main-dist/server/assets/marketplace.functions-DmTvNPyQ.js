import { i as createServerFn, p as TSS_SERVER_FUNCTION } from "./esm-9EjmF9OT.js";
import { t as requireSupabaseAuth } from "./auth-middleware-Dpn8S0gM.js";
//#region node_modules/@tanstack/start-server-core/dist/esm/createServerRpc.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
//#endregion
//#region src/lib/marketplace.functions.ts?tss-serverfn-split
var listServices_createServerFn_handler = createServerRpc({
	id: "a38c4b451b330fcf828615786ee5e90bedb4febca4837c83467101dcfca649fe",
	name: "listServices",
	filename: "src/lib/marketplace.functions.ts"
}, (opts) => listServices.__executeServer(opts));
var listServices = createServerFn({ method: "GET" }).inputValidator((data) => data ?? {}).handler(listServices_createServerFn_handler, async ({ data }) => {
	const { createClient } = await import("@supabase/supabase-js");
	let q = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_PUBLISHABLE_KEY, { auth: {
		storage: void 0,
		persistSession: false,
		autoRefreshToken: false
	} }).from("services").select("id,slug,title,short_description,featured_image,rating_avg,rating_count,popularity,created_at,category:categories(id,name,slug),packages(id,tier,name,price_cents,delivery_days,revisions,features)").eq("status", "active");
	if (data?.category) q = q.eq("category.slug", data.category);
	if (data?.search) q = q.or(`title.ilike.%${data.search}%,short_description.ilike.%${data.search}%`);
	if (data?.sort === "popular") q = q.order("popularity", { ascending: false });
	else if (data?.sort === "rating") q = q.order("rating_avg", { ascending: false });
	else if (data?.sort === "price_asc") q = q.order("packages.price_cents", { ascending: true });
	else if (data?.sort === "price_desc") q = q.order("packages.price_cents", { ascending: false });
	else q = q.order("created_at", { ascending: false });
	const { data: rows, error } = await q;
	if (error) throw error;
	return rows ?? [];
});
var getService_createServerFn_handler = createServerRpc({
	id: "4733fe552c043bc4d85b0d2aa900353bb580b7525c616c1a1b56b66d266f0035",
	name: "getService",
	filename: "src/lib/marketplace.functions.ts"
}, (opts) => getService.__executeServer(opts));
var getService = createServerFn({ method: "GET" }).inputValidator((data) => data).handler(getService_createServerFn_handler, async ({ data }) => {
	const { createClient } = await import("@supabase/supabase-js");
	const { data: row, error } = await createClient(process.env.SUPABASE_URL, process.env.SUPABASE_PUBLISHABLE_KEY, { auth: {
		storage: void 0,
		persistSession: false,
		autoRefreshToken: false
	} }).from("services").select("*,category:categories(id,name,slug),packages(*),reviews(id,rating,comment,created_at,approved,user:profiles(id,display_name,avatar_url))").eq("slug", data.slug).eq("status", "active").single();
	if (error) throw error;
	return row;
});
var listCategories_createServerFn_handler = createServerRpc({
	id: "b26aa50745b61d721b8b74bdb186ee1b935d33b94926e2a9960892966bfcfb67",
	name: "listCategories",
	filename: "src/lib/marketplace.functions.ts"
}, (opts) => listCategories.__executeServer(opts));
var listCategories = createServerFn({ method: "GET" }).handler(listCategories_createServerFn_handler, async () => {
	const { createClient } = await import("@supabase/supabase-js");
	const { data, error } = await createClient(process.env.SUPABASE_URL, process.env.SUPABASE_PUBLISHABLE_KEY, { auth: {
		storage: void 0,
		persistSession: false,
		autoRefreshToken: false
	} }).from("categories").select("*").order("sort_order");
	if (error) throw error;
	return data ?? [];
});
var createOrder_createServerFn_handler = createServerRpc({
	id: "8b67d6cf3a9bf3f5cf47512b4587f7b54d07e2565fee2670db8d97a6b4843c67",
	name: "createOrder",
	filename: "src/lib/marketplace.functions.ts"
}, (opts) => createOrder.__executeServer(opts));
var createOrder = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((data) => data).handler(createOrder_createServerFn_handler, async ({ data, context }) => {
	const { supabaseAdmin } = await import("./client.server-D1oHePJa.js");
	const { data: pkg, error: pkgErr } = await supabaseAdmin.from("service_packages").select("*,service:services(id,slug,title)").eq("id", data.package_id).single();
	if (pkgErr || !pkg) throw new Error("Package not found");
	let totalCents = pkg.price_cents;
	let membershipDiscountCents = 0;
	let couponDiscountCents = 0;
	let couponId = null;
	const { data: membership } = await supabaseAdmin.from("user_memberships").select("plan:membership_plans(discount_pct)").eq("user_id", context.userId).eq("status", "active").order("current_period_end", { ascending: false }).limit(1).maybeSingle();
	if (membership?.plan?.discount_pct) {
		membershipDiscountCents = Math.round(pkg.price_cents * membership.plan.discount_pct / 100);
		totalCents -= membershipDiscountCents;
	}
	if (data.coupon_code) {
		const { data: coupon } = await supabaseAdmin.from("coupons").select("*").eq("code", data.coupon_code.trim().toUpperCase()).eq("active", true).maybeSingle();
		if (coupon) {
			if ((!coupon.max_uses || coupon.used_count < coupon.max_uses) && (!coupon.expires_at || new Date(coupon.expires_at) > /* @__PURE__ */ new Date()) && (!coupon.user_id || coupon.user_id === context.userId)) {
				couponId = coupon.id;
				if (coupon.type === "percent") couponDiscountCents = Math.round(totalCents * coupon.value / 100);
				else couponDiscountCents = Math.min(coupon.value, totalCents);
				totalCents -= couponDiscountCents;
			}
		}
	}
	const { data: order, error: orderErr } = await supabaseAdmin.from("orders").insert({
		user_id: context.userId,
		service_id: data.service_id,
		package_id: data.package_id,
		price_cents: pkg.price_cents,
		membership_discount_cents: membershipDiscountCents,
		coupon_discount_cents: couponDiscountCents,
		coupon_id: couponId,
		total_cents: Math.max(totalCents, 0),
		delivery_days: pkg.delivery_days,
		revisions: pkg.revisions,
		requirements: data.requirements
	}).select("*").single();
	if (orderErr) throw orderErr;
	if (couponId) {
		await supabaseAdmin.from("coupons").update({ used_count: pkg.used_count + 1 }).eq("id", couponId);
		await supabaseAdmin.from("coupon_redemptions").insert({
			coupon_id: couponId,
			user_id: context.userId,
			order_id: order.id
		});
	}
	return order;
});
var listMyOrders_createServerFn_handler = createServerRpc({
	id: "036e7916c6c2f455ce46094370fc9e687960bcd377edf14a0d04ee1333e62376",
	name: "listMyOrders",
	filename: "src/lib/marketplace.functions.ts"
}, (opts) => listMyOrders.__executeServer(opts));
var listMyOrders = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(listMyOrders_createServerFn_handler, async ({ context }) => {
	const { data, error } = await context.supabase.from("orders").select("id,order_number,status,total_cents,paid,created_at,service:services(title,slug,featured_image),package:service_packages(tier,name)").eq("user_id", context.userId).order("created_at", { ascending: false });
	if (error) throw error;
	return data ?? [];
});
var getMyOrder_createServerFn_handler = createServerRpc({
	id: "42a352c5e8254b516d0782b35208c09535d3fc309620e54ba3c9d579ba8e0471",
	name: "getMyOrder",
	filename: "src/lib/marketplace.functions.ts"
}, (opts) => getMyOrder.__executeServer(opts));
var getMyOrder = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).inputValidator((data) => data).handler(getMyOrder_createServerFn_handler, async ({ data, context }) => {
	const { data: row, error } = await context.supabase.from("orders").select("*,service:services(*),package:service_packages(*),status_history:order_status_history(*,changed_by:profiles(display_name)),messages:order_messages(*,sender:profiles(display_name,avatar_url))").eq("id", data.id).eq("user_id", context.userId).single();
	if (error) throw error;
	return row;
});
var listMembershipPlans_createServerFn_handler = createServerRpc({
	id: "e6a403c89aa64b4ad10a2d29127c18895991bea821f262495b9f14b51bb569a2",
	name: "listMembershipPlans",
	filename: "src/lib/marketplace.functions.ts"
}, (opts) => listMembershipPlans.__executeServer(opts));
var listMembershipPlans = createServerFn({ method: "GET" }).handler(listMembershipPlans_createServerFn_handler, async () => {
	const { createClient } = await import("@supabase/supabase-js");
	const { data, error } = await createClient(process.env.SUPABASE_URL, process.env.SUPABASE_PUBLISHABLE_KEY, { auth: {
		storage: void 0,
		persistSession: false,
		autoRefreshToken: false
	} }).from("membership_plans").select("*").eq("active", true).order("sort_order");
	if (error) throw error;
	return data ?? [];
});
var getMyMembership_createServerFn_handler = createServerRpc({
	id: "8616ce36ce6acd2b71299e21a92e14d78e50405ab804238f95fb2a67a81e0b6a",
	name: "getMyMembership",
	filename: "src/lib/marketplace.functions.ts"
}, (opts) => getMyMembership.__executeServer(opts));
var getMyMembership = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(getMyMembership_createServerFn_handler, async ({ context }) => {
	const { data, error } = await context.supabase.from("user_memberships").select("*,plan:membership_plans(*)").eq("user_id", context.userId).eq("status", "active").order("current_period_end", { ascending: false }).limit(1).maybeSingle();
	if (error) throw error;
	return data ?? null;
});
var listMyNotifications_createServerFn_handler = createServerRpc({
	id: "e140143d86e00fabc8ee9d28c356443aba28060416f05def8f4b6bd330e84f6b",
	name: "listMyNotifications",
	filename: "src/lib/marketplace.functions.ts"
}, (opts) => listMyNotifications.__executeServer(opts));
var listMyNotifications = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(listMyNotifications_createServerFn_handler, async ({ context }) => {
	const { data, error } = await context.supabase.from("notifications").select("*").eq("user_id", context.userId).order("created_at", { ascending: false }).limit(50);
	if (error) throw error;
	return data ?? [];
});
var markNotificationRead_createServerFn_handler = createServerRpc({
	id: "4d9a2d31311a85dce7e58634f4f243bb85c5191a29806165b666eb7329d2a1e1",
	name: "markNotificationRead",
	filename: "src/lib/marketplace.functions.ts"
}, (opts) => markNotificationRead.__executeServer(opts));
var markNotificationRead = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((data) => data).handler(markNotificationRead_createServerFn_handler, async ({ data, context }) => {
	const { error } = await context.supabase.from("notifications").update({ read_at: (/* @__PURE__ */ new Date()).toISOString() }).eq("id", data.id).eq("user_id", context.userId);
	if (error) throw error;
	return { ok: true };
});
//#endregion
export { createOrder_createServerFn_handler, getMyMembership_createServerFn_handler, getMyOrder_createServerFn_handler, getService_createServerFn_handler, listCategories_createServerFn_handler, listMembershipPlans_createServerFn_handler, listMyNotifications_createServerFn_handler, listMyOrders_createServerFn_handler, listServices_createServerFn_handler, markNotificationRead_createServerFn_handler };
