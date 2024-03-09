import { APIGatewayProxyEventV2, Handler } from "aws-lambda";
import { StatusCodes } from "http-status-codes";

import { sendMessage } from "../core/aws/sqs";

export const handler: Handler = async (event: APIGatewayProxyEventV2) => {
	let response;
	let statusCode = StatusCodes.OK;

	try {
		const message = event.body || "";
		const attribute = "attribute.core.consumer";
		await sendMessage({ message, attribute });

		response = "Successfully enqueued message!";
	} catch (error) {
		response = error;
		statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
	}

	return {
		statusCode,
		body: JSON.stringify({
			response,
		}),
	};
};
