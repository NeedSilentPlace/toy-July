import assert from "assert";

// api test
import '../imports/api/messages/messages.test';
import '../imports/api/posts/posts.test';

//component

if(Meteor.isClient) {
  import { shallow, configure } from 'enzyme';
  import Adapter from 'enzyme-adapter-react-16';

  configure({ apdapter: new Adapter() });
  import '../imports/ui/tests/SignupForm.test';
}
// import '../imports/ui/tests/SignupForm.test';

describe("hank-toy", function () {
  it("package.json has correct name", async function () {
    const { name } = await import("../package.json");
    assert.strictEqual(name, "hank-toy");
  });

  if (Meteor.isClient) {
    it("client is not server", function () {
      assert.strictEqual(Meteor.isServer, false);
    });
  }

  if (Meteor.isServer) {
    it("server is not client", function () {
      assert.strictEqual(Meteor.isClient, false);
    });
  }
});
