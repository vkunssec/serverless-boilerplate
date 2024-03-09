import assert from "node:assert";
import test from "node:test";

import { APIGatewayProxyEventV2, Callback, Context } from "aws-lambda";

import { handler } from "../../lambda/healthcheck";

test("healthcheck test", async (_t) => {
	const testEvent = {} as APIGatewayProxyEventV2;
	const testContext = {} as Context;
	const testCallback = {} as Callback;

	const response = await handler(testEvent, testContext, testCallback);

	assert.strictEqual(response.statusCode, 200);
});
