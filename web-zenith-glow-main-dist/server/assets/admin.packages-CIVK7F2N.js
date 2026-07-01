import { n as supabase } from "./client-vUMwI8Or.js";
import { t as AdminPage } from "./AdminShell-WBnAZE9v.js";
import { t as CrudPanel } from "./CrudPanel-BU2kqkYY.js";
import { jsx } from "react/jsx-runtime";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
//#region src/routes/_authenticated/admin.packages.tsx?tsr-split=component
function AdminPackagesPage() {
	const { data: services, isLoading } = useQuery({
		queryKey: ["admin-services-min"],
		queryFn: async () => {
			const { data, error } = await supabase.from("services").select("id, title").order("title");
			if (error) throw error;
			return data;
		}
	});
	if (isLoading || !services) return /* @__PURE__ */ jsx(AdminPage, {
		title: "Service Packages",
		children: /* @__PURE__ */ jsx("div", {
			className: "grid place-items-center p-12",
			children: /* @__PURE__ */ jsx(Loader2, { className: "size-6 animate-spin text-primary" })
		})
	});
	const serviceIds = services.map((s) => s.id);
	const serviceLabels = Object.fromEntries(services.map((s) => [s.id, s.title]));
	return /* @__PURE__ */ jsx(AdminPage, {
		title: "Service Packages",
		description: "Basic / Standard / Premium tiers per service.",
		children: /* @__PURE__ */ jsx(CrudPanel, {
			table: "service_packages",
			queryKey: "admin-packages",
			orderBy: "service_id",
			fields: [
				{
					name: "service_id",
					label: "Service",
					type: "select",
					required: true,
					options: serviceIds,
					optionLabels: serviceLabels
				},
				{
					name: "tier",
					label: "Tier",
					type: "select",
					required: true,
					options: [
						"basic",
						"standard",
						"premium"
					]
				},
				{
					name: "name",
					label: "Package Name",
					type: "text",
					required: true
				},
				{
					name: "description",
					label: "Description",
					type: "textarea"
				},
				{
					name: "price_cents",
					label: "Price (cents)",
					type: "number",
					required: true
				},
				{
					name: "delivery_days",
					label: "Delivery Days",
					type: "number",
					required: true
				},
				{
					name: "revisions",
					label: "Revisions (-1 = unlimited)",
					type: "number",
					required: true
				},
				{
					name: "features",
					label: "Features",
					type: "tags",
					placeholder: "Comma separated"
				}
			],
			columns: [
				{
					key: "service_id",
					label: "Service",
					render: (r) => serviceLabels[r.service_id] ?? "—"
				},
				{
					key: "tier",
					label: "Tier"
				},
				{
					key: "name",
					label: "Name"
				},
				{
					key: "price_cents",
					label: "Price ¢"
				},
				{
					key: "delivery_days",
					label: "Days"
				}
			],
			defaultRow: {
				tier: "basic",
				price_cents: 0,
				delivery_days: 3,
				revisions: 1,
				features: []
			}
		})
	});
}
//#endregion
export { AdminPackagesPage as component };
