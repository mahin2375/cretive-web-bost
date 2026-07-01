import { n as supabase } from "./client-vUMwI8Or.js";
import { t as Route$24 } from "./services._slug-C93RVoDv.js";
import { useEffect, useState } from "react";
import { HeadContent, Link, Outlet, Scripts, createFileRoute, createRootRouteWithContext, createRouter, lazyRouteComponent, redirect, useRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
//#region src/styles.css?url
var styles_default = "/assets/styles-CZ6jgzf0.css";
//#endregion
//#region src/lib/lovable-error-reporting.ts
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
//#endregion
//#region src/components/ui/sonner.tsx
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ jsx(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
//#endregion
//#region src/routes/__root.tsx
function NotFoundComponent() {
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-6",
					children: /* @__PURE__ */ jsx(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	useEffect(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ jsx("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ jsx("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$23 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Creative Web Boost" },
			{
				name: "description",
				content: "CreativeWebBoost is a modern web development and CMS solutions agency dedicated to building high-performance, visually stunning, and business-focused websites."
			},
			{
				name: "author",
				content: "Lovable"
			},
			{
				property: "og:title",
				content: "Creative Web Boost"
			},
			{
				property: "og:description",
				content: "CreativeWebBoost is a modern web development and CMS solutions agency dedicated to building high-performance, visually stunning, and business-focused websites."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary"
			},
			{
				name: "twitter:site",
				content: "@Lovable"
			},
			{
				name: "twitter:title",
				content: "Creative Web Boost"
			},
			{
				name: "twitter:description",
				content: "CreativeWebBoost is a modern web development and CMS solutions agency dedicated to building high-performance, visually stunning, and business-focused websites."
			},
			{
				property: "og:image",
				content: "https://storage.googleapis.com/gpt-engineer-file-uploads/6vC5d8TRdtdWfAghIzgR5UcrC3G2/social-images/social-1782067415283-ChatGPT_Image_Jun_22,_2026,_12_42_17_AM.webp"
			},
			{
				name: "twitter:image",
				content: "https://storage.googleapis.com/gpt-engineer-file-uploads/6vC5d8TRdtdWfAghIzgR5UcrC3G2/social-images/social-1782067415283-ChatGPT_Image_Jun_22,_2026,_12_42_17_AM.webp"
			}
		],
		links: [{
			rel: "stylesheet",
			href: styles_default
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [/* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }), /* @__PURE__ */ jsxs("body", { children: [children, /* @__PURE__ */ jsx(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$23.useRouteContext();
	const router = useRouter();
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
		let cleanup;
		(async () => {
			const { supabase } = await import("./client-vUMwI8Or.js").then((n) => n.t);
			const { data: sub } = supabase.auth.onAuthStateChange((event) => {
				if (event !== "SIGNED_IN" && event !== "SIGNED_OUT" && event !== "USER_UPDATED") return;
				router.invalidate();
				if (event !== "SIGNED_OUT") queryClient.invalidateQueries();
			});
			cleanup = () => sub.subscription.unsubscribe();
		})();
		return () => cleanup?.();
	}, [queryClient, router]);
	return /* @__PURE__ */ jsxs(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ jsx(Outlet, {}), mounted && /* @__PURE__ */ jsx(Toaster$1, {
			richColors: true,
			position: "top-right"
		})]
	});
}
//#endregion
//#region src/routes/sitemap[.]xml.ts
var BASE_URL = "";
var Route$22 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[
		{
			path: "/",
			priority: "1.0",
			changefreq: "weekly"
		},
		{
			path: "/services",
			priority: "0.9",
			changefreq: "monthly"
		},
		{
			path: "/portfolio",
			priority: "0.9",
			changefreq: "weekly"
		},
		{
			path: "/about",
			priority: "0.7",
			changefreq: "monthly"
		},
		{
			path: "/contact",
			priority: "0.8",
			changefreq: "monthly"
		}
	].map((e) => `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`).join("\n")}\n</urlset>`;
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
//#endregion
//#region src/routes/services.tsx
var $$splitComponentImporter$21 = () => import("./services-BlTVYzD5.js");
var Route$21 = createFileRoute("/services")({
	head: () => ({ meta: [
		{ title: "Services Marketplace — Creative Web Boost" },
		{
			name: "description",
			content: "Browse premium web development services. WordPress, Shopify, landing pages, SEO, and more."
		},
		{
			property: "og:title",
			content: "Services Marketplace — Creative Web Boost"
		},
		{
			property: "og:description",
			content: "Browse premium web development services."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$21, "component")
});
//#endregion
//#region src/routes/portfolio.tsx
var $$splitComponentImporter$20 = () => import("./portfolio-D13BzXxL.js");
var Route$20 = createFileRoute("/portfolio")({
	head: () => ({ meta: [
		{ title: "Portfolio — Creative Web Boost" },
		{
			name: "description",
			content: "Selected WordPress and Shopify projects we've shipped for ambitious brands."
		},
		{
			property: "og:title",
			content: "Portfolio — Creative Web Boost"
		},
		{
			property: "og:description",
			content: "Real brands. Real revenue. Real results."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$20, "component")
});
//#endregion
//#region src/routes/memberships.tsx
var $$splitComponentImporter$19 = () => import("./memberships-D2_SAfT1.js");
var Route$19 = createFileRoute("/memberships")({
	head: () => ({ meta: [{ title: "Membership Plans — Creative Web Boost" }, {
		name: "description",
		content: "Join as a verified member and unlock exclusive discounts, priority support, and premium resources."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$19, "component")
});
//#endregion
//#region src/routes/contact.tsx
var $$splitComponentImporter$18 = () => import("./contact-K3PHhKxL.js");
var Route$18 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact & Book a Meeting — Creative Web Boost" },
		{
			name: "description",
			content: "Get in touch, send us your project brief, or book a free 15-minute discovery call."
		},
		{
			property: "og:title",
			content: "Contact — Creative Web Boost"
		},
		{
			property: "og:description",
			content: "Book a free meeting or send us a message."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$18, "component")
});
//#endregion
//#region src/routes/auth.tsx
var $$splitComponentImporter$17 = () => import("./auth-DMrZWTu1.js");
var Route$17 = createFileRoute("/auth")({
	head: () => ({ meta: [{ title: "Sign in — Creative Web Boost" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$17, "component")
});
//#endregion
//#region src/routes/about.tsx
var $$splitComponentImporter$16 = () => import("./about-YsknqfMN.js");
var Route$16 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About — Creative Web Boost" },
		{
			name: "description",
			content: "Meet Creative Web Boost — a team of strategists, designers and engineers cultivating digital growth for ambitious brands."
		},
		{
			property: "og:title",
			content: "About — Creative Web Boost"
		},
		{
			property: "og:description",
			content: "Our story, mission and values."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$16, "component")
});
//#endregion
//#region src/routes/_authenticated/route.tsx
var $$splitComponentImporter$15 = () => import("./route-Di7iQBCH.js");
var Route$15 = createFileRoute("/_authenticated")({
	ssr: false,
	beforeLoad: async () => {
		const { data, error } = await supabase.auth.getUser();
		if (error || !data.user) throw redirect({ to: "/auth" });
		return { user: data.user };
	},
	component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
//#endregion
//#region src/routes/index.tsx
var $$splitComponentImporter$14 = () => import("./routes-DIbYYjhN.js");
var Route$14 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Creative Web Boost — Premium WordPress & Shopify Development" },
		{
			name: "description",
			content: "Award-winning WordPress and Shopify development agency. Conversion-first design, lightning-fast performance, and a free 5-product Shopify store offer."
		},
		{
			property: "og:title",
			content: "Creative Web Boost — Premium WordPress & Shopify Development"
		},
		{
			property: "og:description",
			content: "Premium agency for WordPress & Shopify ecosystems. Book a free meeting."
		},
		{
			property: "og:type",
			content: "website"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
//#endregion
//#region src/routes/_authenticated/dashboard.tsx
var $$splitComponentImporter$13 = () => import("./dashboard-BM5lpV2u.js");
var Route$13 = createFileRoute("/_authenticated/dashboard")({
	head: () => ({ meta: [{ title: "Dashboard — Creative Web Boost" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
//#endregion
//#region src/routes/_authenticated/checkout.tsx
var $$splitComponentImporter$12 = () => import("./checkout-DdIk6sfc.js");
var Route$12 = createFileRoute("/_authenticated/checkout")({
	head: () => ({ meta: [{ title: "Checkout — Creative Web Boost" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
//#endregion
//#region src/routes/_authenticated/admin.index.tsx
var $$splitComponentImporter$11 = () => import("./admin.index-DPD6hyLI.js");
var Route$11 = createFileRoute("/_authenticated/admin/")({
	head: () => ({ meta: [{ title: "Admin — Creative Web Boost" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
//#endregion
//#region src/routes/_authenticated/admin.videos.tsx
var $$splitComponentImporter$10 = () => import("./admin.videos-DicWudFM.js");
var Route$10 = createFileRoute("/_authenticated/admin/videos")({
	head: () => ({ meta: [{ title: "YouTube — Admin" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
//#endregion
//#region src/routes/_authenticated/admin.testimonials.tsx
var $$splitComponentImporter$9 = () => import("./admin.testimonials-CEe1dgaF.js");
var Route$9 = createFileRoute("/_authenticated/admin/testimonials")({
	head: () => ({ meta: [{ title: "Testimonials — Admin" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
//#endregion
//#region src/routes/_authenticated/admin.team.tsx
var $$splitComponentImporter$8 = () => import("./admin.team-CiTdc0rI.js");
var Route$8 = createFileRoute("/_authenticated/admin/team")({
	head: () => ({ meta: [{ title: "Team — Admin" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
//#endregion
//#region src/routes/_authenticated/admin.services.tsx
var $$splitComponentImporter$7 = () => import("./admin.services-DGXD-6Ll.js");
var Route$7 = createFileRoute("/_authenticated/admin/services")({
	head: () => ({ meta: [{ title: "Services — Admin | Creative Web Boost" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
//#endregion
//#region src/routes/_authenticated/admin.projects.tsx
var $$splitComponentImporter$6 = () => import("./admin.projects-CcL_aLOu.js");
var Route$6 = createFileRoute("/_authenticated/admin/projects")({
	head: () => ({ meta: [{ title: "Projects — Admin" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
//#endregion
//#region src/routes/_authenticated/admin.packages.tsx
var $$splitComponentImporter$5 = () => import("./admin.packages-CIVK7F2N.js");
var Route$5 = createFileRoute("/_authenticated/admin/packages")({
	head: () => ({ meta: [{ title: "Service Packages — Admin" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
//#endregion
//#region src/routes/_authenticated/admin.orders.tsx
var $$splitComponentImporter$4 = () => import("./admin.orders-o5fuZ5gs.js");
var Route$4 = createFileRoute("/_authenticated/admin/orders")({
	head: () => ({ meta: [{ title: "Orders — Admin | Creative Web Boost" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
//#endregion
//#region src/routes/_authenticated/admin.messages.tsx
var $$splitComponentImporter$3 = () => import("./admin.messages-Cc8R3hft.js");
var Route$3 = createFileRoute("/_authenticated/admin/messages")({
	head: () => ({ meta: [{ title: "Messages — Admin" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
//#endregion
//#region src/routes/_authenticated/admin.memberships.tsx
var $$splitComponentImporter$2 = () => import("./admin.memberships-BbCoEod2.js");
var Route$2 = createFileRoute("/_authenticated/admin/memberships")({
	head: () => ({ meta: [{ title: "Memberships — Admin" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
//#endregion
//#region src/routes/_authenticated/admin.coupons.tsx
var $$splitComponentImporter$1 = () => import("./admin.coupons-B-IQwvnf.js");
var Route$1 = createFileRoute("/_authenticated/admin/coupons")({
	head: () => ({ meta: [{ title: "Coupons — Admin" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
//#endregion
//#region src/routes/_authenticated/admin.categories.tsx
var $$splitComponentImporter = () => import("./admin.categories-CsZCEHnp.js");
var Route = createFileRoute("/_authenticated/admin/categories")({
	head: () => ({ meta: [{ title: "Categories — Admin" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
//#region src/routeTree.gen.ts
var SitemapDotxmlRoute = Route$22.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$23
});
var ServicesRoute = Route$21.update({
	id: "/services",
	path: "/services",
	getParentRoute: () => Route$23
});
var PortfolioRoute = Route$20.update({
	id: "/portfolio",
	path: "/portfolio",
	getParentRoute: () => Route$23
});
var MembershipsRoute = Route$19.update({
	id: "/memberships",
	path: "/memberships",
	getParentRoute: () => Route$23
});
var ContactRoute = Route$18.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$23
});
var AuthRoute = Route$17.update({
	id: "/auth",
	path: "/auth",
	getParentRoute: () => Route$23
});
var AboutRoute = Route$16.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$23
});
var AuthenticatedRouteRoute = Route$15.update({
	id: "/_authenticated",
	getParentRoute: () => Route$23
});
var IndexRoute = Route$14.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$23
});
var ServicesSlugRoute = Route$24.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => ServicesRoute
});
var AuthenticatedDashboardRoute = Route$13.update({
	id: "/dashboard",
	path: "/dashboard",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedCheckoutRoute = Route$12.update({
	id: "/checkout",
	path: "/checkout",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedAdminIndexRoute = Route$11.update({
	id: "/admin/",
	path: "/admin/",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedAdminVideosRoute = Route$10.update({
	id: "/admin/videos",
	path: "/admin/videos",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedAdminTestimonialsRoute = Route$9.update({
	id: "/admin/testimonials",
	path: "/admin/testimonials",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedAdminTeamRoute = Route$8.update({
	id: "/admin/team",
	path: "/admin/team",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedAdminServicesRoute = Route$7.update({
	id: "/admin/services",
	path: "/admin/services",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedAdminProjectsRoute = Route$6.update({
	id: "/admin/projects",
	path: "/admin/projects",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedAdminPackagesRoute = Route$5.update({
	id: "/admin/packages",
	path: "/admin/packages",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedAdminOrdersRoute = Route$4.update({
	id: "/admin/orders",
	path: "/admin/orders",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedAdminMessagesRoute = Route$3.update({
	id: "/admin/messages",
	path: "/admin/messages",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedAdminMembershipsRoute = Route$2.update({
	id: "/admin/memberships",
	path: "/admin/memberships",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedAdminCouponsRoute = Route$1.update({
	id: "/admin/coupons",
	path: "/admin/coupons",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedRouteRouteChildren = {
	AuthenticatedCheckoutRoute,
	AuthenticatedDashboardRoute,
	AuthenticatedAdminCategoriesRoute: Route.update({
		id: "/admin/categories",
		path: "/admin/categories",
		getParentRoute: () => AuthenticatedRouteRoute
	}),
	AuthenticatedAdminCouponsRoute,
	AuthenticatedAdminMembershipsRoute,
	AuthenticatedAdminMessagesRoute,
	AuthenticatedAdminOrdersRoute,
	AuthenticatedAdminPackagesRoute,
	AuthenticatedAdminProjectsRoute,
	AuthenticatedAdminServicesRoute,
	AuthenticatedAdminTeamRoute,
	AuthenticatedAdminTestimonialsRoute,
	AuthenticatedAdminVideosRoute,
	AuthenticatedAdminIndexRoute
};
var AuthenticatedRouteRouteWithChildren = AuthenticatedRouteRoute._addFileChildren(AuthenticatedRouteRouteChildren);
var ServicesRouteChildren = { ServicesSlugRoute };
var rootRouteChildren = {
	IndexRoute,
	AuthenticatedRouteRoute: AuthenticatedRouteRouteWithChildren,
	AboutRoute,
	AuthRoute,
	ContactRoute,
	MembershipsRoute,
	PortfolioRoute,
	ServicesRoute: ServicesRoute._addFileChildren(ServicesRouteChildren),
	SitemapDotxmlRoute
};
var routeTree = Route$23._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.tsx
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
