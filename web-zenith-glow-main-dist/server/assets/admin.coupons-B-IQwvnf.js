import { t as AdminPage } from "./AdminShell-WBnAZE9v.js";
import { t as CrudPanel } from "./CrudPanel-BU2kqkYY.js";
import { jsx } from "react/jsx-runtime";
//#region src/routes/_authenticated/admin.coupons.tsx?tsr-split=component
function AdminCouponsPage() {
	return /* @__PURE__ */ jsx(AdminPage, {
		title: "Coupons",
		description: "Percentage or fixed-amount discount codes.",
		children: /* @__PURE__ */ jsx(CrudPanel, {
			table: "coupons",
			queryKey: "admin-coupons",
			orderBy: "code",
			fields: [
				{
					name: "code",
					label: "Code",
					type: "text",
					required: true,
					placeholder: "e.g. LAUNCH20"
				},
				{
					name: "type",
					label: "Type",
					type: "select",
					options: ["percent", "fixed"],
					required: true
				},
				{
					name: "value",
					label: "Value (percent 1-100, or cents)",
					type: "number",
					required: true
				},
				{
					name: "max_uses",
					label: "Max Uses (blank = unlimited)",
					type: "number"
				},
				{
					name: "expires_at",
					label: "Expires At (ISO datetime, optional)",
					type: "text",
					placeholder: "2026-12-31T23:59:00Z"
				},
				{
					name: "min_membership_tier",
					label: "Minimum Membership",
					type: "select",
					options: [
						"silver",
						"gold",
						"platinum"
					]
				},
				{
					name: "active",
					label: "Active",
					type: "boolean"
				}
			],
			columns: [
				{
					key: "code",
					label: "Code"
				},
				{
					key: "type",
					label: "Type"
				},
				{
					key: "value",
					label: "Value"
				},
				{
					key: "used_count",
					label: "Used"
				},
				{
					key: "max_uses",
					label: "Limit"
				},
				{
					key: "active",
					label: "Active",
					render: (r) => r.active ? "Yes" : "No"
				}
			],
			defaultRow: {
				active: true,
				used_count: 0,
				type: "percent"
			}
		})
	});
}
//#endregion
export { AdminCouponsPage as component };
