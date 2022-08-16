import React, { useState, useEffect, useRef } from 'react'
import clsx from 'clsx'
import Styles from './header.module.scss'
//  icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// Component
import { Button } from '../../Components'
import f8Logo from '../../Assets/photos/f8logo.png'
import f8LogoNew from '../../Assets/photos/f8-icon.18cd71cfcfa33566a22b.png'

function Header() {
    const [login, setLogin] = useState(false)
    const [searchInput, setSearchInput] = useState('')
    const [inputFocus, setInputFocus] = useState(false)
    const searchInputRef = useRef()
    const handleChange = (e) => {
        setSearchInput(e.target.value)
    }
    const handleClear = () => {
        setSearchInput('')
    }
    const handleLogin = () => {
        setLogin(!login)
    }
    useEffect(() => {
        const handleFocus = () => {
            setInputFocus(true)
        }
        const handleBlur = () => {
            setInputFocus(false)
        }
        searchInputRef.current.addEventListener('focus', handleFocus)
        searchInputRef.current.addEventListener('blur', handleBlur)
        return () => {
            searchInputRef.current.removeEventListener('focus', handleFocus)
        }
    }, [])
    return (
        <div className={clsx(Styles.header)}>
            <div className={clsx(Styles.header_logo)}>
                <a>
                    <img src={f8Logo} />
                </a>
                <h4 className={clsx(Styles.header_logoHeading)}>
                    Học Lập Trình Để Đi Làm
                </h4>
            </div>
            <div className={clsx(Styles.header_mobileMenu)}>
                <FontAwesomeIcon icon='fa-solid fa-bars' />
            </div>
            <div className={clsx(Styles.header_search_wrap)}>
                <div
                    className={clsx(Styles.header_search, {
                        [Styles.active]: inputFocus,
                    })}
                >
                    <div className={clsx(Styles.headerSearch_icon)}>
                        <FontAwesomeIcon icon='fa-solid fa-magnifying-glass' />
                    </div>
                    <input
                        value={searchInput}
                        ref={searchInputRef}
                        onChange={handleChange}
                        spellCheck={false}
                        placeholder='Tìm kiếm khoá học, bài viết, video, ...'
                        className={clsx(Styles.headerSearch_input)}
                    />
                    {searchInput && (
                        <div
                            onClick={handleClear}
                            className={clsx(Styles.header_seachClear)}
                        >
                            <FontAwesomeIcon icon='fa-solid fa-xmark' />
                        </div>
                    )}
                    {searchInput && inputFocus && (
                        <div className={clsx(Styles.header_searchResult_wrap)}>
                            <ul className={clsx(Styles.header_searchResult)}>
                                <div className={clsx(Styles.searchResult_header)}>
                                    <FontAwesomeIcon icon='fa-solid fa-magnifying-glass' />
                                    <span>Không có kết quả cho '{searchInput}'</span>
                                </div>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
            <div className={clsx(Styles.header_actions_wrap)}>
                <div className={clsx(Styles.header_actions)}>
                    {!login && (
                        <div
                            onClick={handleLogin}
                            className={clsx(Styles.header_userLogin)}
                        >
                            <Button primary>Đăng nhập</Button>
                        </div>
                    )}
                    {login && (
                        <div className={clsx(Styles.header_userInfor)}>
                            <Button className='hihi'>Khoá học của tôi</Button>
                            <div className={clsx(Styles.userInfor_noti)}>
                                <FontAwesomeIcon icon='fa-solid fa-bell' />
                            </div>
                            <img
                                className={clsx(Styles.userInfor_avatar)}
                                src={f8LogoNew}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Header
