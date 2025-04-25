# 🚀 Learning React + TypeScript Journey

Welcome to my React learning journey! This repository is where I document everything I’m learning — from the basics of React to using TypeScript, and finally building small real-world projects.

---

## 🧭 Roadmap

### ✅ Phase 1: Learn React (using Vite + Yarn)
Focus: Get comfortable with React core concepts using plain JavaScript.

- [✅] What is React?
- [✅] Setup React using Vite and Yarn
- [✅] JSX and rendering elements
- [✅] Components (Functional)
- [✅] Router Dom (v.7)
- [✅] Dynamic & Nested Routes
- [✅] React Router Outlet Layout
- [✅] React Router useOutletContext
- [✅] useState and useRef
- [ ] Props and State
- [ ] Event handling
- [ ] Lists and keys
- [ ] Conditional rendering
- [ ] Lifting state up
- [ ] useEffect and lifecycle basics
- [ ] useState and hooks overview
- [ ] Forms in React
- [ ] Basic styling (inline, CSS, or Bootstrap)

---

### 🟨 Phase 2: Learn TypeScript in React
Focus: Enhance your React apps with strong typing and better developer experience.

- [ ] What is TypeScript?
- [ ] Setup Vite + React + TypeScript
- [ ] Basic TypeScript types (string, number, boolean, etc.)
- [ ] Interfaces vs Types
- [ ] Typing Props and State
- [ ] Type Inference and Annotations
- [ ] Optional props and default values
- [ ] React.FC vs normal function components
- [ ] Event types (form events, mouse events, etc.)
- [ ] Generics in components and hooks
- [ ] Creating reusable components with generics
- [ ] Type safety in API calls and async data

---

### 🟩 Phase 3: Build Mini Projects using React + TypeScript
Focus: Apply what I’ve learned by building small, meaningful projects.

- [ ] ✅ Setup GitHub repo for projects
- [ ] 📋 Todo App (with add/edit/delete)
- [ ] 🛒 Simple Shopping Cart
- [ ] 📬 Contact Form with Validation
- [ ] 🌤️ Weather App using external API
- [ ] 🗂️ Reusable Table Component with Generics
- [ ] 📦 Small Admin Dashboard (optional)

---

## 🛠️ Tools I'm Using

- React
- Vite
- Yarn
- TypeScript
- Bootstrap
- Git + GitHub

---

## 🧠 Notes & Learnings

I'll be adding my notes, challenges, and what I’ve learned along the way inside separate folders or markdown files.


# Day 1
- Set up React using Vite using this "yarn create vite "filename" --templates=react | ts
- Set up PORT and add dotenv in file Note! in the .env the name PORT=3000 it must no whitespace
# Day 2
- creating components and folder structure for layout [rootLayout,adminLayout]
- add react-router-dom for navbar and use Navlink and useLocation for static dropdown &custom css for active link
- to add param or ID in URL just use Navlink to = `${car.id}` inside the loop
- adding react router outlet to use diff layout in you diff routes
# Day 3
- using outletContext
- using useState and useRef
- using useEffect
- using useLayoutEffect
# Day 4
- using useMemo and useCallback
# Day 5

---

## 🚧 Work in Progress...

This is a living document, and I’ll keep updating it as I grow as a React + TypeScript developer!
# Day 2
- I learned use react-router-dom v.7 with NavLink and useLocation and Routes - child route
- Navlink = use for url routing with a built in isActive that can be use in nav-link active
- useLocation = use in my static navbar dropdown
- Routes - route = i learned on how to render element base on the path or the URL
- by using React router Outlet you can use Diff Layout in your diff routes by putting in the Route Element

# Day 3
- using useOutlet Context first put a value where you use the outlet from react-router dom put a context there {{test : "sample"}} just like that
- use state and useRef the useState which use for example dynamic data when an event click etc
- the useRef is just like the document.querySelector of vanilla JS you just put a reference on that element then you can do what ever you want after that like disabled it or etc.
- by using useEffect the [] is the dependency which update changes if that state change
- using timer or Timeout inside useEffect you must put clearTimeout to clear and to avoid re render the return inside the timeout function
- by using useLayoutEffect it will renders first than the useEffect it is use for to manipulate DOM before rendering

# Day 4
- by using useMemo it memoize the cache the logic inside of it and it is recommended to use when computing in a large scale of data example filtering data computing totals of orders
- by using useCallback it is the same as useMemo it caching the data but this is use for function only when this function is dynamically change when passing it into child components to avoid rendering again every action happen in parent, this will be rendering if the function is changing

# Day 5

Thanks for checking it out!
