import { n as supabase } from "./client-vUMwI8Or.js";
import { t as AdminPage } from "./AdminShell-WBnAZE9v.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Loader2, Mail, Trash2 } from "lucide-react";
//#region src/routes/_authenticated/admin.messages.tsx?tsr-split=component
function MessagesAdmin() {
	const qc = useQueryClient();
	const { data, isLoading } = useQuery({
		queryKey: ["admin-messages"],
		queryFn: async () => {
			const { data, error } = await supabase.from("contact_messages").select("*").order("created_at", { ascending: false });
			if (error) throw error;
			return data;
		}
	});
	const update = useMutation({
		mutationFn: async ({ id, status }) => {
			const { error } = await supabase.from("contact_messages").update({ status }).eq("id", id);
			if (error) throw error;
		},
		onSuccess: () => {
			qc.invalidateQueries({ queryKey: ["admin-messages"] });
			toast.success("Updated");
		}
	});
	const del = useMutation({
		mutationFn: async (id) => {
			const { error } = await supabase.from("contact_messages").delete().eq("id", id);
			if (error) throw error;
		},
		onSuccess: () => {
			qc.invalidateQueries({ queryKey: ["admin-messages"] });
			toast.success("Deleted");
		}
	});
	return /* @__PURE__ */ jsx(AdminPage, {
		title: "Contact Messages",
		description: "Inbound inquiries from your website.",
		children: isLoading ? /* @__PURE__ */ jsx("div", {
			className: "grid place-items-center p-12",
			children: /* @__PURE__ */ jsx(Loader2, { className: "size-6 animate-spin text-primary" })
		}) : !data || data.length === 0 ? /* @__PURE__ */ jsxs("div", {
			className: "rounded-3xl border border-foreground/5 bg-card p-12 text-center text-muted-foreground",
			children: [/* @__PURE__ */ jsx(Mail, { className: "mx-auto mb-3 size-8 text-primary" }), "No messages yet."]
		}) : /* @__PURE__ */ jsx("div", {
			className: "space-y-4",
			children: data.map((m) => /* @__PURE__ */ jsxs("div", {
				className: "rounded-2xl border border-foreground/5 bg-card p-6 shadow-soft",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex flex-wrap items-start justify-between gap-4",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("p", {
							className: "font-semibold",
							children: [
								m.name,
								" ",
								/* @__PURE__ */ jsxs("span", {
									className: "ml-2 text-sm font-normal text-muted-foreground",
									children: [
										"<",
										m.email,
										">"
									]
								})
							]
						}), /* @__PURE__ */ jsxs("p", {
							className: "text-xs text-muted-foreground",
							children: [
								m.company ? `${m.company} · ` : "",
								m.project_type ?? "General",
								" · ",
								new Date(m.created_at).toLocaleString()
							]
						})] }), /* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ jsxs("select", {
								value: m.status,
								onChange: (e) => update.mutate({
									id: m.id,
									status: e.target.value
								}),
								className: "rounded-lg border border-foreground/10 bg-background px-3 py-1.5 text-xs",
								children: [
									/* @__PURE__ */ jsx("option", {
										value: "new",
										children: "New"
									}),
									/* @__PURE__ */ jsx("option", {
										value: "in_progress",
										children: "In progress"
									}),
									/* @__PURE__ */ jsx("option", {
										value: "done",
										children: "Done"
									})
								]
							}), /* @__PURE__ */ jsx("button", {
								onClick: () => {
									if (confirm("Delete this message?")) del.mutate(m.id);
								},
								className: "grid size-8 place-items-center rounded-lg bg-destructive/10 text-destructive hover:bg-destructive hover:text-destructive-foreground",
								children: /* @__PURE__ */ jsx(Trash2, { className: "size-3.5" })
							})]
						})]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-4 whitespace-pre-wrap text-sm leading-relaxed",
						children: m.message
					}),
					m.phone && /* @__PURE__ */ jsxs("p", {
						className: "mt-3 text-xs text-muted-foreground",
						children: ["Phone: ", m.phone]
					})
				]
			}, m.id))
		})
	});
}
//#endregion
export { MessagesAdmin as component };
