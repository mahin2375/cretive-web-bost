import { t as AdminPage } from "./AdminShell-WBnAZE9v.js";
import { t as CrudPanel } from "./CrudPanel-BU2kqkYY.js";
import { jsx } from "react/jsx-runtime";
//#region src/routes/_authenticated/admin.testimonials.tsx?tsr-split=component
var fields = [
	{
		name: "client_name",
		label: "Client name",
		type: "text",
		required: true
	},
	{
		name: "client_role",
		label: "Role",
		type: "text"
	},
	{
		name: "company",
		label: "Company",
		type: "text"
	},
	{
		name: "avatar",
		label: "Avatar URL",
		type: "url"
	},
	{
		name: "content",
		label: "Testimonial",
		type: "textarea",
		required: true
	},
	{
		name: "rating",
		label: "Rating (1–5)",
		type: "number"
	},
	{
		name: "featured",
		label: "Featured",
		type: "boolean"
	},
	{
		name: "display_order",
		label: "Display order",
		type: "number"
	}
];
function TestimonialsAdmin() {
	return /* @__PURE__ */ jsx(AdminPage, {
		title: "Testimonials",
		description: "Manage client testimonials.",
		children: /* @__PURE__ */ jsx(CrudPanel, {
			table: "testimonials",
			queryKey: "admin-testimonials",
			fields,
			defaultRow: {
				featured: true,
				rating: 5,
				display_order: 0
			},
			columns: [
				{
					key: "client_name",
					label: "Client"
				},
				{
					key: "company",
					label: "Company"
				},
				{
					key: "rating",
					label: "Rating"
				},
				{
					key: "featured",
					label: "Featured",
					render: (r) => r.featured ? "⭐" : ""
				}
			]
		})
	});
}
//#endregion
export { TestimonialsAdmin as component };
