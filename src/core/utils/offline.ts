export class OfflineUtils {
	static readonly optionsSQS = (): {
		credentials?: {
			accessKeyId: string;
			secretAccessKey: string;
		};
		endpoint?: string;
	} => ({
		credentials: {
			accessKeyId: "doesnt_matter",
			secretAccessKey: "doesnt_matter",
		},
		endpoint: process.env.ENDPOINT,
	});

	static readonly isOffline = (): boolean =>
		process.env.IS_OFFLINE === "true";
}
