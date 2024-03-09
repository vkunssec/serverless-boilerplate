import { OfflineUtils } from "./offline";

export class SQSUtils {
	static readonly optionsSQS = (): {
		credentials?: {
			accessKeyId: string;
			secretAccessKey: string;
		};
		endpoint?: string;
	} =>
		OfflineUtils.isOffline()
			? {
					credentials: {
						accessKeyId: "doesnt_matter",
						secretAccessKey: "doesnt_matter",
					},
					endpoint: process.env.ENDPOINT,
				}
			: {};

	static readonly queueUrl = (): string =>
		OfflineUtils.isOffline()
			? `${process.env.ENDPOINT}/000000000000/${process.env.QUEUE_URL}`
			: `${process.env.QUEUE_URL}`;
}
