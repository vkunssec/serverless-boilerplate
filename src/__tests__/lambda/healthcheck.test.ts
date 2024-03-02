import assert from "node:assert";
import test from "node:test";

import { APIGatewayProxyEventV2, Callback, Context } from "aws-lambda";

import { healthcheck } from "../../lambda/healthcheck";

test("healthcheck test", async (_t) => {
	const testEvent = {} as APIGatewayProxyEventV2;
	const testContext = {} as Context;
	const testCallback = {} as Callback;

	const response = await healthcheck(testEvent, testContext, testCallback);

	assert.strictEqual(response.statusCode, 200);
});
