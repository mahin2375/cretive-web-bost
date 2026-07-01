import { t as AdminPage } from "./AdminShell-WBnAZE9v.js";
import { t as CrudPanel } from "./CrudPanel-BU2kqkYY.js";
import { jsx } from "react/jsx-runtime";
//#region src/routes/_authenticated/admin.projects.tsx?tsr-split=component
var fields = [
	{
		name: "title",
		label: "Title",
		type: "text",
		required: true
	},
	{
		name: "slug",
		label: "Slug",
		type: "text",
		required: true,
		placeholder: "nordic-oak"
	},
	{
		name: "category",
		label: "Category",
		type: "select",
		required: true,
		options: [
			"Shopify",
			"WordPress",
			"Landing Page",
			"Ecommerce",
			"Business"
		]
	},
	{
		name: "client",
		label: "Client",
		type: "text"
	},
	{
		name: "description",
		label: "Description",
		type: "textarea"
	},
	{
		name: "technologies",
		label: "Technologies",
		type: "tags"
	},
	{
		name: "cover_image",
		label: "Cover image URL",
		type: "url"
	},
	{
		name: "live_url",
		label: "Live URL",
		type: "url"
	},
	{
		name: "featured",
		label: "Featured",
		type: "boolean"
	},
	{
		name: "published",
		label: "Published",
		type: "boolean"
	},
	{
		name: "display_order",
		label: "Display order",
		type: "number"
	}
];
function ProjectsAdmin() {
	return /* @__PURE__ */ jsx(AdminPage, {
		title: "Projects",
		description: "Manage your portfolio.",
		children: /* @__PURE__ */ jsx(CrudPanel, {
			table: "projects",
			queryKey: "admin-projects",
			fields,
			defaultRow: {
				published: true,
				featured: false,
				display_order: 0,
				technologies: []
			},
			columns: [
				{
					key: "title",
					label: "Title"
				},
				{
					key: "category",
					label: "Category"
				},
				{
					key: "client",
					label: "Client"
				},
				{
					key: "featured",
					label: "Featured",
					render: (r) => r.featured ? "⭐" : ""
				},
				{
					key: "published",
					label: "Status",
					render: (r) => r.published ? "Published" : "Draft"
				}
			]
		})
	});
}
//#endregion
export { ProjectsAdmin as component };
