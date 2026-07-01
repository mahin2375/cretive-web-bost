import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
//#region src/routes/services.$slug.tsx
var $$splitComponentImporter = () => import("./services._slug-D_xf2PwA.js");
var Route = createFileRoute("/services/$slug")({
	head: ({ params }) => ({ meta: [{ title: `${params.slug} — Service Marketplace` }, {
		name: "description",
		content: "Premium web development service with transparent pricing and packages."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
