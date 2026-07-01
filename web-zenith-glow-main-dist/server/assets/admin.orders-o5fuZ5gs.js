import { n as supabase } from "./client-vUMwI8Or.js";
import { t as AdminPage } from "./AdminShell-WBnAZE9v.js";
import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
//#region src/routes/_authenticated/admin.orders.tsx?tsr-split=component
var statusBadges = {
	pending: "bg-amber-50 text-amber-600",
	in_progress: "bg-primary/10 text-primary",
	revision: "bg-violet-50 text-violet-600",
	completed: "bg-emerald-50 text-emerald-600",
	cancelled: "bg-destructive/10 text-destructive"
};
function AdminOrdersPage() {
	const [filter, setFilter] = useState("");
	const { data: orders = [], isLoading } = useQuery({
		queryKey: ["admin-orders"],
		queryFn: async () => {
			const { data, error } = await supabase.from("orders").select("*,service:services(title,slug),package:service_packages(tier,name),user:profiles(email,display_name)").order("created_at", { ascending: false });
			if (error) throw error;
			return data ?? [];
		}
	});
	const filtered = filter ? orders.filter((o) => o.status === filter) : orders;
	return /* @__PURE__ */ jsxs(AdminPage, {
		title: "Orders",
		description: "Manage customer orders and update statuses.",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mb-6 flex flex-wrap gap-2",
			children: [/* @__PURE__ */ jsx("button", {
				onClick: () => setFilter(""),
				className: `rounded-full px-4 py-2 text-xs font-semibold ${!filter ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground"}`,
				children: "All"
			}), [
				"pending",
				"in_progress",
				"revision",
				"completed",
				"cancelled"
			].map((s) => /* @__PURE__ */ jsx("button", {
				onClick: () => setFilter(s),
				className: `rounded-full px-4 py-2 text-xs font-semibold ${filter === s ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground"}`,
				children: s.replace("_", " ")
			}, s))]
		}), isLoading ? /* @__PURE__ */ jsx("div", {
			className: "grid place-items-center p-12",
			children: /* @__PURE__ */ jsx(Loader2, { className: "size-6 animate-spin text-primary" })
		}) : filtered.length === 0 ? /* @__PURE__ */ jsx("p", {
			className: "p-12 text-center text-muted-foreground",
			children: "No orders found."
		}) : /* @__PURE__ */ jsx("div", {
			className: "overflow-hidden rounded-3xl border border-foreground/5 bg-card shadow-soft",
			children: /* @__PURE__ */ jsxs("table", {
				className: "w-full text-sm",
				children: [/* @__PURE__ */ jsx("thead", {
					className: "border-b border-foreground/5 bg-mint/40 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground",
					children: /* @__PURE__ */ jsxs("tr", { children: [
						/* @__PURE__ */ jsx("th", {
							className: "px-4 py-3",
							children: "Order"
						}),
						/* @__PURE__ */ jsx("th", {
							className: "px-4 py-3",
							children: "Customer"
						}),
						/* @__PURE__ */ jsx("th", {
							className: "px-4 py-3",
							children: "Service"
						}),
						/* @__PURE__ */ jsx("th", {
							className: "px-4 py-3",
							children: "Package"
						}),
						/* @__PURE__ */ jsx("th", {
							className: "px-4 py-3",
							children: "Total"
						}),
						/* @__PURE__ */ jsx("th", {
							className: "px-4 py-3",
							children: "Status"
						}),
						/* @__PURE__ */ jsx("th", {
							className: "px-4 py-3",
							children: "Paid"
						})
					] })
				}), /* @__PURE__ */ jsx("tbody", {
					className: "divide-y divide-foreground/5",
					children: filtered.map((order) => /* @__PURE__ */ jsxs("tr", {
						className: "hover:bg-mint/30",
						children: [
							/* @__PURE__ */ jsx("td", {
								className: "px-4 py-3 font-medium",
								children: order.order_number
							}),
							/* @__PURE__ */ jsx("td", {
								className: "px-4 py-3 text-muted-foreground",
								children: order.user?.display_name || order.user?.email || "—"
							}),
							/* @__PURE__ */ jsx("td", {
								className: "px-4 py-3",
								children: order.service?.title || "—"
							}),
							/* @__PURE__ */ jsx("td", {
								className: "px-4 py-3",
								children: order.package?.name || order.package?.tier || "—"
							}),
							/* @__PURE__ */ jsxs("td", {
								className: "px-4 py-3 font-medium",
								children: ["$", (order.total_cents / 100).toFixed(2)]
							}),
							/* @__PURE__ */ jsx("td", {
								className: "px-4 py-3",
								children: /* @__PURE__ */ jsx("span", {
									className: `inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${statusBadges[order.status] || "bg-muted text-muted-foreground"}`,
									children: order.status
								})
							}),
							/* @__PURE__ */ jsx("td", {
								className: "px-4 py-3",
								children: order.paid ? "Yes" : "No"
							})
						]
					}, order.id))
				})]
			})
		})]
	});
}
//#endregion
export { AdminOrdersPage as component };
