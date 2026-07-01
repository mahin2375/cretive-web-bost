import { t as SiteShell } from "./SiteShell-CcWjM9Vs.js";
import { a as useProjects, t as seedProjects } from "./seed-content-B7sKsae0.js";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, ExternalLink, Search } from "lucide-react";
//#region src/routes/portfolio.tsx?tsr-split=component
function PortfolioPage() {
	const [filter, setFilter] = useState("All");
	const [search, setSearch] = useState("");
	const { data } = useProjects();
	const all = data && data.length > 0 ? data : seedProjects;
	const filters = [
		"All",
		"Shopify",
		"WordPress",
		"Landing Page",
		"Ecommerce"
	];
	const items = all.filter((p) => filter === "All" || p.category === filter).filter((p) => !search || p.title.toLowerCase().includes(search.toLowerCase()) || (p.client ?? "").toLowerCase().includes(search.toLowerCase()));
	return /* @__PURE__ */ jsxs(SiteShell, { children: [/* @__PURE__ */ jsx("section", {
		className: "bg-mesh py-24 lg:py-28",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-4xl px-6 text-center",
			children: [/* @__PURE__ */ jsx("p", {
				className: "mb-4 text-xs font-semibold uppercase tracking-wider text-primary",
				children: "Portfolio"
			}), /* @__PURE__ */ jsxs("h1", {
				className: "text-balance text-4xl font-semibold md:text-6xl",
				children: ["Selected works from our ", /* @__PURE__ */ jsx("span", {
					className: "gradient-text",
					children: "digital garden"
				})]
			})]
		})
	}), /* @__PURE__ */ jsx("section", {
		className: "bg-background py-16",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between",
					children: [/* @__PURE__ */ jsx("div", {
						className: "flex flex-wrap gap-2",
						children: filters.map((f) => /* @__PURE__ */ jsx("button", {
							onClick: () => setFilter(f),
							className: `rounded-full px-4 py-2 text-sm font-medium transition-colors ${filter === f ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground hover:text-foreground"}`,
							children: f
						}, f))
					}), /* @__PURE__ */ jsxs("div", {
						className: "relative md:w-72",
						children: [/* @__PURE__ */ jsx(Search, { className: "absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ jsx("input", {
							value: search,
							onChange: (e) => setSearch(e.target.value),
							placeholder: "Search projects",
							className: "w-full rounded-full border border-foreground/10 bg-card py-2.5 pl-10 pr-4 text-sm outline-none focus:border-primary"
						})]
					})]
				}),
				items.length === 0 ? /* @__PURE__ */ jsx("p", {
					className: "py-24 text-center text-muted-foreground",
					children: "No projects match your search."
				}) : /* @__PURE__ */ jsx("div", {
					className: "grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3",
					children: items.map((p) => /* @__PURE__ */ jsxs("div", {
						className: "group",
						children: [/* @__PURE__ */ jsx("div", {
							className: "relative aspect-[4/3] overflow-hidden rounded-3xl bg-mint ring-1 ring-foreground/5",
							children: p.cover_image && /* @__PURE__ */ jsx("img", {
								src: p.cover_image,
								alt: p.title,
								loading: "lazy",
								className: "size-full object-cover transition-transform duration-700 group-hover:scale-105"
							})
						}), /* @__PURE__ */ jsxs("div", {
							className: "mt-4 flex items-end justify-between gap-3",
							children: [/* @__PURE__ */ jsxs("div", { children: [
								/* @__PURE__ */ jsx("p", {
									className: "text-xs font-semibold uppercase tracking-wider text-primary",
									children: p.category
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "mt-1 text-lg font-semibold",
									children: p.title
								}),
								p.client && /* @__PURE__ */ jsx("p", {
									className: "text-sm text-muted-foreground",
									children: p.client
								})
							] }), p.live_url && /* @__PURE__ */ jsx("a", {
								href: p.live_url,
								target: "_blank",
								rel: "noreferrer",
								"aria-label": `Visit ${p.title}`,
								className: "grid size-9 place-items-center rounded-full bg-mint text-primary hover:bg-primary hover:text-primary-foreground",
								children: /* @__PURE__ */ jsx(ExternalLink, { className: "size-4" })
							})]
						})]
					}, p.id))
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-16 text-center",
					children: /* @__PURE__ */ jsxs(Link, {
						to: "/contact",
						hash: "book",
						className: "magnetic-btn inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow",
						children: ["Start your project ", /* @__PURE__ */ jsx(ArrowRight, { className: "size-4" })]
					})
				})
			]
		})
	})] });
}
//#endregion
export { PortfolioPage as component };
