Light 56px header for flows that are not the teal-chrome commerce surfaces.

```jsx
<ScreenHeader title="3 / 5" onBack={back} onClose={exitQuiz} />
<ScreenHeader title="Ütőválasztó" />
```

A title starting with a digit renders as the muted step counter (13px semibold, gray-500, 0.5px tracking); anything else renders as a 17px semibold screen title. Back arrow and close X are Phosphor `arrow-left` / `x` at 22px regular.
