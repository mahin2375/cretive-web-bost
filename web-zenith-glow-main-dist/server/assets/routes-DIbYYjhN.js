import { t as SiteShell } from "./SiteShell-CcWjM9Vs.js";
import { a as useProjects, c as useVideos, i as seedVideos, n as seedTeam, o as useTeam, r as seedTestimonials, s as useTestimonials, t as seedProjects } from "./seed-content-B7sKsae0.js";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, ChevronDown, Code, Facebook, Gauge, Globe, Instagram, Layers, Linkedin, PenTool, Play, Search, Settings, ShoppingBag, Sparkles, Star, TrendingUp, Zap } from "lucide-react";
//#region src/assets/hero-greenhouse.jpg
var hero_greenhouse_default = "/assets/hero-greenhouse-B22F0Izn.jpg";
//#endregion
//#region src/routes/index.tsx?tsr-split=component
var services = [
	{
		icon: ShoppingBag,
		title: "Shopify Plus Mastery",
		desc: "Enterprise commerce with custom Liquid and headless architecture.",
		featured: true
	},
	{
		icon: Globe,
		title: "WordPress & Headless",
		desc: "Editorial CMS or Next.js front-ends for instant performance."
	},
	{
		icon: Layers,
		title: "WooCommerce",
		desc: "Scalable WooCommerce stores with custom checkout flows."
	},
	{
		icon: PenTool,
		title: "Landing Pages",
		desc: "Conversion-first pages launched in days, not weeks."
	},
	{
		icon: Code,
		title: "Custom Development",
		desc: "Apps, integrations, and bespoke functionality."
	},
	{
		icon: TrendingUp,
		title: "Website Redesign",
		desc: "Modern rebuilds that lift conversion and brand."
	},
	{
		icon: Gauge,
		title: "Speed Optimization",
		desc: "99+ Lighthouse scores and Core Web Vitals fixes."
	},
	{
		icon: Search,
		title: "SEO Setup",
		desc: "Technical SEO foundations and content strategy."
	},
	{
		icon: Settings,
		title: "Maintenance",
		desc: "Monthly care plans, monitoring, and updates."
	},
	{
		icon: Zap,
		title: "Conversion Audit",
		desc: "Heatmaps, A/B tests, and a roadmap to grow revenue."
	}
];
var faqs = [
	{
		q: "What is your typical project timeline?",
		a: "Most landing pages launch in 2 weeks. Standard Shopify or WordPress builds run 4–8 weeks. Enterprise migrations 8–16 weeks."
	},
	{
		q: "How does the free 5-product Shopify store work?",
		a: "We design and develop a clean, conversion-ready store with up to 5 products, theme setup, and payment gateway, no strings attached. Limited spots monthly."
	},
	{
		q: "Do you provide ongoing maintenance?",
		a: "Yes — monthly care plans include hosting checks, security, performance monitoring, and a block of development hours."
	},
	{
		q: "Can you migrate my existing site?",
		a: "Absolutely. We handle WordPress ↔ Shopify migrations and Shopify Basic → Plus upgrades with zero downtime."
	},
	{
		q: "Do you build outside Shopify and WordPress?",
		a: "Our focus is these two ecosystems where we deliver the best results. For other stacks, we'll recommend a trusted partner."
	}
];
function HomePage() {
	return /* @__PURE__ */ jsxs(SiteShell, { children: [
		/* @__PURE__ */ jsx(Hero, {}),
		/* @__PURE__ */ jsx(Counters, {}),
		/* @__PURE__ */ jsx(Services, {}),
		/* @__PURE__ */ jsx(FreeOffer, {}),
		/* @__PURE__ */ jsx(Portfolio, {}),
		/* @__PURE__ */ jsx(Team, {}),
		/* @__PURE__ */ jsx(YouTube, {}),
		/* @__PURE__ */ jsx(Testimonials, {}),
		/* @__PURE__ */ jsx(FAQ, {}),
		/* @__PURE__ */ jsx(ContactCTA, {})
	] });
}
function Hero() {
	return /* @__PURE__ */ jsxs("section", {
		className: "relative overflow-hidden bg-mesh",
		children: [
			/* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute -top-32 -right-20 size-[28rem] rounded-full bg-primary/15 blur-3xl float-blob" }),
			/* @__PURE__ */ jsx("div", {
				className: "pointer-events-none absolute -bottom-32 -left-20 size-[28rem] rounded-full bg-primary-glow/20 blur-3xl float-blob",
				style: { animationDelay: "-4s" }
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-[1.15fr_0.85fr] lg:py-32",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "reveal",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary",
							children: [/* @__PURE__ */ jsxs("span", {
								className: "relative flex size-2",
								children: [/* @__PURE__ */ jsx("span", { className: "absolute inline-flex size-full animate-ping rounded-full bg-primary/60" }), /* @__PURE__ */ jsx("span", { className: "relative inline-flex size-2 rounded-full bg-primary" })]
							}), "Now accepting Q1 2026 projects"]
						}),
						/* @__PURE__ */ jsxs("h1", {
							className: "text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl",
							children: [
								"Grow Your Business with Powerful",
								" ",
								/* @__PURE__ */ jsx("span", {
									className: "gradient-text",
									children: "WordPress & Shopify"
								}),
								" Solutions"
							]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-8 max-w-[52ch] text-pretty text-lg leading-relaxed text-muted-foreground",
							children: "We design and engineer premium digital ecosystems for ambitious brands. Conversion-first, lightning-fast, and built to scale."
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-10 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ jsxs(Link, {
								to: "/contact",
								hash: "book",
								className: "magnetic-btn inline-flex items-center gap-2 rounded-2xl bg-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-glow ring-1 ring-primary/20 hover:bg-primary/90",
								children: ["Book Free Meeting ", /* @__PURE__ */ jsx(ArrowRight, { className: "size-4" })]
							}), /* @__PURE__ */ jsx(Link, {
								to: "/portfolio",
								className: "magnetic-btn inline-flex items-center gap-2 rounded-2xl border border-foreground/10 bg-card px-7 py-4 text-base font-semibold text-foreground hover:border-primary/40",
								children: "View Portfolio"
							})]
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "relative",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "overflow-hidden rounded-[2rem] shadow-soft ring-1 ring-foreground/5",
							children: /* @__PURE__ */ jsx("img", {
								src: hero_greenhouse_default,
								alt: "Lush modern greenhouse — Creative Web Boost",
								width: 1280,
								height: 1600,
								className: "aspect-[4/5] w-full object-cover",
								fetchPriority: "high"
							})
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "absolute -bottom-6 -left-6 hidden max-w-[260px] rounded-2xl glass-card p-5 shadow-glow xl:block",
							children: [/* @__PURE__ */ jsx("p", {
								className: "text-xs font-semibold uppercase tracking-wider text-primary",
								children: "Latest win"
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-2 text-sm leading-relaxed text-foreground/80",
								children: "+42% conversion lift for Leaf & Soil within 90 days of launch."
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "absolute -top-4 -right-4 hidden rounded-2xl glass-card p-4 shadow-glow xl:flex xl:items-center xl:gap-3",
							children: [/* @__PURE__ */ jsx(Sparkles, { className: "size-5 text-primary" }), /* @__PURE__ */ jsx("span", {
								className: "text-sm font-semibold",
								children: "99+ Lighthouse"
							})]
						})
					]
				})]
			})
		]
	});
}
function Counters() {
	return /* @__PURE__ */ jsx("section", {
		className: "border-y border-foreground/5 bg-card",
		children: /* @__PURE__ */ jsx("div", {
			className: "mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4",
			children: [
				{
					v: "400+",
					l: "Sites Launched"
				},
				{
					v: "$40M+",
					l: "Client Revenue"
				},
				{
					v: "32",
					l: "Countries Served"
				},
				{
					v: "4.9 / 5",
					l: "Client Rating"
				}
			].map((s) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
				className: "text-3xl font-semibold tracking-tight md:text-4xl",
				children: s.v
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-1 text-sm text-muted-foreground",
				children: s.l
			})] }, s.l))
		})
	});
}
function Services() {
	return /* @__PURE__ */ jsx("section", {
		id: "services",
		className: "bg-background py-24",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end",
					children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
						className: "mb-3 text-xs font-semibold uppercase tracking-wider text-primary",
						children: "Services"
					}), /* @__PURE__ */ jsx("h2", {
						className: "max-w-2xl text-balance text-3xl font-semibold md:text-4xl",
						children: "Comprehensive growth services for modern brands"
					})] }), /* @__PURE__ */ jsx("p", {
						className: "max-w-md text-pretty text-muted-foreground",
						children: "From bespoke Shopify builds to complex WordPress integrations — we handle the technical soil so you can grow."
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "grid grid-cols-1 gap-4 md:grid-cols-4 md:grid-rows-2",
					children: [/* @__PURE__ */ jsx("div", {
						className: "md:col-span-2 md:row-span-2 rounded-3xl p-px animated-border",
						children: /* @__PURE__ */ jsxs("div", {
							className: "flex h-full flex-col justify-between rounded-[calc(theme(borderRadius.3xl)-1px)] bg-card p-8",
							children: [/* @__PURE__ */ jsxs("div", { children: [
								/* @__PURE__ */ jsx("div", {
									className: "mb-6 grid size-12 place-items-center rounded-xl bg-primary/10 text-primary",
									children: /* @__PURE__ */ jsx(ShoppingBag, { className: "size-6" })
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "text-2xl font-semibold",
									children: "Shopify Plus Mastery"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-3 max-w-md text-sm leading-relaxed text-muted-foreground",
									children: "Enterprise-grade commerce with custom Liquid, headless architecture, and bespoke checkout flows that turn browsers into buyers."
								})
							] }), /* @__PURE__ */ jsx("ul", {
								className: "mt-8 flex flex-wrap gap-2",
								children: [
									"Liquid",
									"Hydrogen",
									"Plus",
									"Headless"
								].map((t) => /* @__PURE__ */ jsx("li", {
									className: "rounded-full bg-mint px-3 py-1 text-xs font-medium text-leaf-dark",
									children: t
								}, t))
							})]
						})
					}), services.slice(1, 7).map((s) => /* @__PURE__ */ jsxs("div", {
						className: "group rounded-3xl border border-foreground/5 bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-glow",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "mb-4 grid size-10 place-items-center rounded-lg bg-mint text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground",
								children: /* @__PURE__ */ jsx(s.icon, { className: "size-5" })
							}),
							/* @__PURE__ */ jsx("h4", {
								className: "font-semibold",
								children: s.title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-2 text-xs leading-relaxed text-muted-foreground",
								children: s.desc
							})
						]
					}, s.title))]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-4 grid grid-cols-1 gap-4 md:grid-cols-3",
					children: services.slice(7).map((s) => /* @__PURE__ */ jsxs("div", {
						className: "rounded-3xl border border-foreground/5 bg-card p-6 hover:border-primary/30",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "mb-4 grid size-10 place-items-center rounded-lg bg-mint text-primary",
								children: /* @__PURE__ */ jsx(s.icon, { className: "size-5" })
							}),
							/* @__PURE__ */ jsx("h4", {
								className: "font-semibold",
								children: s.title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-2 text-xs leading-relaxed text-muted-foreground",
								children: s.desc
							})
						]
					}, s.title))
				})
			]
		})
	});
}
function FreeOffer() {
	return /* @__PURE__ */ jsx("section", {
		className: "px-6 py-12",
		children: /* @__PURE__ */ jsxs("div", {
			className: "relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-leaf-dark p-12 text-white md:p-16",
			children: [
				/* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute -right-20 top-0 size-96 rounded-full bg-primary/30 blur-3xl" }),
				/* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute bottom-0 -left-20 size-72 rounded-full bg-primary-glow/20 blur-3xl" }),
				/* @__PURE__ */ jsxs("div", {
					className: "relative grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-center",
					children: [/* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsxs("div", {
							className: "inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider",
							children: [/* @__PURE__ */ jsx(Sparkles, { className: "size-3.5" }), " Limited offer"]
						}),
						/* @__PURE__ */ jsxs("h2", {
							className: "mt-5 text-balance text-3xl font-semibold leading-tight md:text-4xl",
							children: [
								"We Build Your First 5-Product Shopify Store",
								" ",
								/* @__PURE__ */ jsx("span", {
									className: "text-primary-glow",
									children: "FREE"
								})
							]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-5 max-w-xl text-base leading-relaxed text-white/70",
							children: "Starting out? Get a professional store setup with theme configuration, 5 products, and payment gateway — on us. No strings, just a head start."
						}),
						/* @__PURE__ */ jsxs(Link, {
							to: "/contact",
							hash: "offer",
							className: "magnetic-btn mt-8 inline-flex items-center gap-2 rounded-2xl bg-white px-7 py-4 text-base font-semibold text-leaf-dark hover:bg-mint",
							children: ["Claim Your Free Store ", /* @__PURE__ */ jsx(ArrowRight, { className: "size-4" })]
						})
					] }), /* @__PURE__ */ jsx("ul", {
						className: "space-y-3 text-sm",
						children: [
							"Custom theme configuration",
							"5 conversion-ready product pages",
							"Payment gateway setup",
							"Mobile optimization",
							"Launch support"
						].map((f) => /* @__PURE__ */ jsxs("li", {
							className: "flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3",
							children: [/* @__PURE__ */ jsx("span", {
								className: "grid size-6 place-items-center rounded-full bg-primary text-primary-foreground",
								children: "✓"
							}), f]
						}, f))
					})]
				})
			]
		})
	});
}
function Portfolio() {
	const [filter, setFilter] = useState("All");
	const { data } = useProjects();
	const items = (data && data.length > 0 ? data : seedProjects).filter((p) => filter === "All" || p.category === filter);
	return /* @__PURE__ */ jsx("section", {
		id: "portfolio",
		className: "bg-background py-24",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end",
					children: [/* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx("p", {
							className: "mb-3 text-xs font-semibold uppercase tracking-wider text-primary",
							children: "Selected work"
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "text-balance text-3xl font-semibold md:text-4xl",
							children: "Portfolio highlights"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-3 text-muted-foreground",
							children: "Real brands. Real revenue. Real stories."
						})
					] }), /* @__PURE__ */ jsx("div", {
						className: "flex flex-wrap gap-2",
						children: [
							"All",
							"Shopify",
							"WordPress",
							"Landing Page"
						].map((f) => /* @__PURE__ */ jsx("button", {
							onClick: () => setFilter(f),
							className: `rounded-full px-4 py-2 text-sm font-medium transition-colors ${filter === f ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground hover:text-foreground"}`,
							children: f
						}, f))
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "grid grid-cols-1 gap-8 md:grid-cols-2",
					children: items.slice(0, 4).map((p) => /* @__PURE__ */ jsxs(Link, {
						to: "/portfolio",
						className: "group block",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "relative aspect-[4/3] overflow-hidden rounded-3xl bg-mint ring-1 ring-foreground/5",
							children: [p.cover_image && /* @__PURE__ */ jsx("img", {
								src: p.cover_image,
								alt: p.title,
								width: 1280,
								height: 960,
								loading: "lazy",
								className: "size-full object-cover transition-transform duration-700 group-hover:scale-105"
							}), /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-leaf-dark/40 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" })]
						}), /* @__PURE__ */ jsxs("div", {
							className: "mt-5 flex items-end justify-between gap-4",
							children: [/* @__PURE__ */ jsxs("div", { children: [
								/* @__PURE__ */ jsx("p", {
									className: "text-xs font-semibold uppercase tracking-wider text-primary",
									children: p.category
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "mt-1 text-xl font-semibold",
									children: p.title
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: p.description
								})
							] }), /* @__PURE__ */ jsx(ArrowRight, { className: "size-5 shrink-0 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-primary" })]
						})]
					}, p.id))
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-12 text-center",
					children: /* @__PURE__ */ jsxs(Link, {
						to: "/portfolio",
						className: "magnetic-btn inline-flex items-center gap-2 rounded-2xl border border-foreground/10 bg-card px-6 py-3 text-sm font-semibold hover:border-primary/40",
						children: ["View All Projects ", /* @__PURE__ */ jsx(ArrowRight, { className: "size-4" })]
					})
				})
			]
		})
	});
}
function Team() {
	const { data } = useTeam();
	const items = data && data.length > 0 ? data : seedTeam;
	return /* @__PURE__ */ jsx("section", {
		className: "bg-mint/40 py-24",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "mb-16 text-center",
				children: [/* @__PURE__ */ jsx("p", {
					className: "mb-3 text-xs font-semibold uppercase tracking-wider text-primary",
					children: "The team"
				}), /* @__PURE__ */ jsx("h2", {
					className: "text-balance text-3xl font-semibold md:text-4xl",
					children: "The cultivators behind your growth"
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4",
				children: items.map((m) => /* @__PURE__ */ jsxs("div", {
					className: "group rounded-3xl border border-foreground/5 bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-glow",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "overflow-hidden rounded-2xl bg-mint",
							children: m.photo && /* @__PURE__ */ jsx("img", {
								src: m.photo,
								alt: m.name,
								width: 512,
								height: 512,
								loading: "lazy",
								className: "aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
							})
						}),
						/* @__PURE__ */ jsx("h4", {
							className: "mt-5 text-lg font-semibold",
							children: m.name
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-sm text-muted-foreground",
							children: m.role
						}),
						m.bio && /* @__PURE__ */ jsx("p", {
							className: "mt-3 text-xs leading-relaxed text-muted-foreground",
							children: m.bio
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-4 flex gap-2",
							children: [
								m.facebook_url && /* @__PURE__ */ jsx("a", {
									href: m.facebook_url,
									"aria-label": `${m.name} on Facebook`,
									className: "grid size-8 place-items-center rounded-lg bg-mint text-muted-foreground hover:bg-primary hover:text-primary-foreground",
									children: /* @__PURE__ */ jsx(Facebook, { className: "size-3.5" })
								}),
								m.instagram_url && /* @__PURE__ */ jsx("a", {
									href: m.instagram_url,
									"aria-label": `${m.name} on Instagram`,
									className: "grid size-8 place-items-center rounded-lg bg-mint text-muted-foreground hover:bg-primary hover:text-primary-foreground",
									children: /* @__PURE__ */ jsx(Instagram, { className: "size-3.5" })
								}),
								m.linkedin_url && /* @__PURE__ */ jsx("a", {
									href: m.linkedin_url,
									"aria-label": `${m.name} on LinkedIn`,
									className: "grid size-8 place-items-center rounded-lg bg-mint text-muted-foreground hover:bg-primary hover:text-primary-foreground",
									children: /* @__PURE__ */ jsx(Linkedin, { className: "size-3.5" })
								})
							]
						})
					]
				}, m.id))
			})]
		})
	});
}
function YouTube() {
	const { data } = useVideos();
	const items = data && data.length > 0 ? data : seedVideos;
	return /* @__PURE__ */ jsx("section", {
		className: "bg-background py-24",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end",
				children: [/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx("p", {
						className: "mb-3 text-xs font-semibold uppercase tracking-wider text-primary",
						children: "YouTube"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "text-balance text-3xl font-semibold md:text-4xl",
						children: "Learn from our studio"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-3 text-muted-foreground",
						children: "Weekly insights on Shopify, WordPress, and conversion design."
					})
				] }), /* @__PURE__ */ jsxs("a", {
					href: "https://youtube.com/@creativewebboost",
					target: "_blank",
					rel: "noreferrer",
					className: "magnetic-btn inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground",
					children: ["Watch on YouTube ", /* @__PURE__ */ jsx(ArrowRight, { className: "size-4" })]
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "grid grid-cols-1 gap-6 md:grid-cols-3",
				children: items.slice(0, 3).map((v) => /* @__PURE__ */ jsxs("a", {
					href: v.youtube_url,
					target: "_blank",
					rel: "noreferrer",
					className: "group block overflow-hidden rounded-3xl border border-foreground/5 bg-card transition-all hover:-translate-y-1 hover:shadow-glow",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "relative aspect-video overflow-hidden bg-mint",
						children: [v.thumbnail && /* @__PURE__ */ jsx("img", {
							src: v.thumbnail,
							alt: v.title,
							width: 1280,
							height: 720,
							loading: "lazy",
							className: "size-full object-cover transition-transform duration-500 group-hover:scale-105"
						}), /* @__PURE__ */ jsx("div", {
							className: "absolute inset-0 grid place-items-center bg-leaf-dark/30 opacity-0 transition-opacity group-hover:opacity-100",
							children: /* @__PURE__ */ jsx("span", {
								className: "grid size-14 place-items-center rounded-full bg-white text-leaf-dark shadow-glow",
								children: /* @__PURE__ */ jsx(Play, { className: "size-6 fill-current" })
							})
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "p-5",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "text-xs font-semibold uppercase tracking-wider text-primary",
								children: v.category
							}),
							/* @__PURE__ */ jsx("h4", {
								className: "mt-2 font-semibold",
								children: v.title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: v.channel_name
							})
						]
					})]
				}, v.id))
			})]
		})
	});
}
function Testimonials() {
	const { data } = useTestimonials();
	const items = data && data.length > 0 ? data : seedTestimonials;
	return /* @__PURE__ */ jsx("section", {
		className: "bg-mint/40 py-24",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "mb-12 text-center",
				children: [/* @__PURE__ */ jsx("p", {
					className: "mb-3 text-xs font-semibold uppercase tracking-wider text-primary",
					children: "Testimonials"
				}), /* @__PURE__ */ jsx("h2", {
					className: "text-balance text-3xl font-semibold md:text-4xl",
					children: "Trusted by ambitious teams"
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "grid grid-cols-1 gap-6 md:grid-cols-3",
				children: items.slice(0, 3).map((t) => /* @__PURE__ */ jsxs("div", {
					className: "rounded-3xl bg-card p-8 shadow-soft ring-1 ring-foreground/5",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "mb-4 flex gap-1 text-primary",
							children: Array.from({ length: t.rating }).map((_, i) => /* @__PURE__ */ jsx(Star, { className: "size-4 fill-current" }, i))
						}),
						/* @__PURE__ */ jsxs("p", {
							className: "text-foreground/80 italic leading-relaxed",
							children: [
								"“",
								t.content,
								"”"
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-6 flex items-center gap-3",
							children: [/* @__PURE__ */ jsx("div", {
								className: "grid size-10 place-items-center rounded-full bg-primary/10 text-sm font-semibold text-primary",
								children: t.client_name.charAt(0)
							}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
								className: "text-sm font-semibold",
								children: t.client_name
							}), /* @__PURE__ */ jsxs("p", {
								className: "text-xs text-muted-foreground",
								children: [t.client_role, t.company ? `, ${t.company}` : ""]
							})] })]
						})
					]
				}, t.id))
			})]
		})
	});
}
function FAQ() {
	const [open, setOpen] = useState(0);
	return /* @__PURE__ */ jsx("section", {
		className: "bg-background py-24",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-3xl px-6",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "mb-12 text-center",
				children: [/* @__PURE__ */ jsx("p", {
					className: "mb-3 text-xs font-semibold uppercase tracking-wider text-primary",
					children: "FAQ"
				}), /* @__PURE__ */ jsx("h2", {
					className: "text-balance text-3xl font-semibold md:text-4xl",
					children: "Frequently asked questions"
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "space-y-3",
				children: faqs.map((f, i) => /* @__PURE__ */ jsxs("button", {
					onClick: () => setOpen(open === i ? null : i),
					className: "block w-full overflow-hidden rounded-2xl border border-foreground/5 bg-card text-left transition-colors hover:border-primary/30",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between px-6 py-5",
						children: [/* @__PURE__ */ jsx("span", {
							className: "font-semibold",
							children: f.q
						}), /* @__PURE__ */ jsx(ChevronDown, { className: `size-4 shrink-0 text-primary transition-transform ${open === i ? "rotate-180" : ""}` })]
					}), /* @__PURE__ */ jsx("div", {
						className: `grid transition-all ${open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`,
						children: /* @__PURE__ */ jsx("div", {
							className: "overflow-hidden",
							children: /* @__PURE__ */ jsx("p", {
								className: "px-6 pb-6 text-sm leading-relaxed text-muted-foreground",
								children: f.a
							})
						})
					})]
				}, f.q))
			})]
		})
	});
}
function ContactCTA() {
	return /* @__PURE__ */ jsx("section", {
		className: "bg-background pb-24",
		children: /* @__PURE__ */ jsx("div", {
			className: "mx-auto max-w-7xl px-6",
			children: /* @__PURE__ */ jsxs("div", {
				className: "rounded-[2rem] bg-mesh border border-foreground/5 p-12 text-center md:p-20",
				children: [
					/* @__PURE__ */ jsxs("h2", {
						className: "mx-auto max-w-3xl text-balance text-3xl font-semibold md:text-5xl",
						children: ["Ready to start your next ", /* @__PURE__ */ jsx("span", {
							className: "gradient-text",
							children: "growth cycle?"
						})]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mx-auto mt-5 max-w-xl text-pretty text-muted-foreground",
						children: "Book a free 15-minute discovery call. We’ll map the fastest path from your current site to your next milestone."
					}),
					/* @__PURE__ */ jsxs(Link, {
						to: "/contact",
						hash: "book",
						className: "magnetic-btn mt-8 inline-flex items-center gap-2 rounded-2xl bg-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-glow",
						children: ["Book Free Meeting ", /* @__PURE__ */ jsx(ArrowRight, { className: "size-4" })]
					})
				]
			})
		})
	});
}
//#endregion
export { HomePage as component };
