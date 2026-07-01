//#region \0%23tanstack-start-server-fn-resolver
var manifest = {
	"036e7916c6c2f455ce46094370fc9e687960bcd377edf14a0d04ee1333e62376": {
		functionName: "listMyOrders_createServerFn_handler",
		importer: () => import("./marketplace.functions-DmTvNPyQ.js")
	},
	"42a352c5e8254b516d0782b35208c09535d3fc309620e54ba3c9d579ba8e0471": {
		functionName: "getMyOrder_createServerFn_handler",
		importer: () => import("./marketplace.functions-DmTvNPyQ.js")
	},
	"4733fe552c043bc4d85b0d2aa900353bb580b7525c616c1a1b56b66d266f0035": {
		functionName: "getService_createServerFn_handler",
		importer: () => import("./marketplace.functions-DmTvNPyQ.js")
	},
	"4d9a2d31311a85dce7e58634f4f243bb85c5191a29806165b666eb7329d2a1e1": {
		functionName: "markNotificationRead_createServerFn_handler",
		importer: () => import("./marketplace.functions-DmTvNPyQ.js")
	},
	"8616ce36ce6acd2b71299e21a92e14d78e50405ab804238f95fb2a67a81e0b6a": {
		functionName: "getMyMembership_createServerFn_handler",
		importer: () => import("./marketplace.functions-DmTvNPyQ.js")
	},
	"8b67d6cf3a9bf3f5cf47512b4587f7b54d07e2565fee2670db8d97a6b4843c67": {
		functionName: "createOrder_createServerFn_handler",
		importer: () => import("./marketplace.functions-DmTvNPyQ.js")
	},
	"a38c4b451b330fcf828615786ee5e90bedb4febca4837c83467101dcfca649fe": {
		functionName: "listServices_createServerFn_handler",
		importer: () => import("./marketplace.functions-DmTvNPyQ.js")
	},
	"b26aa50745b61d721b8b74bdb186ee1b935d33b94926e2a9960892966bfcfb67": {
		functionName: "listCategories_createServerFn_handler",
		importer: () => import("./marketplace.functions-DmTvNPyQ.js")
	},
	"e140143d86e00fabc8ee9d28c356443aba28060416f05def8f4b6bd330e84f6b": {
		functionName: "listMyNotifications_createServerFn_handler",
		importer: () => import("./marketplace.functions-DmTvNPyQ.js")
	},
	"e6a403c89aa64b4ad10a2d29127c18895991bea821f262495b9f14b51bb569a2": {
		functionName: "listMembershipPlans_createServerFn_handler",
		importer: () => import("./marketplace.functions-DmTvNPyQ.js")
	}
};
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ?? await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { getServerFnById as t };
