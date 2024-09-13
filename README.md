# react-html5-forms-ts
This set of react components provide a simple way to use HTML5 form validation and CSS modules for valid/invalid indicators and messages.

For a working example, view the code sandbox [here](https://codesandbox.io/p/devbox/react-html5-forms-ts-h9m5dx), or see below.

*Notes: For more advanced applications I would recommend something along the lines of Zod/HookForms for validation checking, but occasionally you just need a simple lightweight HTML5 validation check that lets you send your FormData object on success (but with onBlur validation and prettier than the browser default). I'm using tailwindcss in the example code CSS module for easy styling here, but it is not in any way required for use with this set of components.*

**Features**

* Default styling (focus, hover, invalid, valid) encapsulated within CSS module file
* Automatic validation checking during onSubmit and onChange using HTML5 validation rules
* Automatic valid/invalid styling of fields after initial submit or touch if the field is invalid
* Automatic invalid messages shown after initial submit or touch if the field is invalid
* Will still call any custom set onSubmit handlers if validation passes, allowing you to use browser or fetch form submissions
* Components serve as drop in replacements for equivolent HTML elements

**Example usage:**

```
import Form from "./forms/Form.tsx";

export default function App() {
  return (
    <div className="flex flex-col max-w-3xl m-auto p-4">
      <div className="bg-zinc-900 rounded-2xl p-4 flex flex-col gap-4">
        <Form method="post" className="flex flex-col gap-4">
          <Form.Label>
            Email address
            <Form.Input
              name="email"
              type="email"
              placeholder="example@example.com"
              autoFocus
              required
            />
          </Form.Label>
          <Form.Label>
            Product
            <Form.Select name="product" required>
              <option />
              <option value="Test Product 1">Test Product 1</option>
              <option value="Test Product 2">Test Product 2</option>
            </Form.Select>
          </Form.Label>
          <Form.Label>
            Summary of issue
            <Form.Input name="summary" required />
          </Form.Label>
          <Form.Label>
            Steps to reproduce
            <Form.Textarea name="details" rows={5} required />
          </Form.Label>
          <div className="flex flex-row-reverse">
            <Form.Button label="Submit" name="intent" value="supportRequest" />
          </div>
        </Form>
      </div>
    </div>
  );
}
```
