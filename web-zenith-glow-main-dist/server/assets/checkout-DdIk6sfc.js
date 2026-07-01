import { n as getMyMembership, t as createOrder } from "./marketplace.functions-CJ9URFu9.js";
import { t as getServicePublic } from "./marketplace-CjC09cF_.js";
import { t as SiteShell } from "./SiteShell-CcWjM9Vs.js";
import { useState } from "react";
import { useNavigate, useSearch } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Check, Loader2, ShoppingCart, Tag } from "lucide-react";
//#region src/routes/_authenticated/checkout.tsx?tsr-split=component
function CheckoutPage() {
	const search = useSearch({ strict: false });
	const navigate = useNavigate();
	const [couponCode, setCouponCode] = useState("");
	const [requirements, setRequirements] = useState("");
	const [error, setError] = useState(null);
	const { data: service } = useQuery({
		queryKey: ["service", search.service],
		queryFn: () => search.service ? getServicePublic("") : Promise.resolve(null),
		enabled: !!search.service
	});
	const { data: membership } = useQuery({
		queryKey: ["my-membership"],
		queryFn: () => getMyMembership()
	});
	const createOrderMutation = useMutation({
		mutationFn: (vars) => createOrder({ data: vars }),
		onSuccess: () => {
			navigate({ to: "/dashboard" });
		},
		onError: (err) => {
			setError(err?.message || "Failed to create order");
		}
	});
	const handleSubmit = () => {
		if (!search.service || !search.package) {
			setError("Invalid checkout session");
			return;
		}
		setError(null);
		createOrderMutation.mutate({
			service_id: search.service,
			package_id: search.package,
			coupon_code: couponCode || null,
			requirements: requirements || null
		});
	};
	if (!search.service || !search.package) return /* @__PURE__ */ jsx(SiteShell, { children: /* @__PURE__ */ jsxs("div", {
		className: "mx-auto max-w-2xl px-6 py-24 text-center",
		children: [/* @__PURE__ */ jsx("h1", {
			className: "text-2xl font-semibold",
			children: "Checkout"
		}), /* @__PURE__ */ jsxs("p", {
			className: "mt-4 text-muted-foreground",
			children: [
				"No service selected. Browse our ",
				/* @__PURE__ */ jsx("a", {
					href: "/services",
					className: "text-primary underline",
					children: "services marketplace"
				}),
				" to get started."
			]
		})]
	}) });
	const discountPct = membership?.plan?.discount_pct;
	const hasDiscount = typeof discountPct === "number" && discountPct > 0;
	return /* @__PURE__ */ jsx(SiteShell, { children: /* @__PURE__ */ jsxs("div", {
		className: "mx-auto max-w-3xl px-6 py-16",
		children: [/* @__PURE__ */ jsx("h1", {
			className: "text-2xl font-semibold",
			children: "Checkout"
		}), /* @__PURE__ */ jsxs("div", {
			className: "mt-8 rounded-3xl border border-foreground/5 bg-card p-6 shadow-soft",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-3 text-sm text-muted-foreground",
					children: [/* @__PURE__ */ jsx(ShoppingCart, { className: "size-5 text-primary" }), /* @__PURE__ */ jsx("span", { children: "Order Summary" })]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-4 rounded-2xl bg-mint/30 p-4",
					children: [/* @__PURE__ */ jsx("p", {
						className: "text-sm text-muted-foreground",
						children: "Service"
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-1 font-medium",
						children: service?.title ?? "Selected Service"
					})]
				}),
				hasDiscount && /* @__PURE__ */ jsxs("div", {
					className: "mt-3 flex items-center gap-2 rounded-2xl bg-primary/10 p-4 text-sm",
					children: [/* @__PURE__ */ jsx(Tag, { className: "size-4 text-primary" }), /* @__PURE__ */ jsxs("span", {
						className: "font-medium text-primary",
						children: [discountPct, "% membership discount applied"]
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-4",
					children: [/* @__PURE__ */ jsx("label", {
						className: "text-sm font-medium",
						children: "Coupon Code"
					}), /* @__PURE__ */ jsx("div", {
						className: "mt-1.5 flex gap-2",
						children: /* @__PURE__ */ jsx("input", {
							type: "text",
							value: couponCode,
							onChange: (e) => setCouponCode(e.target.value),
							placeholder: "Enter code",
							className: "flex-1 rounded-xl border border-foreground/10 bg-background px-4 py-2.5 text-sm outline-none ring-primary/30 focus:ring-2"
						})
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-4",
					children: [/* @__PURE__ */ jsx("label", {
						className: "text-sm font-medium",
						children: "Project Requirements"
					}), /* @__PURE__ */ jsx("textarea", {
						value: requirements,
						onChange: (e) => setRequirements(e.target.value),
						placeholder: "Describe what you need, your brand guidelines, references, etc.",
						rows: 4,
						className: "mt-1.5 w-full rounded-xl border border-foreground/10 bg-background px-4 py-3 text-sm outline-none ring-primary/30 focus:ring-2"
					})]
				}),
				error && /* @__PURE__ */ jsx("div", {
					className: "mt-4 rounded-xl bg-destructive/10 p-3 text-sm text-destructive",
					children: error
				}),
				/* @__PURE__ */ jsx("button", {
					onClick: handleSubmit,
					disabled: createOrderMutation.isPending,
					className: "mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-primary py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-colors hover:bg-primary/90 disabled:opacity-50",
					children: createOrderMutation.isPending ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Loader2, { className: "size-4 animate-spin" }), " Processing..."] }) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Check, { className: "size-4" }), " Place Order"] })
				})
			]
		})]
	}) });
}
//#endregion
export { CheckoutPage as component };
