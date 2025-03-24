import { jsx as _jsx } from "react/jsx-runtime";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
function App() {
    return _jsx("div", { children: _jsx(BrowserRouter, { children: _jsx(Routes, { children: _jsx(Route, { index: true, element: _jsx(Home, {}) }) }) }) });
}
export default App;
