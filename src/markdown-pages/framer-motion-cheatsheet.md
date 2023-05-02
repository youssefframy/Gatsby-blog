---
title: "Master the Art of Animation with Framer Motion: Your Ultimate Cheat Sheet"
date: "4/19/2023"
---

Framer Motion is a popular animation library for React, used to create highly performant and flexible animations for web and mobile applications.

#### Installation

```pwsh
npm install framer-motion
```

#### Basic Usage

```jsx
import { motion } from 'framer-motion';

const App = () => (
  <motion.div
    animate={{ x: 100 }}
    transition={{ duration: 1 }}
  >
    Hello, Framer Motion!
  </motion.div>
);
```

#### Properties

-   `animate`: Object, defines the target state of the animation
-   `initial`: Object, defines the initial state of the animation
-   `exit`: Object, defines the state of the animation when the component is unmounted
-   `transition`: Object, defines the timing and easing of the animation
-   `variants`: Object, defines multiple animations for the same component, allowing for complex transitions
-   `whileHover`: Object, defines the state of the animation when the component is hovered over
-   `whileTap`: Object, defines the state of the animation when the component is tapped
-   `drag`: Boolean/Object, enables draggable animations and defines the constraints for dragging
-   `onDragStart`, `onDrag`, `onDragEnd`: Callback functions for the drag events
-   `onTap`, `onHoverStart`, `onHoverEnd`, `onAnimationStart`, `onAnimationComplete`: Callback functions for various events during the animation
-   `style`, `className`, `id`, `ref`: Standard React props for styling and referencing the component

#### Animatable Properties

-   `x`, `y`, `z`: Positional properties
-   `rotate`, `rotateX`, `rotateY`, `rotateZ`: Rotational properties
-   `scale`, `scaleX`, `scaleY`: Scaling properties
-   `opacity`: Opacity property
-   `background`, `backgroundColor`: Background properties
-   `color`: Text color property
-   `borderRadius`: Border radius property
-   `boxShadow`: Box shadow property
-   `textShadow`: Text shadow property
-   `width`, `height`: Size properties
-   `left`, `right`, `top`, `bottom`: Positional properties relative to the parent container
-   `borderWidth`, `borderColor`, `padding`: Border and padding properties

#### Easing Functions

Framer Motion provides a set of easing functions that can be used in the `transition` prop:

-   `linear`
-   `easeIn`, `easeOut`, `easeInOut`
-   `circIn`, `circOut`, `circInOut`
-   `backIn`, `backOut`, `backInOut`
-   `anticipate`

#### Custom Easing Functions

Framer Motion also allows for custom easing functions to be defined:

```jsx
const customEase = [0.6, -0.05, 0.01, 0.99];

<motion.div
  animate={{ x: 100 }}
  transition={{ ease: customEase }}
>
  Hello, Framer Motion!
</motion.div>
```

#### Variants

Variants allow for more complex animations by defining multiple animations for the same component:

```jsx
const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: -100 },
};

<motion.div
  variants={variants}
  animate={isOpen ? 'open' : 'closed'}
>
  Hello, Framer Motion!
</motion.div>
```

#### Dragging

Framer Motion allows for draggable animations with the `drag` prop:

```jsx
<motion.div
  drag
  dragConstraints={{ left: 0, right: 100 }}
  onDragStart={() => console.log('Drag started')}
  onDragEnd={() => console.log('Drag ended')}
>
  Hello, Framer Motion!
</motion.div>
```

The `dragConstraints` prop defines the boundaries for dragging, and the `onDragStart` and `onDragEnd` props are callback functions that trigger when dragging starts and ends, respectively.

#### Gestures

Framer Motion also supports a number of gesture-based animations, including drag, tap, hover, and more. Here are a few examples:

```jsx
<motion.div
  whileHover={{ scale: 1.2 }}
  whileTap={{ scale: 0.8 }}
>
  Hover and tap me!
</motion.div>

<motion.div
  drag="x"
  dragConstraints={{ left: 0, right: 100 }}
>
  Drag me horizontally!
</motion.div>

<motion.div
  drag="y"
  dragConstraints={{ top: 0, bottom: 100 }}
>
  Drag me vertically!
</motion.div>
```

#### Animation Controls

Framer Motion provides a number of tools for controlling animations, including the `useAnimation` hook and the `motionValue` function:

```jsx
import { useAnimation, motionValue } from 'framer-motion';

const controls = useAnimation();
const x = motionValue(0);

const handleClick = async () => {
  await controls.start({ x: 100 });
  await controls.start({ x: 0 });
};

<motion.div animate={controls} style={{ x }}>
  Click me to animate!
</motion.div>

<button onClick={handleClick}>Animate</button>
```

In this example, we use the `useAnimation` hook to control the animation, and the `motionValue` function to define the `x` value for the animation. When the button is clicked, the animation is triggered by calling `controls.start()`, which changes the value of `x`.

#### SVG Animations

Framer Motion also supports animating SVG elements:

```jsx
import { motion } from 'framer-motion';

<motion.svg viewBox="0 0 100 100">
  <motion.path
    d="M10 50 Q 50 10 90 50 T 90 50"
    stroke="black"
    fill="transparent"
    strokeWidth="5"
    initial={{ pathLength: 0, pathOffset: 1 }}
    animate={{ pathLength: 1, pathOffset: 0 }}
    transition={{ duration: 2 }}
  />
</motion.svg>
```

In this example, we animate a `path` element by defining its `pathLength` and `pathOffset` properties in the `initial` and `animate` props, and setting a `duration` for the animation in the `transition` prop.

#### Conclusion

Framer Motion is a powerful animation library for React, providing a wide range of tools for creating complex and performant animations. This cheat sheet covers only a few of its many features, so be sure to check out t he official documentation for more information and examples.