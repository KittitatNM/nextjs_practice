import Link from "next/link"

export default function Nav() {
    return (
        <>
            <nav className="navbar navbar-dark bg-dark navbar-fixed-top navbar-expand">
                <div className="container-fluid">
                    <div className="nav navbar-nav">
                        <Link href="/" className="nav-item">
                            <a className="nav-link">Home</a>
                        </Link>
                        <Link href="/movie">
                            <a className="nav-link">Movie</a>
                        </Link>
                        <Link href="/about">
                            <a className="nav-link">About</a>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    )
}
