import { Link } from "react-router-dom";

function DashboardNavigation() {
    return <header>
        <nav>
            <ul>
                <li><Link>Профіль</Link></li>
                <li><Link>Запис</Link></li>
                <li><Link>Успішність</Link></li>
                <li><Link>Звіти</Link></li>
            </ul>
        </nav>
    </header>
}

export default DashboardNavigation;