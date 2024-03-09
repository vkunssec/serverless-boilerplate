import { APIGatewayProxyEventV2, Context, Handler } from "aws-lambda";
import { StatusCodes } from "http-status-codes";

export const handler: Handler = async (
	event: APIGatewayProxyEventV2,
	context: Context,
) => {
	return await new Promise((resolve) => {
		resolve({
			statusCode: StatusCodes.OK,
			body: JSON.stringify({
				status: "OK",
				uptime: new Date().toJSON(),
				event,
				context,
			}),
		});
	});
};
