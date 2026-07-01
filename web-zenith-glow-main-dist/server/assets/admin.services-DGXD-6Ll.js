import { t as AdminPage } from "./AdminShell-WBnAZE9v.js";
import { t as CrudPanel } from "./CrudPanel-BU2kqkYY.js";
import { jsx } from "react/jsx-runtime";
//#region src/routes/_authenticated/admin.services.tsx?tsr-split=component
function AdminServicesPage() {
	return /* @__PURE__ */ jsx(AdminPage, {
		title: "Services",
		description: "Manage marketplace services.",
		children: /* @__PURE__ */ jsx(CrudPanel, {
			table: "services",
			queryKey: "admin-services",
			fields: [
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
					required: true
				},
				{
					name: "short_description",
					label: "Short Description",
					type: "textarea"
				},
				{
					name: "description",
					label: "Description",
					type: "textarea"
				},
				{
					name: "featured_image",
					label: "Featured Image URL",
					type: "url"
				},
				{
					name: "status",
					label: "Status",
					type: "select",
					options: [
						"active",
						"draft",
						"archived"
					]
				},
				{
					name: "technologies",
					label: "Technologies",
					type: "tags",
					placeholder: "Comma separated"
				},
				{
					name: "tags",
					label: "Tags",
					type: "tags",
					placeholder: "Comma separated"
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
					key: "title",
					label: "Title"
				},
				{
					key: "slug",
					label: "Slug"
				},
				{
					key: "status",
					label: "Status"
				}
			],
			defaultRow: { status: "draft" }
		})
	});
}
//#endregion
export { AdminServicesPage as component };
