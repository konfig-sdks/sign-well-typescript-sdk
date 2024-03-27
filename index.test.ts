import { SignWell } from "./index";

describe("sign-well-typescript-sdk", () => {
    it("initialize client", async () => {
        const signwell = new SignWell({
            apiKey: "API_KEY",
        });
    });
});
