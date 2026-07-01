import { i as listServicesPublic, n as listCategoriesPublic } from "./marketplace-CjC09cF_.js";
import { t as SiteShell } from "./SiteShell-CcWjM9Vs.js";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { useQuery } from "@tanstack/react-query";
import { Clock, Search, SlidersHorizontal, Star, X } from "lucide-react";
//#region src/components/marketplace/ServiceCard.tsx
function ServiceCard({ service }) {
	const minPrice = service.packages?.length ? Math.min(...service.packages.map((p) => p.price_cents)) : 0;
	const minDelivery = service.packages?.length ? Math.min(...service.packages.map((p) => p.delivery_days)) : 0;
	return /* @__PURE__ */ jsxs(Link, {
		to: "/services/$slug",
		params: { slug: service.slug },
		className: "group flex flex-col overflow-hidden rounded-3xl border border-foreground/5 bg-card transition-all hover:-translate-y-1 hover:border-primary/20 hover:shadow-glow",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "relative aspect-[16/10] overflow-hidden bg-mint",
			children: [service.featured_image ? /* @__PURE__ */ jsx("img", {
				src: service.featured_image,
				alt: service.title,
				loading: "lazy",
				className: "size-full object-cover transition-transform duration-500 group-hover:scale-105"
			}) : /* @__PURE__ */ jsx("div", {
				className: "grid size-full place-items-center text-muted-foreground text-sm",
				children: "No image"
			}), /* @__PURE__ */ jsxs("div", {
				className: "absolute right-3 top-3 rounded-full bg-background/90 px-2.5 py-1 text-xs font-semibold backdrop-blur-sm",
				children: ["From $", (minPrice / 100).toFixed(0)]
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex flex-1 flex-col p-5",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "flex items-center gap-2",
					children: service.category && /* @__PURE__ */ jsx("span", {
						className: "rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary",
						children: service.category.name
					})
				}),
				/* @__PURE__ */ jsx("h3", {
					className: "mt-2 line-clamp-2 text-base font-semibold leading-snug",
					children: service.title
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-1.5 line-clamp-2 text-xs leading-relaxed text-muted-foreground",
					children: service.short_description
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-4 flex flex-wrap items-center gap-3 text-xs text-muted-foreground",
					children: [service.rating_count > 0 && /* @__PURE__ */ jsxs("span", {
						className: "flex items-center gap-1",
						children: [
							/* @__PURE__ */ jsx(Star, { className: "size-3.5 fill-amber-400 text-amber-400" }),
							/* @__PURE__ */ jsx("span", {
								className: "font-medium text-foreground",
								children: service.rating_avg
							}),
							/* @__PURE__ */ jsxs("span", { children: [
								"(",
								service.rating_count,
								")"
							] })
						]
					}), minDelivery > 0 && /* @__PURE__ */ jsxs("span", {
						className: "flex items-center gap-1",
						children: [
							/* @__PURE__ */ jsx(Clock, { className: "size-3.5" }),
							" ",
							minDelivery,
							" day",
							minDelivery > 1 ? "s" : ""
						]
					})]
				})
			]
		})]
	});
}
//#endregion
//#region src/routes/services.tsx?tsr-split=component
function ServicesPage() {
	const [search, setSearch] = useState("");
	const [category, setCategory] = useState("");
	const [sort, setSort] = useState("newest");
	const [showFilters, setShowFilters] = useState(false);
	const { data: services = [] } = useQuery({
		queryKey: [
			"services",
			category,
			search,
			sort
		],
		queryFn: () => listServicesPublic({
			category,
			search,
			sort
		})
	});
	const { data: categories = [] } = useQuery({
		queryKey: ["categories"],
		queryFn: listCategoriesPublic
	});
	const activeFilters = [category && "Category", search && "Search"].filter(Boolean);
	return /* @__PURE__ */ jsxs(SiteShell, { children: [/* @__PURE__ */ jsx("section", {
		className: "bg-mesh py-20 lg:py-24",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "text-center",
					children: [/* @__PURE__ */ jsxs("h1", {
						className: "text-balance text-3xl font-semibold md:text-5xl",
						children: ["Services ", /* @__PURE__ */ jsx("span", {
							className: "gradient-text",
							children: "Marketplace"
						})]
					}), /* @__PURE__ */ jsx("p", {
						className: "mx-auto mt-4 max-w-2xl text-muted-foreground",
						children: "Browse our catalog of premium web development services. Each service includes detailed packages, transparent pricing, and delivery timelines."
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mx-auto mt-10 flex max-w-3xl flex-col gap-3 md:flex-row",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "relative flex-1",
						children: [/* @__PURE__ */ jsx(Search, { className: "absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ jsx("input", {
							type: "text",
							value: search,
							onChange: (e) => setSearch(e.target.value),
							placeholder: "Search services...",
							className: "h-12 w-full rounded-2xl border border-foreground/10 bg-card pl-10 pr-4 text-sm outline-none ring-primary/30 transition-shadow focus:ring-2"
						})]
					}), /* @__PURE__ */ jsxs("button", {
						onClick: () => setShowFilters((v) => !v),
						className: "flex h-12 items-center justify-center gap-2 rounded-2xl border border-foreground/10 bg-card px-5 text-sm font-medium transition-colors hover:bg-foreground/5",
						children: [/* @__PURE__ */ jsx(SlidersHorizontal, { className: "size-4" }), " Filters"]
					})]
				}),
				showFilters && /* @__PURE__ */ jsxs("div", {
					className: "mx-auto mt-4 flex max-w-3xl flex-wrap items-center gap-3",
					children: [
						/* @__PURE__ */ jsxs("select", {
							value: category,
							onChange: (e) => setCategory(e.target.value),
							className: "h-10 rounded-xl border border-foreground/10 bg-card px-3 text-sm outline-none",
							children: [/* @__PURE__ */ jsx("option", {
								value: "",
								children: "All Categories"
							}), categories.map((c) => /* @__PURE__ */ jsx("option", {
								value: c.slug,
								children: c.name
							}, c.id))]
						}),
						/* @__PURE__ */ jsxs("select", {
							value: sort,
							onChange: (e) => setSort(e.target.value),
							className: "h-10 rounded-xl border border-foreground/10 bg-card px-3 text-sm outline-none",
							children: [
								/* @__PURE__ */ jsx("option", {
									value: "newest",
									children: "Newest"
								}),
								/* @__PURE__ */ jsx("option", {
									value: "popular",
									children: "Most Popular"
								}),
								/* @__PURE__ */ jsx("option", {
									value: "rating",
									children: "Highest Rated"
								}),
								/* @__PURE__ */ jsx("option", {
									value: "price_asc",
									children: "Price: Low to High"
								}),
								/* @__PURE__ */ jsx("option", {
									value: "price_desc",
									children: "Price: High to Low"
								})
							]
						}),
						activeFilters.length > 0 && /* @__PURE__ */ jsxs("button", {
							onClick: () => {
								setCategory("");
								setSearch("");
								setSort("newest");
							},
							className: "flex h-10 items-center gap-1 rounded-xl px-3 text-sm text-muted-foreground hover:text-foreground",
							children: [/* @__PURE__ */ jsx(X, { className: "size-3.5" }), " Clear"]
						})
					]
				})
			]
		})
	}), /* @__PURE__ */ jsx("section", {
		className: "bg-background py-16",
		children: /* @__PURE__ */ jsx("div", {
			className: "mx-auto max-w-7xl px-6",
			children: services.length === 0 ? /* @__PURE__ */ jsxs("div", {
				className: "py-20 text-center text-muted-foreground",
				children: [/* @__PURE__ */ jsx("p", {
					className: "text-lg font-medium",
					children: "No services found"
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm",
					children: "Try adjusting your filters or search terms."
				})]
			}) : /* @__PURE__ */ jsx("div", {
				className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: services.map((service) => /* @__PURE__ */ jsx(ServiceCard, { service }, service.id))
			})
		})
	})] });
}
//#endregion
export { ServicesPage as component };
