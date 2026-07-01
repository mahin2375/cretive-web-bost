import { n as supabase } from "./client-vUMwI8Or.js";
import { i as listMyOrders, n as getMyMembership, r as listMyNotifications } from "./marketplace.functions-CJ9URFu9.js";
import { t as SiteShell } from "./SiteShell-CcWjM9Vs.js";
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { useQuery } from "@tanstack/react-query";
import { AlertCircle, ArrowRight, Bell, CheckCircle, Clock, Crown, Loader2, Package, Shield, ShoppingBag, Star } from "lucide-react";
//#region src/routes/_authenticated/dashboard.tsx?tsr-split=component
var statusIcons = {
	pending: AlertCircle,
	in_progress: Clock,
	revision: Clock,
	completed: CheckCircle,
	cancelled: AlertCircle
};
var statusColors = {
	pending: "text-amber-500 bg-amber-50",
	in_progress: "text-primary bg-primary/10",
	revision: "text-violet-500 bg-violet-50",
	completed: "text-emerald-500 bg-emerald-50",
	cancelled: "text-destructive bg-destructive/10"
};
var tierIcons = {
	silver: Shield,
	gold: Star,
	platinum: Crown
};
var tierColors = {
	silver: "bg-slate-100 text-slate-600",
	gold: "bg-amber-100 text-amber-600",
	platinum: "bg-violet-100 text-violet-600"
};
function DashboardPage() {
	const [profile, setProfile] = useState(null);
	useEffect(() => {
		supabase.auth.getUser().then(({ data }) => {
			if (data.user) supabase.from("profiles").select("*").eq("id", data.user.id).single().then(({ data: p }) => setProfile(p));
		});
	}, []);
	const { data: orders = [], isLoading: ordersLoading } = useQuery({
		queryKey: ["my-orders"],
		queryFn: () => listMyOrders()
	});
	const { data: membership } = useQuery({
		queryKey: ["my-membership"],
		queryFn: () => getMyMembership()
	});
	const { data: notifications = [] } = useQuery({
		queryKey: ["my-notifications"],
		queryFn: () => listMyNotifications()
	});
	const activeOrders = orders.filter((o) => o.status !== "completed" && o.status !== "cancelled");
	const completedOrders = orders.filter((o) => o.status === "completed");
	const unreadCount = notifications.filter((n) => !n.read_at).length;
	return /* @__PURE__ */ jsx(SiteShell, { children: /* @__PURE__ */ jsxs("div", {
		className: "mx-auto max-w-6xl px-6 py-12",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("h1", {
					className: "text-2xl font-semibold",
					children: ["Welcome back, ", profile?.display_name || profile?.email?.split("@")[0] || "Member"]
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-1 text-sm text-muted-foreground",
					children: "Here is everything happening with your account."
				})] }), membership?.plan && /* @__PURE__ */ jsxs("div", {
					className: `inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider ${tierColors[membership.plan.tier] || "bg-mint text-leaf-dark"}`,
					children: [
						(() => {
							return /* @__PURE__ */ jsx(tierIcons[membership.plan.tier] || Shield, { className: "size-3.5" });
						})(),
						membership.plan.name,
						" Member"
					]
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mt-8 grid grid-cols-2 gap-4 md:grid-cols-4",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "rounded-2xl border border-foreground/5 bg-card p-5 shadow-soft",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2 text-xs font-medium text-muted-foreground",
							children: [/* @__PURE__ */ jsx(ShoppingBag, { className: "size-4 text-primary" }), " Total Orders"]
						}), /* @__PURE__ */ jsx("div", {
							className: "mt-2 text-2xl font-bold",
							children: orders.length
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "rounded-2xl border border-foreground/5 bg-card p-5 shadow-soft",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2 text-xs font-medium text-muted-foreground",
							children: [/* @__PURE__ */ jsx(Clock, { className: "size-4 text-amber-500" }), " Active"]
						}), /* @__PURE__ */ jsx("div", {
							className: "mt-2 text-2xl font-bold",
							children: activeOrders.length
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "rounded-2xl border border-foreground/5 bg-card p-5 shadow-soft",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2 text-xs font-medium text-muted-foreground",
							children: [/* @__PURE__ */ jsx(CheckCircle, { className: "size-4 text-emerald-500" }), " Completed"]
						}), /* @__PURE__ */ jsx("div", {
							className: "mt-2 text-2xl font-bold",
							children: completedOrders.length
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "rounded-2xl border border-foreground/5 bg-card p-5 shadow-soft",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2 text-xs font-medium text-muted-foreground",
							children: [/* @__PURE__ */ jsx(Bell, { className: "size-4 text-violet-500" }), " Notifications"]
						}), /* @__PURE__ */ jsx("div", {
							className: "mt-2 text-2xl font-bold",
							children: unreadCount
						})]
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mt-10",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "text-lg font-semibold",
						children: "Recent Orders"
					}), /* @__PURE__ */ jsxs(Link, {
						to: "/services",
						className: "flex items-center gap-1 text-sm font-medium text-primary hover:underline",
						children: ["Browse Services ", /* @__PURE__ */ jsx(ArrowRight, { className: "size-3.5" })]
					})]
				}), ordersLoading ? /* @__PURE__ */ jsxs("div", {
					className: "mt-6 flex items-center gap-2 text-muted-foreground",
					children: [/* @__PURE__ */ jsx(Loader2, { className: "size-4 animate-spin" }), " Loading orders..."]
				}) : orders.length === 0 ? /* @__PURE__ */ jsxs("div", {
					className: "mt-6 rounded-2xl border border-dashed border-foreground/10 bg-card p-10 text-center",
					children: [
						/* @__PURE__ */ jsx(Package, { className: "mx-auto size-8 text-muted-foreground" }),
						/* @__PURE__ */ jsx("p", {
							className: "mt-3 text-sm font-medium",
							children: "No orders yet"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-1 text-xs text-muted-foreground",
							children: "Browse services and place your first order."
						}),
						/* @__PURE__ */ jsxs(Link, {
							to: "/services",
							className: "mt-4 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground",
							children: ["Explore Services ", /* @__PURE__ */ jsx(ArrowRight, { className: "size-3.5" })]
						})
					]
				}) : /* @__PURE__ */ jsx("div", {
					className: "mt-6 space-y-3",
					children: orders.map((order) => {
						const StatusIcon = statusIcons[order.status] || AlertCircle;
						return /* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-4 rounded-2xl border border-foreground/5 bg-card p-4 shadow-soft",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "grid size-10 shrink-0 place-items-center rounded-xl bg-mint",
									children: /* @__PURE__ */ jsx(Package, { className: "size-5 text-primary" })
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex-1 min-w-0",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ jsx("span", {
											className: "text-sm font-medium",
											children: order.service?.title ?? "Service"
										}), /* @__PURE__ */ jsxs("span", {
											className: `inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${statusColors[order.status] || "text-muted-foreground bg-muted"}`,
											children: [
												/* @__PURE__ */ jsx(StatusIcon, { className: "size-3" }),
												" ",
												order.status.replace("_", " ")
											]
										})]
									}), /* @__PURE__ */ jsxs("p", {
										className: "mt-0.5 text-xs text-muted-foreground",
										children: [
											order.order_number,
											" · ",
											order.package?.name ?? order.package?.tier
										]
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "text-right",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "text-sm font-semibold",
										children: ["$", (order.total_cents / 100).toFixed(2)]
									}), /* @__PURE__ */ jsx("div", {
										className: "text-[10px] text-muted-foreground",
										children: order.paid ? "Paid" : "Unpaid"
									})]
								})
							]
						}, order.id);
					})
				})]
			}),
			!membership && /* @__PURE__ */ jsx("div", {
				className: "mt-10 rounded-3xl border border-foreground/5 bg-card p-8 shadow-soft",
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex flex-col items-start gap-6 md:flex-row md:items-center",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex-1",
						children: [/* @__PURE__ */ jsx("h3", {
							className: "text-lg font-semibold",
							children: "Become a Verified Member"
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: "Unlock discounts, priority support, and exclusive resources."
						})]
					}), /* @__PURE__ */ jsxs(Link, {
						to: "/memberships",
						className: "inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow",
						children: ["View Plans ", /* @__PURE__ */ jsx(ArrowRight, { className: "size-3.5" })]
					})]
				})
			})
		]
	}) });
}
//#endregion
export { DashboardPage as component };
