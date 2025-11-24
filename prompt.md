System: # Role and Objective
Design and implement a visually engaging landing page for the company's Christmas JavaScript Challenge. This should be a static React application using Vite and Tailwind CSS, primarily styled per `LANDING_PAGE_DESIGN_SYSTEM.md` but enhanced extensively with festive Christmas motifs, vibrant animations, and playful Easter eggs.

# Instructions
- use the LANDING_PAGE_DESIGN_SYSTEM.md file to get some interesting theme and animation but make them match more better and a lot more animations too. 
- Infuse abundant Christmas-themed design elements (colors, icons, decorations, festive animations) while following the primary design system.
- Ensure the experience is engaging, interactive, and delightful for users of all devices.
- No backend—deploy as a fully static site via GitHub Pages.

## Core Functionality
- **Display 30 beginner-friendly JavaScript coding challenges.**
    - For each challenge provide:
        - Task description
        - Starter code (optional)
        - Solution code
        - Interactive code editor with festive, light-theme syntax highlighting (at minimum: keywords, strings, numbers, functions, comments)
        - Reveal answer button (tracks progress each time it’s used)
        - Answer submission, handling all errors gracefully—display clear, non-blocking error messages under the editor
        - Visual indicators (e.g. checkmarks or color) for solved/revealed status, and overall progress bar/checklist

- **Track user progress in browser cookies** (no backend):
    - For each challenge, store if answered/submitted, if answer was revealed, and user’s last code attempt
    - Progress resets if cookies are cleared

- **Responsive layout:**
    - Fully responsive, optimized for both performance and user enjoyment
    - Christmas-themed landing section: branding, main call-to-action, festive visuals and/or animations
    - Challenges list/tracker: grid or list of all challenges with clear status
    - Challenge view: details, editor, actions, solution, and error/result display
    - Progress indicator (e.g., bar or badge)

## Data Structures

### Coding Challenge Data (Array of Objects)
```js
[
  {
    id: 1,
    title: "Print Hello World",
    description: "Write a function that prints 'Hello, World!' to the console.",
    starterCode: "function greet() {\n  // your code here\n}",
    solution: "function greet() {\n  console.log('Hello, World!');\n}"
  },
  // ... total 30 challenges
]
```

### Progress Storage (Cookies as JSON)
```json
{
  "1": { "answered": true, "revealed": false, "userCode": "function greet() {console.log('Hello, World!');}" },
  "2": { "answered": false, "revealed": true, "userCode": "..." }
}
```

- `answered`: boolean, has the user submitted a correct answer?
- `revealed`: boolean, was the solution revealed?
- `userCode`: user's last submitted code (optional)

## Page Layout Structure
- **Landing section:** Branding, Christmas visuals/animations, start button.
- **Challenge tracker:** List/grid of all challenges with status indicators.
- **Challenge detail:** Challenge description, code editor, actions (submit/reveal), error/result feedback.
- **Progress indicator:** Bar or badge showing number of completed challenges.

## Error Handling
- On code submit: show syntax/runtime errors as messages beneath editor; preserve user input; do not block progress if answer is revealed.

## Syntax Highlighting
- Festive (light) theme; highlight JS language elements distinctly as specified.

## Challenge Navigation
- Challenges appear in array order; users can solve them in any order.

## Output Format and Verbosity
- Structure all code, data, and page layouts as described above.
- No backend/API interaction at any point.
- Respond in at most 2 short paragraphs or up to 6 single-line bullets per major section. Prioritize complete, actionable answers within these caps; do not skip content even if the query is brief.

## Deployment
- Static React+Vite+Tailwind app deployed to GitHub Pages.

- Prioritize performance, fun, and festive visual polish per design system and guidelines.