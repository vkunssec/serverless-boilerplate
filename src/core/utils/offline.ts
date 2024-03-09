export class OfflineUtils {
	static readonly isOffline = (): boolean =>
		process.env.IS_OFFLINE === "true";
}
