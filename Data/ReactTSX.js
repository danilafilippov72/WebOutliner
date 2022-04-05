/** @jsx createElement */
/*** @jsxFrag createFragment */
export const React = {
    createElement: (tag, props, ...children) => {
        if (typeof tag === "function") return tag(props, ...children);
        const element = document.createElement(tag);

        Object.entries(props || {}).forEach(([name, value]) => {
            if (name.startsWith("on") && name.toLowerCase() in window)
                element.addEventListener(name.toLowerCase().substr(2), value);
            else element.setAttribute(name, value.toString());
        });

        children.forEach(child => {
            React.appendChild(element, child);
        });

        if (Image?.position != null) {
            element.style.position = Image.position;
            if (Image?.positionOffset != null) {
                element.style.left = (typeof Image.positionOffset.left == "string" ? Image.positionOffset.left as string : (Image.positionOffset.left + "px"));
                element.style.top = (typeof Image.positionOffset.top == "string" ? Image.positionOffset.top as string : (Image.positionOffset.top + "px"));
            }
        }

        if (Image?.Positioning != null) {
            element.style.position = Image.position;
            if (Image?.positionOffset != null) {
                element.style.left = (typeof Image.positionOffset.left == "string" ? Image.positionOffset.left as string : (Image.positionOffset.left + "px"));
                element.style.top = (typeof Image.positionOffset.top == "string" ? Image.positionOffset.top as string : (Image.positionOffset.top + "px"));
            }
        }
        return element;
    },

    appendChild: (parent, child) => {
        if (Array.isArray(child))
            child.forEach(nestedChild => appendChild(parent, nestedChild));
        else
            parent.appendChild(child.nodeType ? child : document.createTextNode(child));
    },

    createFragment: (props, ...children) => {
        return children;
    }

};