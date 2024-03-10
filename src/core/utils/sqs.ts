import { OfflineUtils } from "./offline";

const queueUrls: Record<string, string> = {
	consumer: process.env.CONSUMER_QUEUE_URL!,
};

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

	static readonly queueUrl = (queueName: string): string =>
		OfflineUtils.isOffline()
			? `${process.env.ENDPOINT}/000000000000/${queueUrls[queueName]}`
			: queueUrls[queueName];
}
