import { t as SiteShell } from "./SiteShell-CcWjM9Vs.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, Award, Heart, Sparkles, Target } from "lucide-react";
//#region src/routes/about.tsx?tsr-split=component
var values = [
	{
		icon: Target,
		title: "Conversion first",
		desc: "Beautiful is the baseline. We obsess over what makes users buy."
	},
	{
		icon: Sparkles,
		title: "Craft, always",
		desc: "Pixel-level care, animation polish, performance discipline."
	},
	{
		icon: Heart,
		title: "Partner energy",
		desc: "We work like an extension of your team — not a vendor."
	},
	{
		icon: Award,
		title: "Outcome-driven",
		desc: "We measure success by your numbers, not our deliverables."
	}
];
var milestones = [
	{
		year: "2019",
		title: "Founded",
		desc: "Three friends with a shared obsession for great e-commerce."
	},
	{
		year: "2021",
		title: "100 launches",
		desc: "Crossed our first hundred site launches and welcomed Shopify Plus."
	},
	{
		year: "2023",
		title: "Global team",
		desc: "Engineers and designers across 8 countries serving 32."
	},
	{
		year: "2025",
		title: "400+ launches",
		desc: "Half a decade of conversion-first work and $40M+ in client revenue."
	}
];
function AboutPage() {
	return /* @__PURE__ */ jsxs(SiteShell, { children: [
		/* @__PURE__ */ jsx("section", {
			className: "relative overflow-hidden bg-mesh py-24 lg:py-32",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto max-w-4xl px-6 text-center",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "mb-4 text-xs font-semibold uppercase tracking-wider text-primary",
						children: "About us"
					}),
					/* @__PURE__ */ jsxs("h1", {
						className: "text-balance text-4xl font-semibold leading-tight md:text-6xl",
						children: [
							"We’re a studio that ",
							/* @__PURE__ */ jsx("span", {
								className: "gradient-text",
								children: "cultivates"
							}),
							" digital growth."
						]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground",
						children: "Creative Web Boost is a small, senior team focused entirely on WordPress and Shopify ecosystems. We design, engineer, and grow modern brands online."
					})
				]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "bg-background py-24",
			children: /* @__PURE__ */ jsx("div", {
				className: "mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-3",
				children: [
					{
						title: "Mission",
						body: "Help ambitious brands grow online with conversion-first design and engineering."
					},
					{
						title: "Vision",
						body: "A world where every great brand has a digital presence that does it justice."
					},
					{
						title: "Promise",
						body: "Premium craft, transparent process, and measurable outcomes — every project."
					}
				].map((b) => /* @__PURE__ */ jsxs("div", {
					className: "rounded-3xl border border-foreground/5 bg-card p-8 shadow-soft",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "text-2xl font-semibold",
						children: b.title
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-3 leading-relaxed text-muted-foreground",
						children: b.body
					})]
				}, b.title))
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "bg-mint/40 py-24",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto max-w-7xl px-6",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "mb-16 max-w-2xl",
					children: [/* @__PURE__ */ jsx("p", {
						className: "mb-3 text-xs font-semibold uppercase tracking-wider text-primary",
						children: "Values"
					}), /* @__PURE__ */ jsx("h2", {
						className: "text-3xl font-semibold md:text-4xl",
						children: "What we believe"
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4",
					children: values.map((v) => /* @__PURE__ */ jsxs("div", {
						className: "rounded-3xl border border-foreground/5 bg-card p-6",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "mb-4 grid size-10 place-items-center rounded-lg bg-mint text-primary",
								children: /* @__PURE__ */ jsx(v.icon, { className: "size-5" })
							}),
							/* @__PURE__ */ jsx("h4", {
								className: "font-semibold",
								children: v.title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								children: v.desc
							})
						]
					}, v.title))
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "bg-background py-24",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto max-w-4xl px-6",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "mb-12",
						children: [/* @__PURE__ */ jsx("p", {
							className: "mb-3 text-xs font-semibold uppercase tracking-wider text-primary",
							children: "Timeline"
						}), /* @__PURE__ */ jsx("h2", {
							className: "text-3xl font-semibold md:text-4xl",
							children: "A short history of growth"
						})]
					}),
					/* @__PURE__ */ jsx("ol", {
						className: "relative border-l border-foreground/10 pl-8",
						children: milestones.map((m) => /* @__PURE__ */ jsxs("li", {
							className: "mb-10 last:mb-0",
							children: [
								/* @__PURE__ */ jsx("span", { className: "absolute -left-2 grid size-4 place-items-center rounded-full bg-primary ring-4 ring-background" }),
								/* @__PURE__ */ jsx("p", {
									className: "text-xs font-semibold uppercase tracking-wider text-primary",
									children: m.year
								}),
								/* @__PURE__ */ jsx("h4", {
									className: "mt-1 text-lg font-semibold",
									children: m.title
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: m.desc
								})
							]
						}, m.year))
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-12 text-center",
						children: /* @__PURE__ */ jsxs(Link, {
							to: "/contact",
							hash: "book",
							className: "magnetic-btn inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow",
							children: ["Start a project ", /* @__PURE__ */ jsx(ArrowRight, { className: "size-4" })]
						})
					})
				]
			})
		})
	] });
}
//#endregion
export { AboutPage as component };
