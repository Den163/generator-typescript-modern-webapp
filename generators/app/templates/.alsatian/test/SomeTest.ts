import { TestFixture, Test, Expect } from "alsatian";

@TestFixture()
export class SomeTest {
    @Test()
    public TestMethod() {
        Expect(2*2).toBe(4);
    }
}
