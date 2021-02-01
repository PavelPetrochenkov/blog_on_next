import Link from 'next/link';
import style from '../../styles/MainLayout.module.css'

function MainLayout({children}) {
    return (
        <>
            <nav className={style.navigation}>
                <Link href='/' ><a className={style.link}>Home</a></Link>
                <Link href='/posts/new'><a className={style.link}>Create post</a></Link>
            </nav>
            <main>
                {children}
            </main>
        </>
    )
}

export default MainLayout
