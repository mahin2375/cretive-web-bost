import { n as supabase } from "./client-vUMwI8Or.js";
import { useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Loader2, Pencil, Plus, Trash2, X } from "lucide-react";
//#region src/components/admin/CrudPanel.tsx
function CrudPanel({ table, queryKey, fields, columns, defaultRow, orderBy = "display_order" }) {
	const qc = useQueryClient();
	const [editing, setEditing] = useState(null);
	const { data, isLoading } = useQuery({
		queryKey: [queryKey],
		queryFn: async () => {
			const { data, error } = await supabase.from(table).select("*").order(orderBy);
			if (error) throw error;
			return data;
		}
	});
	const upsert = useMutation({
		mutationFn: async (row) => {
			if (row.id) {
				const { id, ...rest } = row;
				const { error } = await supabase.from(table).update(rest).eq("id", id);
				if (error) throw error;
			} else {
				const { error } = await supabase.from(table).insert(row);
				if (error) throw error;
			}
		},
		onSuccess: () => {
			qc.invalidateQueries({ queryKey: [queryKey] });
			qc.invalidateQueries({ queryKey: [queryKey.replace("admin-", "")] });
			setEditing(null);
			toast.success("Saved");
		},
		onError: (e) => toast.error(e instanceof Error ? e.message : "Save failed")
	});
	const del = useMutation({
		mutationFn: async (id) => {
			const { error } = await supabase.from(table).delete().eq("id", id);
			if (error) throw error;
		},
		onSuccess: () => {
			qc.invalidateQueries({ queryKey: [queryKey] });
			toast.success("Deleted");
		},
		onError: (e) => toast.error(e instanceof Error ? e.message : "Delete failed")
	});
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx("div", {
			className: "mb-6 flex justify-end",
			children: /* @__PURE__ */ jsxs("button", {
				onClick: () => setEditing("new"),
				className: "magnetic-btn inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow",
				children: [/* @__PURE__ */ jsx(Plus, { className: "size-4" }), " New"]
			})
		}),
		/* @__PURE__ */ jsx("div", {
			className: "overflow-hidden rounded-3xl border border-foreground/5 bg-card shadow-soft",
			children: isLoading ? /* @__PURE__ */ jsx("div", {
				className: "grid place-items-center p-12",
				children: /* @__PURE__ */ jsx(Loader2, { className: "size-6 animate-spin text-primary" })
			}) : !data || data.length === 0 ? /* @__PURE__ */ jsx("p", {
				className: "p-12 text-center text-muted-foreground",
				children: "No items yet. Click \"New\" to add the first one."
			}) : /* @__PURE__ */ jsxs("table", {
				className: "w-full text-sm",
				children: [/* @__PURE__ */ jsx("thead", {
					className: "border-b border-foreground/5 bg-mint/40 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground",
					children: /* @__PURE__ */ jsxs("tr", { children: [columns.map((c) => /* @__PURE__ */ jsx("th", {
						className: "px-4 py-3",
						children: c.label
					}, String(c.key))), /* @__PURE__ */ jsx("th", {
						className: "px-4 py-3 text-right",
						children: "Actions"
					})] })
				}), /* @__PURE__ */ jsx("tbody", {
					className: "divide-y divide-foreground/5",
					children: data.map((row) => /* @__PURE__ */ jsxs("tr", {
						className: "hover:bg-mint/30",
						children: [columns.map((c) => /* @__PURE__ */ jsx("td", {
							className: "px-4 py-3",
							children: c.render ? c.render(row) : String(row[c.key] ?? "")
						}, String(c.key))), /* @__PURE__ */ jsxs("td", {
							className: "px-4 py-3 text-right",
							children: [/* @__PURE__ */ jsx("button", {
								onClick: () => setEditing(row),
								className: "mr-2 inline-flex size-8 items-center justify-center rounded-lg bg-mint text-primary hover:bg-primary hover:text-primary-foreground",
								children: /* @__PURE__ */ jsx(Pencil, { className: "size-3.5" })
							}), /* @__PURE__ */ jsx("button", {
								onClick: () => {
									if (confirm("Delete this item?")) del.mutate(row.id);
								},
								className: "inline-flex size-8 items-center justify-center rounded-lg bg-destructive/10 text-destructive hover:bg-destructive hover:text-destructive-foreground",
								children: /* @__PURE__ */ jsx(Trash2, { className: "size-3.5" })
							})]
						})]
					}, row.id))
				})]
			})
		}),
		editing && /* @__PURE__ */ jsx(EditDialog, {
			initial: editing === "new" ? defaultRow ?? {} : editing,
			fields,
			onClose: () => setEditing(null),
			onSave: (row) => upsert.mutate(row),
			saving: upsert.isPending,
			title: editing === "new" ? "Create" : "Edit"
		})
	] });
}
function EditDialog({ initial, fields, onClose, onSave, saving, title }) {
	const [form, setForm] = useState(initial);
	function set(name, v) {
		setForm((f) => ({
			...f,
			[name]: v
		}));
	}
	return /* @__PURE__ */ jsx("div", {
		className: "fixed inset-0 z-50 grid place-items-center bg-foreground/40 p-4 backdrop-blur-sm",
		children: /* @__PURE__ */ jsxs("div", {
			className: "w-full max-w-2xl overflow-hidden rounded-3xl bg-card shadow-glow",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex items-center justify-between border-b border-foreground/5 px-6 py-4",
				children: [/* @__PURE__ */ jsx("h2", {
					className: "text-lg font-semibold",
					children: title
				}), /* @__PURE__ */ jsx("button", {
					onClick: onClose,
					className: "grid size-8 place-items-center rounded-lg text-muted-foreground hover:bg-foreground/5",
					children: /* @__PURE__ */ jsx(X, { className: "size-4" })
				})]
			}), /* @__PURE__ */ jsxs("form", {
				onSubmit: (e) => {
					e.preventDefault();
					onSave(form);
				},
				className: "max-h-[70vh] space-y-4 overflow-y-auto p-6",
				children: [fields.map((f) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("label", {
					className: "mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground",
					children: [f.label, f.required && " *"]
				}), f.type === "textarea" ? /* @__PURE__ */ jsx("textarea", {
					required: f.required,
					value: form[f.name] ?? "",
					onChange: (e) => set(f.name, e.target.value),
					rows: 4,
					className: "w-full rounded-xl border border-foreground/10 bg-background px-4 py-3 outline-none focus:border-primary"
				}) : f.type === "boolean" ? /* @__PURE__ */ jsxs("label", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ jsx("input", {
						type: "checkbox",
						checked: !!form[f.name],
						onChange: (e) => set(f.name, e.target.checked),
						className: "size-4 rounded border-foreground/20"
					}), /* @__PURE__ */ jsx("span", {
						className: "text-sm",
						children: f.placeholder ?? "Enabled"
					})]
				}) : f.type === "select" ? /* @__PURE__ */ jsxs("select", {
					required: f.required,
					value: form[f.name] ?? "",
					onChange: (e) => set(f.name, e.target.value),
					className: "w-full rounded-xl border border-foreground/10 bg-background px-4 py-3 outline-none focus:border-primary",
					children: [/* @__PURE__ */ jsx("option", {
						value: "",
						children: "Select…"
					}), f.options?.map((o) => /* @__PURE__ */ jsx("option", {
						value: o,
						children: f.optionLabels?.[o] ?? o
					}, o))]
				}) : f.type === "tags" ? /* @__PURE__ */ jsx("input", {
					value: Array.isArray(form[f.name]) ? form[f.name].join(", ") : form[f.name] ?? "",
					onChange: (e) => set(f.name, e.target.value.split(",").map((x) => x.trim()).filter(Boolean)),
					placeholder: "Comma separated",
					className: "w-full rounded-xl border border-foreground/10 bg-background px-4 py-3 outline-none focus:border-primary"
				}) : f.type === "number" ? /* @__PURE__ */ jsx("input", {
					type: "number",
					value: form[f.name] ?? 0,
					onChange: (e) => set(f.name, Number(e.target.value)),
					className: "w-full rounded-xl border border-foreground/10 bg-background px-4 py-3 outline-none focus:border-primary"
				}) : /* @__PURE__ */ jsx("input", {
					type: f.type === "url" ? "url" : "text",
					required: f.required,
					value: form[f.name] ?? "",
					onChange: (e) => set(f.name, e.target.value),
					placeholder: f.placeholder,
					className: "w-full rounded-xl border border-foreground/10 bg-background px-4 py-3 outline-none focus:border-primary"
				})] }, f.name)), /* @__PURE__ */ jsxs("div", {
					className: "flex justify-end gap-3 pt-4",
					children: [/* @__PURE__ */ jsx("button", {
						type: "button",
						onClick: onClose,
						className: "rounded-full bg-foreground/5 px-5 py-2.5 text-sm font-semibold",
						children: "Cancel"
					}), /* @__PURE__ */ jsxs("button", {
						disabled: saving,
						className: "magnetic-btn flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow disabled:opacity-60",
						children: [saving && /* @__PURE__ */ jsx(Loader2, { className: "size-4 animate-spin" }), "Save"]
					})]
				})]
			})]
		})
	});
}
//#endregion
export { CrudPanel as t };
