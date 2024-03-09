import { SQS } from "@aws-sdk/client-sqs";

import { SQSUtils } from "../utils/sqs";
import { OfflineUtils } from "../utils/offline";

const sqs = new SQS(SQSUtils.optionsSQS());

export async function sendMessage({
	message,
	attribute,
}: {
	message: string | undefined;
	attribute: string | undefined;
}) {
	return await sqs.sendMessage({
		QueueUrl: OfflineUtils.isOffline()
			? SQSUtils.queueUrl()
			: process.env.QUEUE_URL || "",
		MessageBody: message || "",
		MessageAttributes: {
			AttributeName: {
				DataType: "String",
				StringValue: attribute || "",
			},
		},
	});
}
