

export default function Header({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <header className="header">
            <h1>
                {children}
            </h1>
        </header>
    );
}