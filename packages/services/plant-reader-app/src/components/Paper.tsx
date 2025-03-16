

/**
 * Renders the children ontop of a lined background
 */
export function Paper({ children } : { children: React.ReactNode }) {
  return (
    <div className="paper-container">
      <div className="paper">
        { children }  
      </div>
    </div>
  )
}

export function Lined({ children } : { children: React.ReactNode }) {
    return (
        <div className="lined">
            { children }
        </div>
    )
}

export function Unlined({ children } : { children: React.ReactNode }) {
    return (
        <div className="unlined">
            { children }
        </div>
    )
}

export function LinedContent({ children } : { children: React.ReactNode }) {
  return (
    <div className="lined">
        <div className="content">
            { children }
        </div>
    </div>
  )
}

export function UnlinedContent({ children } : { children: React.ReactNode }) {
  return (
    <div className="unlined">
        <div className="content">
            { children }
        </div>
    </div>
  )
}