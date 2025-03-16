

export function List({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="list">
            {children}
        </div>
    );
}

export function ListHeader({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="list-header header">
            <h2>
                {children}
            </h2>
        </div>
    );
}

export function ListItem({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <li className="list-item">
            &nbsp;* {children}
        </li>
    );
}

export function ListContent({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <ul className="list-content">
            {children}
        </ul>
    );
}