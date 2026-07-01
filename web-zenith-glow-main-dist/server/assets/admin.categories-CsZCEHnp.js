import { t as AdminPage } from "./AdminShell-WBnAZE9v.js";
import { t as CrudPanel } from "./CrudPanel-BU2kqkYY.js";
import { jsx } from "react/jsx-runtime";
//#region src/routes/_authenticated/admin.categories.tsx?tsr-split=component
function AdminCategoriesPage() {
	return /* @__PURE__ */ jsx(AdminPage, {
		title: "Categories",
		description: "Group services into browsable categories.",
		children: /* @__PURE__ */ jsx(CrudPanel, {
			table: "categories",
			queryKey: "admin-categories",
			orderBy: "sort_order",
			fields: [
				{
					name: "name",
					label: "Name",
					type: "text",
					required: true
				},
				{
					name: "slug",
					label: "Slug",
					type: "text",
					required: true,
					placeholder: "e.g. wordpress"
				},
				{
					name: "icon",
					label: "Icon (lucide name or emoji)",
					type: "text"
				},
				{
					name: "description",
					label: "Description",
					type: "textarea"
				},
				{
					name: "sort_order",
					label: "Sort Order",
					type: "number"
				}
			],
			columns: [
				{
					key: "name",
					label: "Name"
				},
				{
					key: "slug",
					label: "Slug"
				},
				{
					key: "sort_order",
					label: "Order"
				}
			],
			defaultRow: { sort_order: 0 }
		})
	});
}
//#endregion
export { AdminCategoriesPage as component };
