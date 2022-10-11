import '../styles/ErrorPageTerminal.css'

export const ErrorPageTerminal = () => {
    return (
        <div className="error-page-terminal">
            <div className="container">
                <form className="four-oh-four-form">
                    <input type="text" className="404-input"/>
                </form>

                <div className="terminal">
                    <p className="prompt">The page you requested cannot be found right now.</p>
                    <p className="prompt">Error code - 404.</p>
                    <p className="prompt output new-output"></p>
                </div>
            </div>
        </div>
    )
}