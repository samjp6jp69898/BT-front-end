import { mount } from "@vue/test-utils";

import Hello from "../components/hello.vue";

describe("my describe", () => {
  it("test", () => {
    const wrapper = mount(Hello);

    console.log(wrapper.text());
    expect(wrapper.text()).toContain("Hello World");
  });
});