import { Link, Outlet } from "react-router-dom"
import { links } from "../router"

const Default: React.FC = () => {
    return (
        <div>
            <nav>
                {links.map((link) => {
                    if(link.path) {
                        return (
                            <Link to={link.path}>{link.title || link.path}</Link>
                        )
                    }
                })}
            </nav>

            <Outlet></Outlet>
        </div>
    )
}

export default Default;