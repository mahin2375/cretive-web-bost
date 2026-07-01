import { t as AdminPage } from "./AdminShell-WBnAZE9v.js";
import { t as CrudPanel } from "./CrudPanel-BU2kqkYY.js";
import { jsx } from "react/jsx-runtime";
//#region src/routes/_authenticated/admin.videos.tsx?tsr-split=component
var fields = [
	{
		name: "title",
		label: "Video title",
		type: "text",
		required: true
	},
	{
		name: "channel_name",
		label: "Channel name",
		type: "text",
		required: true
	},
	{
		name: "youtube_url",
		label: "YouTube URL",
		type: "url",
		required: true
	},
	{
		name: "thumbnail",
		label: "Thumbnail URL",
		type: "url"
	},
	{
		name: "category",
		label: "Category",
		type: "text"
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
function VideosAdmin() {
	return /* @__PURE__ */ jsx(AdminPage, {
		title: "YouTube Videos",
		description: "Manage your video showcase.",
		children: /* @__PURE__ */ jsx(CrudPanel, {
			table: "youtube_videos",
			queryKey: "admin-videos",
			fields,
			defaultRow: {
				featured: false,
				display_order: 0
			},
			columns: [
				{
					key: "title",
					label: "Title"
				},
				{
					key: "channel_name",
					label: "Channel"
				},
				{
					key: "category",
					label: "Category"
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
export { VideosAdmin as component };
