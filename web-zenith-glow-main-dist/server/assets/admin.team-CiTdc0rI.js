import { t as AdminPage } from "./AdminShell-WBnAZE9v.js";
import { t as CrudPanel } from "./CrudPanel-BU2kqkYY.js";
import { jsx } from "react/jsx-runtime";
//#region src/routes/_authenticated/admin.team.tsx?tsr-split=component
var fields = [
	{
		name: "name",
		label: "Name",
		type: "text",
		required: true
	},
	{
		name: "role",
		label: "Role / Designation",
		type: "text",
		required: true
	},
	{
		name: "bio",
		label: "Short bio",
		type: "textarea"
	},
	{
		name: "photo",
		label: "Photo URL",
		type: "url"
	},
	{
		name: "facebook_url",
		label: "Facebook",
		type: "url"
	},
	{
		name: "instagram_url",
		label: "Instagram",
		type: "url"
	},
	{
		name: "linkedin_url",
		label: "LinkedIn",
		type: "url"
	},
	{
		name: "display_order",
		label: "Display order",
		type: "number"
	},
	{
		name: "published",
		label: "Published",
		type: "boolean"
	}
];
function TeamAdmin() {
	return /* @__PURE__ */ jsx(AdminPage, {
		title: "Team",
		description: "Manage your team showcase.",
		children: /* @__PURE__ */ jsx(CrudPanel, {
			table: "team_members",
			queryKey: "admin-team",
			fields,
			defaultRow: {
				published: true,
				display_order: 0
			},
			columns: [
				{
					key: "name",
					label: "Name"
				},
				{
					key: "role",
					label: "Role"
				},
				{
					key: "published",
					label: "Status",
					render: (r) => r.published ? "Live" : "Hidden"
				}
			]
		})
	});
}
//#endregion
export { TeamAdmin as component };
