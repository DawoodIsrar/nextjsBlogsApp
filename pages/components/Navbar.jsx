import React from 'react'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'
const Navbar = () => {
  return (
    <>
            <ul className={styles.mainnav}>
                <li>
                    <Link href={'/'}>Home</Link>
                </li>
                <li>
                <Link href={'/dashboard/about'}>about</Link>
                </li>
                <li>
                <Link href={'/dashboard/services'}>blogs</Link>
                </li>
                <li>
                <Link href={'/dashboard/contact'}>contact us</Link>
                </li>
                <li>
                <Link href={'/dashboard/setting'}>setting</Link>
                </li>
            </ul>
        </>
  )
}

export default Navbar
