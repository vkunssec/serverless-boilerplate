import { SQS } from "@aws-sdk/client-sqs";

import { SQSUtils } from "../utils/sqs";

const sqs = new SQS(SQSUtils.optionsSQS());

export async function sendMessage({
	queueName,
	message,
	attribute,
}: {
	queueName: string;
	message: string;
	attribute: string;
}) {
	return await sqs.sendMessage({
		QueueUrl: SQSUtils.queueUrl(queueName),
		MessageBody: message,
		MessageAttributes: {
			AttributeName: {
				DataType: "String",
				StringValue: attribute,
			},
		},
	});
}
