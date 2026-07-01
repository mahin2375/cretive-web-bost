import { n as supabase } from "./client-vUMwI8Or.js";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { Leaf, Loader2 } from "lucide-react";
import { createLovableAuth } from "@lovable.dev/cloud-auth-js";
//#region src/integrations/lovable/index.ts
var lovableAuth = createLovableAuth();
var lovable = { auth: { signInWithOAuth: async (provider, opts) => {
	const result = await lovableAuth.signInWithOAuth(provider, {
		redirect_uri: opts?.redirect_uri,
		extraParams: { ...opts?.extraParams }
	});
	if (result.redirected) return result;
	if (result.error) return result;
	try {
		await supabase.auth.setSession(result.tokens);
	} catch (e) {
		return { error: e instanceof Error ? e : new Error(String(e)) };
	}
	return result;
} } };
//#endregion
//#region src/routes/auth.tsx?tsr-split=component
function AuthPage() {
	const nav = useNavigate();
	const [mode, setMode] = useState("signin");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const [error, setError] = useState(null);
	const [busy, setBusy] = useState(false);
	useEffect(() => {
		supabase.auth.getSession().then(({ data }) => {
			if (data.session) nav({ to: "/admin" });
		});
	}, [nav]);
	async function submit(e) {
		e.preventDefault();
		setBusy(true);
		setError(null);
		try {
			if (mode === "signup") {
				const { error } = await supabase.auth.signUp({
					email,
					password,
					options: {
						emailRedirectTo: window.location.origin + "/admin",
						data: { full_name: name }
					}
				});
				if (error) throw error;
			} else {
				const { error } = await supabase.auth.signInWithPassword({
					email,
					password
				});
				if (error) throw error;
			}
			nav({ to: "/admin" });
		} catch (e) {
			setError(e instanceof Error ? e.message : "Authentication failed");
		} finally {
			setBusy(false);
		}
	}
	async function google() {
		setBusy(true);
		setError(null);
		const r = await lovable.auth.signInWithOAuth("google", { redirect_uri: window.location.origin + "/admin" });
		if (r.error) {
			setError(r.error.message ?? "Google sign-in failed");
			setBusy(false);
			return;
		}
		if (!r.redirected) nav({ to: "/admin" });
	}
	return /* @__PURE__ */ jsx("div", {
		className: "min-h-dvh bg-mesh",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto flex min-h-dvh max-w-md flex-col justify-center px-6 py-12",
			children: [
				/* @__PURE__ */ jsxs(Link, {
					to: "/",
					className: "mb-10 flex items-center justify-center gap-2.5 font-semibold",
					children: [/* @__PURE__ */ jsx("span", {
						className: "grid size-9 place-items-center rounded-lg bg-primary shadow-glow",
						children: /* @__PURE__ */ jsx(Leaf, {
							className: "size-4 text-primary-foreground",
							strokeWidth: 2.5
						})
					}), /* @__PURE__ */ jsx("span", {
						className: "text-xl",
						children: "CreativeWebBoost"
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "rounded-3xl border border-foreground/5 bg-card p-8 shadow-soft",
					children: [
						/* @__PURE__ */ jsx("h1", {
							className: "text-2xl font-semibold",
							children: mode === "signin" ? "Sign in" : "Create an account"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: "Access the Creative Web Boost admin."
						}),
						/* @__PURE__ */ jsxs("button", {
							onClick: google,
							disabled: busy,
							className: "mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-foreground/10 bg-background px-4 py-3 text-sm font-semibold hover:border-primary/40 disabled:opacity-60",
							children: [/* @__PURE__ */ jsxs("svg", {
								className: "size-4",
								viewBox: "0 0 24 24",
								children: [
									/* @__PURE__ */ jsx("path", {
										fill: "#4285F4",
										d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
									}),
									/* @__PURE__ */ jsx("path", {
										fill: "#34A853",
										d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
									}),
									/* @__PURE__ */ jsx("path", {
										fill: "#FBBC05",
										d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
									}),
									/* @__PURE__ */ jsx("path", {
										fill: "#EA4335",
										d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
									})
								]
							}), "Continue with Google"]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "my-6 flex items-center gap-3 text-xs text-muted-foreground",
							children: [
								/* @__PURE__ */ jsx("div", { className: "h-px flex-1 bg-foreground/10" }),
								" OR ",
								/* @__PURE__ */ jsx("div", { className: "h-px flex-1 bg-foreground/10" })
							]
						}),
						/* @__PURE__ */ jsxs("form", {
							onSubmit: submit,
							className: "space-y-3",
							children: [
								mode === "signup" && /* @__PURE__ */ jsx("input", {
									value: name,
									onChange: (e) => setName(e.target.value),
									placeholder: "Full name",
									className: "w-full rounded-xl border border-foreground/10 bg-background px-4 py-3 outline-none focus:border-primary"
								}),
								/* @__PURE__ */ jsx("input", {
									type: "email",
									required: true,
									value: email,
									onChange: (e) => setEmail(e.target.value),
									placeholder: "Email",
									className: "w-full rounded-xl border border-foreground/10 bg-background px-4 py-3 outline-none focus:border-primary"
								}),
								/* @__PURE__ */ jsx("input", {
									type: "password",
									required: true,
									minLength: 8,
									value: password,
									onChange: (e) => setPassword(e.target.value),
									placeholder: "Password (min 8 chars)",
									className: "w-full rounded-xl border border-foreground/10 bg-background px-4 py-3 outline-none focus:border-primary"
								}),
								error && /* @__PURE__ */ jsx("p", {
									className: "text-sm text-destructive",
									children: error
								}),
								/* @__PURE__ */ jsxs("button", {
									disabled: busy,
									className: "magnetic-btn flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 text-sm font-semibold text-primary-foreground shadow-glow disabled:opacity-60",
									children: [busy && /* @__PURE__ */ jsx(Loader2, { className: "size-4 animate-spin" }), mode === "signin" ? "Sign in" : "Create account"]
								})
							]
						}),
						/* @__PURE__ */ jsx("button", {
							onClick: () => setMode(mode === "signin" ? "signup" : "signin"),
							className: "mt-4 w-full text-sm text-muted-foreground hover:text-primary",
							children: mode === "signin" ? "Don't have an account? Sign up" : "Already have an account? Sign in"
						})
					]
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-6 text-center text-xs text-muted-foreground",
					children: /* @__PURE__ */ jsx(Link, {
						to: "/",
						className: "hover:text-primary",
						children: "← Back to homepage"
					})
				})
			]
		})
	});
}
//#endregion
export { AuthPage as component };
