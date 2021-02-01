import Link from 'next/link';
import { getPosts } from '../../redux/actions/postsAction';
import style from '../../styles/MainLayout.module.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react'

function MainLayout({ children }) {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts())
    }, [])

    return (
        <>
            <nav className={style.navigation}>
                <Link href='/' ><a className={style.link}>Home</a></Link>
                <Link href='/posts/new'><a className={style.link}>Create post</a></Link>
            </nav>
            <main className={style.main}>
                {children}
            </main>
        </>
    )
}

export default MainLayout
