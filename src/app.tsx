const technologies = [
    {
        href: "https://pnpm.io/",
        name: "pnpm",
    },
    {
        href: "https://vitejs.dev/",
        name: "Vite",
    },
    {
        href: "https://volta.sh/",
        name: "Volta",
    },
    {
        href: "https://react.dev/",
        name: "React 18",
    },
    {
        href: "https://www.typescriptlang.org/",
        name: "TypeScript 5",
    },
    {
        href: "https://eslint.org/",
        name: "ESLint",
    },
    {
        href: "https://stylelint.io/",
        name: "Stylelint",
    },
    {
        href: "https://prettier.io/",
        name: "Prettier",
    },
    {
        href: "https://github.com/evilmartians/lefthook",
        name: "Lefthook",
    },
];

export function App() {
    return (
        <main>
            <h1>Starter template for React 🌀</h1>
            <ul>
                {technologies.map((technology) => (
                    <li key={technology.href}>
                        <a href={technology.href} target="_blank">
                            {technology.name}
                        </a>
                    </li>
                ))}
            </ul>
        </main>
    );
}
