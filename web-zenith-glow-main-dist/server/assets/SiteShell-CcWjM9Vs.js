import { n as supabase } from "./client-vUMwI8Or.js";
import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { Leaf, Mail, Menu, MessageCircle, Phone, X } from "lucide-react";
//#region src/components/site/SiteHeader.tsx
var nav = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/services",
		label: "Marketplace"
	},
	{
		to: "/memberships",
		label: "Memberships"
	},
	{
		to: "/portfolio",
		label: "Portfolio"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function SiteHeader() {
	const [open, setOpen] = useState(false);
	const [hasSession, setHasSession] = useState(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	useEffect(() => {
		supabase.auth.getSession().then(({ data }) => setHasSession(!!data.session));
		const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => setHasSession(!!s));
		return () => sub.subscription.unsubscribe();
	}, []);
	return /* @__PURE__ */ jsxs("header", {
		className: "sticky top-0 z-50 w-full border-b border-foreground/5 glass-card",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-6",
			children: [
				/* @__PURE__ */ jsxs(Link, {
					to: "/",
					className: "flex items-center gap-2.5 font-semibold tracking-tight",
					children: [/* @__PURE__ */ jsx("span", {
						className: "grid size-8 place-items-center rounded-lg bg-primary shadow-glow",
						children: /* @__PURE__ */ jsx(Leaf, {
							className: "size-4 text-primary-foreground",
							strokeWidth: 2.5
						})
					}), /* @__PURE__ */ jsx("span", {
						className: "text-lg",
						children: "CreativeWebBoost"
					})]
				}),
				/* @__PURE__ */ jsx("nav", {
					className: "hidden items-center gap-8 md:flex",
					children: nav.map((item) => /* @__PURE__ */ jsx(Link, {
						to: item.to,
						className: `text-sm font-medium transition-colors hover:text-primary ${pathname === item.to ? "text-foreground" : "text-muted-foreground"}`,
						children: item.label
					}, item.to))
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "hidden items-center gap-2 md:flex",
					children: [hasSession ? /* @__PURE__ */ jsx(Link, {
						to: "/admin",
						className: "rounded-full bg-foreground/5 px-4 py-2 text-sm font-medium text-foreground hover:bg-foreground/10",
						children: "Admin"
					}) : null, /* @__PURE__ */ jsx(Link, {
						to: "/contact",
						hash: "book",
						className: "magnetic-btn rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground ring-1 ring-primary/20 hover:bg-primary/90",
						children: "Book a Meeting"
					})]
				}),
				/* @__PURE__ */ jsx("button", {
					onClick: () => setOpen((v) => !v),
					className: "md:hidden rounded-md p-2 text-foreground/70 hover:bg-foreground/5",
					"aria-label": "Toggle menu",
					children: open ? /* @__PURE__ */ jsx(X, { className: "size-5" }) : /* @__PURE__ */ jsx(Menu, { className: "size-5" })
				})
			]
		}), open && /* @__PURE__ */ jsx("div", {
			className: "border-t border-foreground/5 bg-background md:hidden",
			children: /* @__PURE__ */ jsxs("nav", {
				className: "mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4",
				children: [nav.map((item) => /* @__PURE__ */ jsx(Link, {
					to: item.to,
					onClick: () => setOpen(false),
					className: "rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-foreground/5",
					children: item.label
				}, item.to)), /* @__PURE__ */ jsx(Link, {
					to: "/contact",
					hash: "book",
					onClick: () => setOpen(false),
					className: "mt-2 rounded-full bg-primary px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground",
					children: "Book a Meeting"
				})]
			})
		})]
	});
}
//#endregion
//#region src/components/site/SiteFooter.tsx
function SiteFooter() {
	return /* @__PURE__ */ jsx("footer", {
		className: "border-t border-foreground/5 bg-mint/40",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-6 py-16",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "grid gap-12 md:grid-cols-4",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "md:col-span-2",
						children: [/* @__PURE__ */ jsxs(Link, {
							to: "/",
							className: "flex items-center gap-2.5 font-semibold",
							children: [/* @__PURE__ */ jsx("span", {
								className: "grid size-8 place-items-center rounded-lg bg-primary shadow-glow",
								children: /* @__PURE__ */ jsx(Leaf, {
									className: "size-4 text-primary-foreground",
									strokeWidth: 2.5
								})
							}), /* @__PURE__ */ jsx("span", {
								className: "text-lg",
								children: "CreativeWebBoost"
							})]
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground",
							children: "Premium WordPress and Shopify development. We grow brands online with conversion-first design and engineering."
						})]
					}),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
						className: "text-sm font-semibold uppercase tracking-wider text-foreground",
						children: "Explore"
					}), /* @__PURE__ */ jsxs("ul", {
						className: "mt-4 space-y-2 text-sm text-muted-foreground",
						children: [
							/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
								to: "/services",
								className: "hover:text-primary",
								children: "Services"
							}) }),
							/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
								to: "/portfolio",
								className: "hover:text-primary",
								children: "Portfolio"
							}) }),
							/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
								to: "/about",
								className: "hover:text-primary",
								children: "About"
							}) }),
							/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
								to: "/contact",
								className: "hover:text-primary",
								children: "Contact"
							}) })
						]
					})] }),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
						className: "text-sm font-semibold uppercase tracking-wider text-foreground",
						children: "Connect"
					}), /* @__PURE__ */ jsxs("ul", {
						className: "mt-4 space-y-3 text-sm text-muted-foreground",
						children: [
							/* @__PURE__ */ jsxs("li", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ jsx(Mail, { className: "size-4 text-primary" }), "hello@creativewebboost.com"]
							}),
							/* @__PURE__ */ jsxs("li", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ jsx(Phone, { className: "size-4 text-primary" }), "+1 (555) 010-0420"]
							}),
							/* @__PURE__ */ jsxs("li", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ jsx(MessageCircle, { className: "size-4 text-primary" }), "WhatsApp Support"]
							})
						]
					})] })
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "mt-12 flex flex-col items-center justify-between gap-4 border-t border-foreground/5 pt-8 text-sm text-muted-foreground md:flex-row",
				children: [/* @__PURE__ */ jsxs("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Creative Web Boost. Cultivating digital ecosystems."
				] }), /* @__PURE__ */ jsxs("div", {
					className: "flex gap-6",
					children: [
						/* @__PURE__ */ jsx("a", {
							href: "#",
							className: "hover:text-primary",
							children: "Twitter"
						}),
						/* @__PURE__ */ jsx("a", {
							href: "#",
							className: "hover:text-primary",
							children: "LinkedIn"
						}),
						/* @__PURE__ */ jsx("a", {
							href: "#",
							className: "hover:text-primary",
							children: "YouTube"
						})
					]
				})]
			})]
		})
	});
}
//#endregion
//#region src/components/site/SiteShell.tsx
function SiteShell({ children }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-dvh flex flex-col bg-background",
		children: [
			/* @__PURE__ */ jsx(SiteHeader, {}),
			/* @__PURE__ */ jsx("main", {
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ jsx(SiteFooter, {})
		]
	});
}
//#endregion
export { SiteShell as t };
