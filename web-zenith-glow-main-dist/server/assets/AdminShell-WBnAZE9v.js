import { n as supabase } from "./client-vUMwI8Or.js";
import { useEffect, useState } from "react";
import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { useQueryClient } from "@tanstack/react-query";
import { Boxes, Crown, FolderKanban, Layers, LayoutDashboard, Leaf, Loader2, LogOut, Mail, MessageSquare, Package, ShoppingBag, Tag, Users, Youtube } from "lucide-react";
//#region src/components/admin/AdminShell.tsx
var nav = [
	{
		to: "/admin",
		label: "Dashboard",
		icon: LayoutDashboard
	},
	{
		to: "/admin/services",
		label: "Services",
		icon: ShoppingBag
	},
	{
		to: "/admin/packages",
		label: "Packages",
		icon: Boxes
	},
	{
		to: "/admin/categories",
		label: "Categories",
		icon: Layers
	},
	{
		to: "/admin/orders",
		label: "Orders",
		icon: Package
	},
	{
		to: "/admin/memberships",
		label: "Memberships",
		icon: Crown
	},
	{
		to: "/admin/coupons",
		label: "Coupons",
		icon: Tag
	},
	{
		to: "/admin/projects",
		label: "Projects",
		icon: FolderKanban
	},
	{
		to: "/admin/team",
		label: "Team",
		icon: Users
	},
	{
		to: "/admin/videos",
		label: "YouTube",
		icon: Youtube
	},
	{
		to: "/admin/testimonials",
		label: "Testimonials",
		icon: MessageSquare
	},
	{
		to: "/admin/messages",
		label: "Messages",
		icon: Mail
	}
];
function AdminShell({ children }) {
	const path = useRouterState({ select: (s) => s.location.pathname });
	const nav2 = useNavigate();
	const qc = useQueryClient();
	const [role, setRole] = useState("loading");
	useEffect(() => {
		(async () => {
			const { data: u } = await supabase.auth.getUser();
			if (!u.user) {
				nav2({ to: "/auth" });
				return;
			}
			const { data, error } = await supabase.from("user_roles").select("role").eq("user_id", u.user.id);
			if (error) {
				setRole(null);
				return;
			}
			if (!data || data.length === 0) {
				setRole(null);
				return;
			}
			setRole(data.map((r) => r.role).includes("admin") ? "admin" : "editor");
		})();
	}, [nav2]);
	async function signOut() {
		await qc.cancelQueries();
		qc.clear();
		await supabase.auth.signOut();
		nav2({
			to: "/auth",
			replace: true
		});
	}
	if (role === "loading") return /* @__PURE__ */ jsx("div", {
		className: "grid min-h-dvh place-items-center bg-mesh",
		children: /* @__PURE__ */ jsx(Loader2, { className: "size-6 animate-spin text-primary" })
	});
	if (role === null) return /* @__PURE__ */ jsx("div", {
		className: "grid min-h-dvh place-items-center bg-mesh p-6",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md rounded-3xl bg-card p-8 text-center shadow-soft",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-xl font-semibold",
					children: "No admin access"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Your account is signed in but doesn’t have an admin or editor role yet. Ask a Super Admin to grant you access."
				}),
				/* @__PURE__ */ jsx("button", {
					onClick: signOut,
					className: "mt-6 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground",
					children: "Sign out"
				})
			]
		})
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "grid min-h-dvh bg-mint/40 md:grid-cols-[260px_1fr]",
		children: [/* @__PURE__ */ jsxs("aside", {
			className: "hidden border-r border-foreground/5 bg-card md:flex md:flex-col",
			children: [
				/* @__PURE__ */ jsxs(Link, {
					to: "/",
					className: "flex items-center gap-2.5 border-b border-foreground/5 px-6 py-5 font-semibold",
					children: [/* @__PURE__ */ jsx("span", {
						className: "grid size-8 place-items-center rounded-lg bg-primary",
						children: /* @__PURE__ */ jsx(Leaf, { className: "size-4 text-primary-foreground" })
					}), "CreativeWebBoost"]
				}),
				/* @__PURE__ */ jsx("nav", {
					className: "flex-1 space-y-1 p-3",
					children: nav.map((n) => {
						const active = path === n.to;
						return /* @__PURE__ */ jsxs(Link, {
							to: n.to,
							className: `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${active ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-foreground/5 hover:text-foreground"}`,
							children: [
								/* @__PURE__ */ jsx(n.icon, { className: "size-4" }),
								" ",
								n.label
							]
						}, n.to);
					})
				}),
				/* @__PURE__ */ jsx("div", {
					className: "border-t border-foreground/5 p-3",
					children: /* @__PURE__ */ jsxs("button", {
						onClick: signOut,
						className: "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-destructive/10 hover:text-destructive",
						children: [/* @__PURE__ */ jsx(LogOut, { className: "size-4" }), " Sign out"]
					})
				})
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex flex-col",
			children: [/* @__PURE__ */ jsxs("header", {
				className: "flex items-center justify-between border-b border-foreground/5 bg-card px-6 py-4 md:hidden",
				children: [/* @__PURE__ */ jsx(Link, {
					to: "/admin",
					className: "font-semibold",
					children: "Admin"
				}), /* @__PURE__ */ jsx("button", {
					onClick: signOut,
					className: "text-sm text-muted-foreground",
					children: "Sign out"
				})]
			}), /* @__PURE__ */ jsx("main", {
				className: "flex-1 overflow-x-hidden p-6 md:p-10",
				children
			})]
		})]
	});
}
function AdminPage({ children, title, description }) {
	return /* @__PURE__ */ jsx(AdminShell, { children: /* @__PURE__ */ jsxs("div", {
		className: "mx-auto max-w-6xl",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mb-8",
			children: [/* @__PURE__ */ jsx("h1", {
				className: "text-3xl font-semibold tracking-tight",
				children: title
			}), description && /* @__PURE__ */ jsx("p", {
				className: "mt-1 text-muted-foreground",
				children: description
			})]
		}), children]
	}) });
}
//#endregion
export { AdminPage as t };
