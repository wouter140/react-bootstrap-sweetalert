import {Example} from "./Example";

const title: string = "Password Prompt with a footer";

const snippet: string = `
<SweetAlert
  input
  required
  inputType="password"
  title="Enter Password"
  validationMsg="You must enter your password!"
  onConfirm={this.onConfirm}
  footer="This is a footer"
/>
`;

export default new Example(title, snippet);
