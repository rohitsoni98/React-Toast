<div align="center"> <a href="https://rohitsoni83.github.io/react-toast/">
  <img alt="react-toast" width="600px" height="350px" classname="border-radius" src="https://www.linkpicture.com/q/react-toast.png"/></a> 
</div>
<div align="center">
<a href="https://rohitsoni83.github.io/react-toast/">Website</a> 
<span>.</span>
<a href="https://github.com/rohitsoni83/react-toast" target="_blank" >Github</a>
</div>

## Features

- 🔥 **Success, Error, Info, and Warning type Toast**
- 🔩 **Easily To Use**
- ➖ **Progressbar Visibility**
- 🕊 **Lightweight** - _less than 5kb including styles_
- ✅ **Accessible**
- 🤯 **Headless Hooks** - \_Create your own with [`useToaster()`]

## Installation

#### With NPM

```sh
npm install cg-toast
```

## Getting Started

Add the Toaster to your app first. It will take care of rendering all notifications emitted. Now you can trigger `toast()` from anywhere!

```jsx
import toast, { Toaster } from "cg-toast";

const showToast = () => toast("I'm a toast.");

const App = () => {
  return (
    <div>
      <button onClick={showToast}>Create a Toast</button>
      <Toaster />
    </div>
  );
};
```
