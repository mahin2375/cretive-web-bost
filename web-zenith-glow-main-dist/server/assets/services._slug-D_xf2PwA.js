import { n as supabase } from "./client-vUMwI8Or.js";
import { t as Route } from "./services._slug-C93RVoDv.js";
import { t as getServicePublic } from "./marketplace-CjC09cF_.js";
import { t as SiteShell } from "./SiteShell-CcWjM9Vs.js";
import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useQuery } from "@tanstack/react-query";
import { Check, ChevronDown, ChevronUp, Clock, MessageCircle, RefreshCw, Shield, ShoppingCart, Star, Zap } from "lucide-react";
//#region src/routes/services.$slug.tsx?tsr-split=component
function ServiceDetailPage() {
	const { slug } = Route.useParams();
	const navigate = useNavigate();
	const [selectedTier, setSelectedTier] = useState("standard");
	const [openFaq, setOpenFaq] = useState(null);
	const [user, setUser] = useState(null);
	useEffect(() => {
		supabase.auth.getUser().then(({ data }) => setUser(data.user));
	}, []);
	const { data: service } = useQuery({
		queryKey: ["service", slug],
		queryFn: () => getServicePublic(slug)
	});
	const packages = useMemo(() => {
		if (!service?.packages) return [];
		return [
			"basic",
			"standard",
			"premium"
		].map((t) => service.packages.find((p) => p.tier === t)).filter(Boolean);
	}, [service]);
	const selectedPkg = packages.find((p) => p.tier === selectedTier);
	const reviews = service?.reviews?.filter((r) => r.approved) ?? [];
	const faq = Array.isArray(service?.faq) ? service.faq : [];
	const handleOrder = () => {
		if (!user) {
			navigate({ to: "/auth" });
			return;
		}
		navigate({
			to: "/checkout",
			search: {
				service: service.id,
				package: selectedPkg?.id
			}
		});
	};
	if (!service) return /* @__PURE__ */ jsx(SiteShell, { children: /* @__PURE__ */ jsx("div", {
		className: "grid min-h-[60vh] place-items-center text-muted-foreground",
		children: /* @__PURE__ */ jsx("p", { children: "Loading service..." })
	}) });
	return /* @__PURE__ */ jsx(SiteShell, { children: /* @__PURE__ */ jsx("div", {
		className: "bg-mesh pb-16 pt-10",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-2 text-xs text-muted-foreground",
				children: [
					/* @__PURE__ */ jsx(Link, {
						to: "/services",
						className: "hover:text-foreground",
						children: "Services"
					}),
					/* @__PURE__ */ jsx("span", { children: "/" }),
					service.category && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("span", { children: service.category.name }), /* @__PURE__ */ jsx("span", { children: "/" })] }),
					/* @__PURE__ */ jsx("span", {
						className: "text-foreground",
						children: service.title
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "mt-8 grid gap-10 lg:grid-cols-[1fr_380px]",
				children: [/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx("h1", {
						className: "text-2xl font-semibold md:text-4xl",
						children: service.title
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-3 flex flex-wrap items-center gap-4 text-sm text-muted-foreground",
						children: [service.rating_count > 0 && /* @__PURE__ */ jsxs("span", {
							className: "flex items-center gap-1",
							children: [
								/* @__PURE__ */ jsx(Star, { className: "size-4 fill-amber-400 text-amber-400" }),
								/* @__PURE__ */ jsx("span", {
									className: "font-medium text-foreground",
									children: service.rating_avg
								}),
								/* @__PURE__ */ jsxs("span", { children: [
									"(",
									service.rating_count,
									" reviews)"
								] })
							]
						}), service.category && /* @__PURE__ */ jsx("span", {
							className: "rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary",
							children: service.category.name
						})]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-6 overflow-hidden rounded-3xl bg-mint ring-1 ring-foreground/5",
						children: service.featured_image ? /* @__PURE__ */ jsx("img", {
							src: service.featured_image,
							alt: service.title,
							className: "aspect-video w-full object-cover"
						}) : /* @__PURE__ */ jsx("div", {
							className: "grid aspect-video place-items-center text-muted-foreground",
							children: "No featured image"
						})
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-10",
						children: [/* @__PURE__ */ jsx("h2", {
							className: "text-xl font-semibold",
							children: "About this service"
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-3 leading-relaxed text-muted-foreground",
							children: service.description
						})]
					}),
					service.features?.length > 0 && /* @__PURE__ */ jsxs("div", {
						className: "mt-10",
						children: [/* @__PURE__ */ jsx("h2", {
							className: "text-xl font-semibold",
							children: "What's included"
						}), /* @__PURE__ */ jsx("ul", {
							className: "mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2",
							children: service.features.map((f, i) => /* @__PURE__ */ jsxs("li", {
								className: "flex items-center gap-2 text-sm text-muted-foreground",
								children: [
									/* @__PURE__ */ jsx(Check, { className: "size-4 shrink-0 text-primary" }),
									" ",
									f
								]
							}, i))
						})]
					}),
					service.technologies?.length > 0 && /* @__PURE__ */ jsxs("div", {
						className: "mt-10",
						children: [/* @__PURE__ */ jsx("h2", {
							className: "text-xl font-semibold",
							children: "Technologies"
						}), /* @__PURE__ */ jsx("div", {
							className: "mt-3 flex flex-wrap gap-2",
							children: service.technologies.map((t, i) => /* @__PURE__ */ jsx("span", {
								className: "rounded-full bg-mint px-3 py-1 text-xs font-medium text-leaf-dark",
								children: t
							}, i))
						})]
					}),
					faq.length > 0 && /* @__PURE__ */ jsxs("div", {
						className: "mt-10",
						children: [/* @__PURE__ */ jsx("h2", {
							className: "text-xl font-semibold",
							children: "Frequently Asked Questions"
						}), /* @__PURE__ */ jsx("div", {
							className: "mt-4 space-y-2",
							children: faq.map((item, i) => /* @__PURE__ */ jsxs("div", {
								className: "rounded-2xl border border-foreground/5 bg-card",
								children: [/* @__PURE__ */ jsxs("button", {
									onClick: () => setOpenFaq(openFaq === i ? null : i),
									className: "flex w-full items-center justify-between px-5 py-4 text-left text-sm font-medium",
									children: [item.q, openFaq === i ? /* @__PURE__ */ jsx(ChevronUp, { className: "size-4" }) : /* @__PURE__ */ jsx(ChevronDown, { className: "size-4" })]
								}), openFaq === i && /* @__PURE__ */ jsx("div", {
									className: "px-5 pb-4 text-sm leading-relaxed text-muted-foreground",
									children: item.a
								})]
							}, i))
						})]
					}),
					reviews.length > 0 && /* @__PURE__ */ jsxs("div", {
						className: "mt-10",
						children: [/* @__PURE__ */ jsxs("h2", {
							className: "text-xl font-semibold",
							children: [
								"Reviews (",
								reviews.length,
								")"
							]
						}), /* @__PURE__ */ jsx("div", {
							className: "mt-4 space-y-4",
							children: reviews.map((r) => /* @__PURE__ */ jsxs("div", {
								className: "rounded-2xl border border-foreground/5 bg-card p-5",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ jsx("div", {
										className: "grid size-10 place-items-center rounded-full bg-mint text-xs font-bold text-leaf-dark",
										children: r.user?.display_name?.[0] ?? "U"
									}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
										className: "text-sm font-medium",
										children: r.user?.display_name ?? "Verified Buyer"
									}), /* @__PURE__ */ jsx("div", {
										className: "flex items-center gap-1",
										children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ jsx(Star, { className: `size-3 ${i < r.rating ? "fill-amber-400 text-amber-400" : "text-muted-foreground"}` }, i))
									})] })]
								}), /* @__PURE__ */ jsx("p", {
									className: "mt-3 text-sm text-muted-foreground",
									children: r.comment
								})]
							}, r.id))
						})]
					})
				] }), /* @__PURE__ */ jsx("div", {
					className: "lg:sticky lg:top-24 lg:self-start",
					children: /* @__PURE__ */ jsxs("div", {
						className: "rounded-3xl border border-foreground/5 bg-card p-6 shadow-soft",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "flex rounded-2xl bg-mint/50 p-1",
								children: packages.map((pkg) => /* @__PURE__ */ jsx("button", {
									onClick: () => setSelectedTier(pkg.tier),
									className: `flex-1 rounded-xl py-2.5 text-xs font-semibold transition-colors ${selectedTier === pkg.tier ? "bg-primary text-primary-foreground shadow-glow" : "text-muted-foreground hover:text-foreground"}`,
									children: pkg.name
								}, pkg.tier))
							}),
							selectedPkg && /* @__PURE__ */ jsxs("div", {
								className: "mt-6",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-baseline gap-1",
										children: [/* @__PURE__ */ jsxs("span", {
											className: "text-3xl font-bold",
											children: ["$", (selectedPkg.price_cents / 100).toFixed(0)]
										}), /* @__PURE__ */ jsx("span", {
											className: "text-sm text-muted-foreground",
											children: "USD"
										})]
									}),
									/* @__PURE__ */ jsx("p", {
										className: "mt-1 text-sm text-muted-foreground",
										children: selectedPkg.description
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "mt-4 flex items-center gap-4 text-xs text-muted-foreground",
										children: [/* @__PURE__ */ jsxs("span", {
											className: "flex items-center gap-1",
											children: [
												/* @__PURE__ */ jsx(Clock, { className: "size-3.5" }),
												" ",
												selectedPkg.delivery_days,
												" day",
												selectedPkg.delivery_days > 1 ? "s" : "",
												" delivery"
											]
										}), /* @__PURE__ */ jsxs("span", {
											className: "flex items-center gap-1",
											children: [
												/* @__PURE__ */ jsx(RefreshCw, { className: "size-3.5" }),
												selectedPkg.revisions === -1 ? "Unlimited" : selectedPkg.revisions,
												" revision",
												selectedPkg.revisions !== 1 ? "s" : ""
											]
										})]
									}),
									/* @__PURE__ */ jsx("ul", {
										className: "mt-5 space-y-2",
										children: selectedPkg.features?.map((f, i) => /* @__PURE__ */ jsxs("li", {
											className: "flex items-start gap-2 text-sm text-muted-foreground",
											children: [
												/* @__PURE__ */ jsx(Check, { className: "mt-0.5 size-4 shrink-0 text-primary" }),
												" ",
												f
											]
										}, i))
									}),
									/* @__PURE__ */ jsxs("button", {
										onClick: handleOrder,
										className: "mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-primary py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-colors hover:bg-primary/90",
										children: [/* @__PURE__ */ jsx(ShoppingCart, { className: "size-4" }), " Order Now"]
									}),
									/* @__PURE__ */ jsx("p", {
										className: "mt-3 text-center text-xs text-muted-foreground",
										children: !user ? "Sign in required to place an order" : "Secure checkout with order protection"
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-6 space-y-3 border-t border-foreground/5 pt-5",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-2 text-xs text-muted-foreground",
										children: [/* @__PURE__ */ jsx(Shield, { className: "size-4 text-primary" }), " Payment protection guaranteed"]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-2 text-xs text-muted-foreground",
										children: [/* @__PURE__ */ jsx(Zap, { className: "size-4 text-primary" }), " Priority delivery available"]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-2 text-xs text-muted-foreground",
										children: [/* @__PURE__ */ jsx(MessageCircle, { className: "size-4 text-primary" }), " 24/7 support included"]
									})
								]
							})
						]
					})
				})]
			})]
		})
	}) });
}
//#endregion
export { ServiceDetailPage as component };
