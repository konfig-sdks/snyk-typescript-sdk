import { Snyk } from "./index";

describe("snyk-typescript-sdk", () => {
    it("initialize client", async () => {
        const snyk = new Snyk({
            apiKey: "API_KEY",
        });
    });
});
