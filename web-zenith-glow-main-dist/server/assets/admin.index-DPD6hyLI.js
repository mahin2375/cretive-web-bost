import { n as supabase } from "./client-vUMwI8Or.js";
import { t as AdminPage } from "./AdminShell-WBnAZE9v.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useQuery } from "@tanstack/react-query";
import { FolderKanban, Mail, MessageSquare, Sparkles, Users, Youtube } from "lucide-react";
//#region src/routes/_authenticated/admin.index.tsx?tsr-split=component
function useCount(table) {
	return useQuery({
		queryKey: ["count", table],
		queryFn: async () => {
			const { count, error } = await supabase.from(table).select("*", {
				count: "exact",
				head: true
			});
			if (error) throw error;
			return count ?? 0;
		}
	});
}
function AdminHome() {
	const projects = useCount("projects");
	const team = useCount("team_members");
	const videos = useCount("youtube_videos");
	const testimonials = useCount("testimonials");
	const messages = useCount("contact_messages");
	const cards = [
		{
			label: "Projects",
			icon: FolderKanban,
			count: projects.data,
			color: "bg-primary/10 text-primary"
		},
		{
			label: "Team Members",
			icon: Users,
			count: team.data,
			color: "bg-leaf/15 text-leaf-dark"
		},
		{
			label: "YouTube Videos",
			icon: Youtube,
			count: videos.data,
			color: "bg-destructive/10 text-destructive"
		},
		{
			label: "Testimonials",
			icon: MessageSquare,
			count: testimonials.data,
			color: "bg-mint-deep text-leaf-dark"
		},
		{
			label: "Contact Messages",
			icon: Mail,
			count: messages.data,
			color: "bg-accent text-accent-foreground"
		}
	];
	return /* @__PURE__ */ jsx(AdminPage, {
		title: "Dashboard",
		description: "Welcome back. Here's your studio at a glance.",
		children: /* @__PURE__ */ jsxs("div", {
			className: "rounded-3xl border border-foreground/5 bg-card p-6 shadow-soft",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "mb-5 flex items-center gap-3 text-sm text-muted-foreground",
				children: [/* @__PURE__ */ jsx(Sparkles, { className: "size-4 text-primary" }), " Content overview"]
			}), /* @__PURE__ */ jsx("div", {
				className: "grid grid-cols-2 gap-4 md:grid-cols-5",
				children: cards.map((c) => /* @__PURE__ */ jsxs("div", {
					className: "rounded-2xl border border-foreground/5 bg-background p-5",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: `grid size-10 place-items-center rounded-lg ${c.color}`,
							children: /* @__PURE__ */ jsx(c.icon, { className: "size-5" })
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-4 text-3xl font-semibold",
							children: c.count ?? "—"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-1 text-xs text-muted-foreground",
							children: c.label
						})
					]
				}, c.label))
			})]
		})
	});
}
//#endregion
export { AdminHome as component };
