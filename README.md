# react-html5-forms-ts
This set of React components provide a simple way to use HTML5 form validation with CSS modules for custom valid/invalid indicators and messages. Shows initial validation messages onBlur/onSubmit, then updates as the user types after that.

For a working example, view the code sandbox [here](https://codesandbox.io/p/devbox/react-html5-forms-ts-h9m5dx), or see below.

*Notes: I'm using tailwindcss in the example code CSS module for easy styling here, but it is not in any way required for use with this set of components.*

**Features**

* Default styling (focus, hover, invalid, valid) encapsulated within CSS module file
* Automatic validation checking during onSubmit, onChange, or onBlur using HTML5 validation rules
* Automatic valid/invalid styling and messaging after initial submit or field touch
* Will still call any custom set onSubmit handlers passed to forms, allowing you to use browser or fetch submissions.
* Components serve as drop in replacements for equivolent HTML elements, passing all attributes including onChange, onBlur, and onInvalid handlers

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
