import { n as supabase } from "./client-vUMwI8Or.js";
import { r as listMembershipPlansPublic } from "./marketplace-CjC09cF_.js";
import { t as SiteShell } from "./SiteShell-CcWjM9Vs.js";
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { useQuery } from "@tanstack/react-query";
import { Check, Crown, Shield, Star, Zap } from "lucide-react";
//#region src/routes/memberships.tsx?tsr-split=component
var tierIcons = {
	silver: Shield,
	gold: Star,
	platinum: Crown
};
var tierColors = {
	silver: "border-slate-300 bg-gradient-to-b from-slate-50 to-white",
	gold: "border-amber-300 bg-gradient-to-b from-amber-50 to-white",
	platinum: "border-violet-300 bg-gradient-to-b from-violet-50 to-white"
};
var tierBadgeColors = {
	silver: "bg-slate-500 text-white",
	gold: "bg-amber-500 text-white",
	platinum: "bg-violet-600 text-white"
};
function MembershipsPage() {
	const { data: plans = [] } = useQuery({
		queryKey: ["membership-plans"],
		queryFn: listMembershipPlansPublic
	});
	const [user, setUser] = useState(null);
	useEffect(() => {
		supabase.auth.getUser().then(({ data }) => setUser(data.user));
	}, []);
	return /* @__PURE__ */ jsxs(SiteShell, { children: [/* @__PURE__ */ jsx("section", {
		className: "bg-mesh py-20 lg:py-28",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-4xl px-6 text-center",
			children: [/* @__PURE__ */ jsxs("h1", {
				className: "text-balance text-3xl font-semibold md:text-5xl",
				children: ["Become a ", /* @__PURE__ */ jsx("span", {
					className: "gradient-text",
					children: "Verified Member"
				})]
			}), /* @__PURE__ */ jsx("p", {
				className: "mx-auto mt-5 max-w-2xl text-muted-foreground",
				children: "Unlock exclusive discounts, priority support, and premium resources. Choose the plan that fits your needs."
			})]
		})
	}), /* @__PURE__ */ jsx("section", {
		className: "bg-background py-16",
		children: /* @__PURE__ */ jsx("div", {
			className: "mx-auto max-w-6xl px-6",
			children: /* @__PURE__ */ jsx("div", {
				className: "grid grid-cols-1 gap-6 md:grid-cols-3",
				children: plans.map((plan) => {
					const Icon = tierIcons[plan.tier] || Shield;
					return /* @__PURE__ */ jsxs("div", {
						className: `relative flex flex-col rounded-3xl border-2 p-8 transition-all hover:-translate-y-1 hover:shadow-glow ${tierColors[plan.tier]}`,
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: `mb-4 inline-flex w-fit items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${tierBadgeColors[plan.tier]}`,
								children: [
									/* @__PURE__ */ jsx(Icon, { className: "size-3.5" }),
									" ",
									plan.tier
								]
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "text-xl font-semibold",
								children: plan.name
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: plan.description
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-6 flex items-baseline gap-1",
								children: [/* @__PURE__ */ jsxs("span", {
									className: "text-4xl font-bold",
									children: ["$", (plan.price_cents / 100).toFixed(0)]
								}), /* @__PURE__ */ jsxs("span", {
									className: "text-sm text-muted-foreground",
									children: ["/ ", plan.interval]
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-2 text-sm font-medium text-primary",
								children: [plan.discount_pct, "% discount on all services"]
							}),
							/* @__PURE__ */ jsx("ul", {
								className: "mt-6 flex-1 space-y-3",
								children: plan.benefits?.map((b, i) => /* @__PURE__ */ jsxs("li", {
									className: "flex items-start gap-2 text-sm text-muted-foreground",
									children: [
										/* @__PURE__ */ jsx(Check, { className: "mt-0.5 size-4 shrink-0 text-primary" }),
										" ",
										b
									]
								}, i))
							}),
							/* @__PURE__ */ jsxs(Link, {
								to: user ? "/checkout" : "/auth",
								search: user ? { membership: plan.id } : void 0,
								className: "mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-foreground py-3.5 text-sm font-semibold text-background transition-colors hover:bg-foreground/90",
								children: [/* @__PURE__ */ jsx(Zap, { className: "size-4" }), " Subscribe Now"]
							})
						]
					}, plan.id);
				})
			})
		})
	})] });
}
//#endregion
export { MembershipsPage as component };
