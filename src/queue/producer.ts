import { SQS } from "@aws-sdk/client-sqs";
import { APIGatewayEvent } from "aws-lambda";
import { StatusCodes } from "http-status-codes";

import { SQSUtils } from "../core/utils/sqs";
import { OfflineUtils } from "../core/utils/offline";

const sqs = new SQS(SQSUtils.optionsSQS());

export const handler = async (event: APIGatewayEvent) => {
	let message;
	let statusCode = StatusCodes.OK;

	try {
		await sqs.sendMessage({
			QueueUrl: OfflineUtils.isOffline()
				? SQSUtils.queueUrl()
				: process.env.QUEUE_URL || "",
			MessageBody: event.body || "",
			MessageAttributes: {
				AttributeName: {
					DataType: "String",
					StringValue: "attribute.core.consumer",
				},
			},
		});

		message = "Successfully enqueued message!";
	} catch (error) {
		message = error;
		statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
	}

	return {
		statusCode,
		body: JSON.stringify({
			message,
		}),
	};
};
