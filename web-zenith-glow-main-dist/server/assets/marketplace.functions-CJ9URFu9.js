import { i as createServerFn, p as TSS_SERVER_FUNCTION } from "./esm-9EjmF9OT.js";
import { t as getServerFnById } from "./__23tanstack-start-server-fn-resolver-DHbeeB3Q.js";
import { t as requireSupabaseAuth } from "./auth-middleware-Dpn8S0gM.js";
//#region node_modules/@tanstack/start-server-core/dist/esm/createSsrRpc.js
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
createServerFn({ method: "GET" }).inputValidator((data) => data ?? {}).handler(createSsrRpc("a38c4b451b330fcf828615786ee5e90bedb4febca4837c83467101dcfca649fe"));
createServerFn({ method: "GET" }).inputValidator((data) => data).handler(createSsrRpc("4733fe552c043bc4d85b0d2aa900353bb580b7525c616c1a1b56b66d266f0035"));
createServerFn({ method: "GET" }).handler(createSsrRpc("b26aa50745b61d721b8b74bdb186ee1b935d33b94926e2a9960892966bfcfb67"));
var createOrder = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((data) => data).handler(createSsrRpc("8b67d6cf3a9bf3f5cf47512b4587f7b54d07e2565fee2670db8d97a6b4843c67"));
var listMyOrders = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(createSsrRpc("036e7916c6c2f455ce46094370fc9e687960bcd377edf14a0d04ee1333e62376"));
createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).inputValidator((data) => data).handler(createSsrRpc("42a352c5e8254b516d0782b35208c09535d3fc309620e54ba3c9d579ba8e0471"));
createServerFn({ method: "GET" }).handler(createSsrRpc("e6a403c89aa64b4ad10a2d29127c18895991bea821f262495b9f14b51bb569a2"));
var getMyMembership = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(createSsrRpc("8616ce36ce6acd2b71299e21a92e14d78e50405ab804238f95fb2a67a81e0b6a"));
var listMyNotifications = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(createSsrRpc("e140143d86e00fabc8ee9d28c356443aba28060416f05def8f4b6bd330e84f6b"));
createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((data) => data).handler(createSsrRpc("4d9a2d31311a85dce7e58634f4f243bb85c5191a29806165b666eb7329d2a1e1"));
//#endregion
export { listMyOrders as i, getMyMembership as n, listMyNotifications as r, createOrder as t };
