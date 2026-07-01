import { n as supabase } from "./client-vUMwI8Or.js";
import { t as SiteShell } from "./SiteShell-CcWjM9Vs.js";
import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { CheckCircle2, Loader2, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { z } from "zod";
//#region src/routes/contact.tsx?tsr-split=component
var schema = z.object({
	name: z.string().trim().min(1, "Name is required").max(120),
	email: z.string().trim().email("Enter a valid email").max(254),
	phone: z.string().trim().max(40).optional().or(z.literal("")),
	company: z.string().trim().max(120).optional().or(z.literal("")),
	project_type: z.string().max(60).optional().or(z.literal("")),
	message: z.string().trim().min(1, "Message is required").max(5e3)
});
function ContactPage() {
	const [status, setStatus] = useState("idle");
	const [error, setError] = useState(null);
	async function onSubmit(e) {
		e.preventDefault();
		setError(null);
		const fd = new FormData(e.currentTarget);
		const parsed = schema.safeParse(Object.fromEntries(fd));
		if (!parsed.success) {
			setError(parsed.error.issues[0]?.message ?? "Invalid input");
			return;
		}
		setStatus("sending");
		const { error } = await supabase.from("contact_messages").insert({
			name: parsed.data.name,
			email: parsed.data.email,
			phone: parsed.data.phone || null,
			company: parsed.data.company || null,
			project_type: parsed.data.project_type || null,
			message: parsed.data.message
		});
		if (error) {
			setStatus("err");
			setError(error.message);
			return;
		}
		setStatus("ok");
		e.currentTarget.reset();
	}
	return /* @__PURE__ */ jsxs(SiteShell, { children: [/* @__PURE__ */ jsx("section", {
		className: "bg-mesh py-24",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-4xl px-6 text-center",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "mb-4 text-xs font-semibold uppercase tracking-wider text-primary",
					children: "Contact"
				}),
				/* @__PURE__ */ jsxs("h1", {
					className: "text-balance text-4xl font-semibold md:text-6xl",
					children: ["Let’s start the ", /* @__PURE__ */ jsx("span", {
						className: "gradient-text",
						children: "conversation"
					})]
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mx-auto mt-6 max-w-xl text-lg text-muted-foreground",
					children: "Tell us about your project or book a free 15-minute discovery call."
				})
			]
		})
	}), /* @__PURE__ */ jsx("section", {
		className: "bg-background py-24",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1fr_1.2fr]",
			children: [/* @__PURE__ */ jsxs("div", { children: [
				/* @__PURE__ */ jsx("h2", {
					className: "text-2xl font-semibold",
					children: "Reach us directly"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-3 text-muted-foreground",
					children: "We reply within 1 business day."
				}),
				/* @__PURE__ */ jsxs("ul", {
					className: "mt-8 space-y-5",
					children: [
						/* @__PURE__ */ jsxs("li", {
							className: "flex items-center gap-4",
							children: [/* @__PURE__ */ jsx("span", {
								className: "grid size-10 place-items-center rounded-xl bg-mint text-primary",
								children: /* @__PURE__ */ jsx(Mail, { className: "size-5" })
							}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
								className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
								children: "Email"
							}), /* @__PURE__ */ jsx("p", {
								className: "font-medium",
								children: "hello@creativewebboost.com"
							})] })]
						}),
						/* @__PURE__ */ jsxs("li", {
							className: "flex items-center gap-4",
							children: [/* @__PURE__ */ jsx("span", {
								className: "grid size-10 place-items-center rounded-xl bg-mint text-primary",
								children: /* @__PURE__ */ jsx(Phone, { className: "size-5" })
							}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
								className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
								children: "Phone"
							}), /* @__PURE__ */ jsx("p", {
								className: "font-medium",
								children: "+1 (555) 010-0420"
							})] })]
						}),
						/* @__PURE__ */ jsxs("li", {
							className: "flex items-center gap-4",
							children: [/* @__PURE__ */ jsx("span", {
								className: "grid size-10 place-items-center rounded-xl bg-mint text-primary",
								children: /* @__PURE__ */ jsx(MapPin, { className: "size-5" })
							}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
								className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
								children: "Studio"
							}), /* @__PURE__ */ jsx("p", {
								className: "font-medium",
								children: "Remote-first · Serving 32 countries"
							})] })]
						}),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", {
							href: "#",
							className: "magnetic-btn inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground",
							children: [/* @__PURE__ */ jsx(MessageCircle, { className: "size-4" }), " WhatsApp us"]
						}) })
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					id: "book",
					className: "mt-12 rounded-3xl border border-foreground/5 bg-mint/40 p-6",
					children: [
						/* @__PURE__ */ jsx("h3", {
							className: "text-lg font-semibold",
							children: "Business hours"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: "Mon – Fri · 9am – 6pm (your local timezone)"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: "Discovery calls available within 48 hours."
						})
					]
				})
			] }), /* @__PURE__ */ jsxs("div", {
				id: "offer",
				className: "rounded-3xl border border-foreground/5 bg-card p-8 shadow-soft",
				children: [/* @__PURE__ */ jsx("h2", {
					className: "text-2xl font-semibold",
					children: "Send us a message"
				}), /* @__PURE__ */ jsxs("form", {
					onSubmit,
					className: "mt-6 space-y-4",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "grid gap-4 sm:grid-cols-2",
							children: [
								/* @__PURE__ */ jsx(Field, {
									label: "Name",
									name: "name",
									required: true
								}),
								/* @__PURE__ */ jsx(Field, {
									label: "Email",
									name: "email",
									type: "email",
									required: true
								}),
								/* @__PURE__ */ jsx(Field, {
									label: "Phone",
									name: "phone"
								}),
								/* @__PURE__ */ jsx(Field, {
									label: "Company",
									name: "company"
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
							className: "mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground",
							children: "Project type"
						}), /* @__PURE__ */ jsxs("select", {
							name: "project_type",
							defaultValue: "",
							className: "w-full rounded-xl border border-foreground/10 bg-background px-4 py-3 outline-none focus:border-primary",
							children: [
								/* @__PURE__ */ jsx("option", {
									value: "",
									children: "Select"
								}),
								/* @__PURE__ */ jsx("option", { children: "Shopify Development" }),
								/* @__PURE__ */ jsx("option", { children: "WordPress / Headless" }),
								/* @__PURE__ */ jsx("option", { children: "Free 5-Product Shopify Store" }),
								/* @__PURE__ */ jsx("option", { children: "SEO / Optimization" }),
								/* @__PURE__ */ jsx("option", { children: "Maintenance" })
							]
						})] }),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
							className: "mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground",
							children: "Message"
						}), /* @__PURE__ */ jsx("textarea", {
							name: "message",
							required: true,
							rows: 5,
							placeholder: "Tell us about your project goals…",
							className: "w-full rounded-xl border border-foreground/10 bg-background px-4 py-3 outline-none focus:border-primary"
						})] }),
						error && /* @__PURE__ */ jsx("p", {
							className: "text-sm text-destructive",
							children: error
						}),
						status === "ok" ? /* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2 rounded-xl bg-primary/10 px-4 py-3 text-sm font-medium text-primary",
							children: [/* @__PURE__ */ jsx(CheckCircle2, { className: "size-4" }), " Thanks! We’ll be in touch within 1 business day."]
						}) : /* @__PURE__ */ jsxs("button", {
							type: "submit",
							disabled: status === "sending",
							className: "magnetic-btn flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 text-base font-semibold text-primary-foreground shadow-glow disabled:opacity-60",
							children: [status === "sending" ? /* @__PURE__ */ jsx(Loader2, { className: "size-4 animate-spin" }) : null, status === "sending" ? "Sending…" : "Send Inquiry"]
						})
					]
				})]
			})]
		})
	})] });
}
function Field({ label, name, type = "text", required }) {
	return /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("label", {
		className: "mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground",
		children: [label, required && " *"]
	}), /* @__PURE__ */ jsx("input", {
		type,
		name,
		required,
		className: "w-full rounded-xl border border-foreground/10 bg-background px-4 py-3 outline-none focus:border-primary"
	})] });
}
//#endregion
export { ContactPage as component };
