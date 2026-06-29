## How to properly run the project

1. Install all dependencies:
   ```bash
   npm install --legacy-peer-deps
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```

## Project directory structure and files

```text
frontendapp
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── src/
│   ├── assets/
│   │   ├── images/
│   │       └── logo.png
│   ├── components/
│   │   ├── Footer/
│   │   │   ├── Footer.css
│   │   │   └── Footer.jsx
│   │   ├── Navbar/
│   │   │   ├── Navbar.css
│   │   │   └── Navbar.jsx
│   │   └── Toast/
│   │       ├── Toast.css
│   │       └── Toast.jsx
│   ├── context/
│   │   └── ToastContext.jsx
│   ├── data/
│   │   ├── ingredients.js
│   │   └── pizzas.js
│   ├── pages/
│   │   ├── BuildPizza/
│   │   │   ├── BuildPizza.css
│   │   │   └── BuildPizza.jsx
│   │   ├── Cart/
│   │   │   ├── Cart.css
│   │   │   └── Cart.jsx
│   │   ├── Home/
│   │   │   ├── Home.css
│   │   │   └── Home.jsx
│   │   └── OrderPizza/
│   │       ├── OrderPizza.css
│   │       └── OrderPizza.jsx
│   ├── store/
│   │   ├── buildPizzaSlice.js
│   │   ├── cartSlice.js
│   │   └── index.js
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── vite.config.js
└── README.md
```
