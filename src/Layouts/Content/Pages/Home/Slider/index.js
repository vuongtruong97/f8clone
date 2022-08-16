import React, { useState, useLayoutEffect, useRef, useEffect, useMemo } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Styles from './slider.module.scss'
import clsx from 'clsx'
import { Button } from '../../../../../Components'
import { useStore } from '../../../../../Store'

const data = {
    data: [
        {
            id: 8,
            placement: 'home',
            type: 'slideshow',
            banner: 'banners/Banner_web_ReactJS.png',
            title: 'Học ReactJS Miễn Phí!',
            description: 'Khóa học ReactJS từ cơ bản tới nâng cao. Kết quả của khóa học này là bạn có thể làm hầu hết các dự án thường gặp với ReactJS.',
            alt: 'Khoá học ReactJS online tại F8',
            cta_title: 'Đăng ký ngay',
            link_to: 'https://fullstack.edu.vn/courses/reactjs?ref=banner',
            data: {
                props: {
                    style: {
                        '--cta-hover-color': '#2877FA',
                        background: 'linear-gradient(to right, #2877FA, #6717CD',
                    },
                },
            },
            is_blank: 1,
            priority: 0,
            expired: '2022-12-12 00:00:00',
            created_at: '2022-12-11T10:00:00.000000Z',
            updated_at: '2022-12-11T10:00:00.000000Z',
            banner_url: 'https://files.fullstack.edu.vn/f8-prod/banners/Banner_web_ReactJS.png',
        },
        {
            id: 3,
            placement: 'home',
            type: 'slideshow',
            banner: 'banners/Banner_01_2.png',
            title: 'Thành Quả của Học Viên',
            description: 'Để đạt được kết quả tốt trong mọi việc ta cần xác định mục tiêu rõ ràng cho việc đó. Học lập trình cũng không là ngoại lệ.',
            alt: 'Thành quả của học viên',
            cta_title: 'Xem thành quả',
            link_to: 'https://fullstack.edu.vn/blog/tong-hop-cac-san-pham-cua-hoc-vien-tai-f8.html',
            data: {
                props: {
                    style: {
                        '--cta-hover-color': '#7612ff',
                        background: 'linear-gradient(to right, #7612ff, #05b2ff)',
                    },
                },
            },
            is_blank: 1,
            priority: 10,
            expired: '2022-12-12 00:00:00',
            created_at: '2022-12-11T10:00:00.000000Z',
            updated_at: '2022-12-11T10:00:00.000000Z',
            banner_url: 'https://files.fullstack.edu.vn/f8-prod/banners/Banner_01_2.png',
        },
        {
            id: 4,
            placement: 'home',
            type: 'slideshow',
            banner: 'banners/Banner_03_youtube.png',
            title: 'F8 trên Youtube',
            description: 'F8 được nhắc tới ở mọi nơi, ở đâu có cơ hội việc làm cho nghề IT và có những con người yêu thích lập trình F8 sẽ ở đó.',
            alt: 'F8 trên Youtube',
            cta_title: 'Truy cập kênh',
            link_to: 'https://www.youtube.com/channel/UCNSCWwgW-rwmoE3Yc4WmJhw',
            data: {
                props: {
                    style: {
                        '--cta-hover-color': '#fe215e',
                        background: 'linear-gradient(to right, #fe215e , #ff9402',
                    },
                },
            },
            is_blank: 1,
            priority: 11,
            expired: '2022-12-12 00:00:00',
            created_at: '2022-12-11T10:00:00.000000Z',
            updated_at: '2022-12-11T10:00:00.000000Z',
            banner_url: 'https://files.fullstack.edu.vn/f8-prod/banners/Banner_03_youtube.png',
        },
        {
            id: 5,
            placement: 'home',
            type: 'slideshow',
            banner: 'banners/Banner_04_2.png',
            title: 'F8 trên Facebook',
            description: 'F8 được nhắc tới ở mọi nơi, ở đâu có cơ hội việc làm cho nghề IT và có những con người yêu thích lập trình F8 sẽ ở đó.',
            alt: 'F8 trên Facebook',
            cta_title: 'Truy cập nhóm',
            link_to: 'https://www.facebook.com/groups/649972919142215',
            data: {
                props: {
                    style: {
                        '--cta-hover-color': '#007efe',
                        background: 'linear-gradient(to right, #007efe, #06c3fe',
                    },
                },
            },
            is_blank: 1,
            priority: 12,
            expired: '2022-12-12 00:00:00',
            created_at: '2022-12-11T10:00:00.000000Z',
            updated_at: '2022-12-11T10:00:00.000000Z',
            banner_url: 'https://files.fullstack.edu.vn/f8-prod/banners/Banner_04_2.png',
        },
    ],
}

function Slider() {
    const { SliderData } = useStore()
    const [fakeSliderAPIdata, setFakeSliderAPIdata] = useState(data)
    const sliderRef = useRef()
    const sliderListRef = useRef()
    const [clientWidth, setClientWidth] = useState(0)
    const [sliderIndex, setSliderIndex] = useState(0)
    const [curSlider, setCurSlider] = useState(sliderIndex)
    useEffect(() => {
        const handleResize = () => {
            setClientWidth(sliderRef.current.clientWidth)
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    useLayoutEffect(() => {
        setClientWidth(sliderRef.current.clientWidth)
    }, [])
    useEffect(() => {
        const autoSlider = setInterval(() => {
            handleNextSlider()
        }, 8000)
        return () => {
            clearInterval(autoSlider)
        }
    }, [sliderIndex])

    useEffect(() => {
        sliderListRef.current.style.transform = `translateX(-${clientWidth * sliderIndex}px)`
    }, [sliderIndex, fakeSliderAPIdata, clientWidth])
    const handleNextSlider = () => {
        setSliderIndex((prev) => {
            let newIndex = prev + 1
            if (newIndex >= SliderData.length) {
                newIndex = 0
            }
            setCurSlider(newIndex)
            return newIndex
        })
    }
    const handlePrevSlider = () => {
        setSliderIndex((prev) => {
            let newIndex = prev - 1
            if (newIndex < 0) {
                newIndex = SliderData.length - 1
            }
            setCurSlider(newIndex)
            return newIndex
        })
    }
    const handleChangeSlider = (i) => {
        setSliderIndex(i)
        setCurSlider(i)
    }
    return (
        <div ref={sliderRef} className={clsx(Styles.slider)}>
            <div onClick={handlePrevSlider} className={clsx(Styles.prevBtn)}>
                <FontAwesomeIcon icon='fa-solid fa-angle-left' />
            </div>
            <div onClick={handleNextSlider} className={clsx(Styles.nextBtn)}>
                <FontAwesomeIcon icon='fa-solid fa-angle-right' />
            </div>

            <div style={{ width: clientWidth }} className={clsx(Styles.sliderView)}>
                <div ref={sliderListRef} style={{ width: clientWidth * SliderData.length }} className={clsx(Styles.sliderItemList)}>
                    {SliderData.map((item, i) => (
                        <div
                            style={{
                                width: clientWidth,
                                ...item.data.props.style,
                            }}
                            key={i}
                            className={clsx(Styles.sliderItem)}
                        >
                            <div className={clsx(Styles.sliderItem_left)}>
                                <h2 className={clsx(Styles.sliderLeft_title)}>{item.title}</h2>
                                <h4 className={clsx(Styles.sliderLeft_desc)}>{item.description}</h4>
                                <Button className={clsx(Styles.sliderLeft_btn)}>{item.cta_title}</Button>
                            </div>
                            <div className={clsx(Styles.sliderItem_right)}>
                                <img src={item.banner_url} />
                            </div>
                        </div>
                    ))}
                </div>
                <div className={clsx(Styles.sliderSlickWrap)}>
                    {SliderData.map((item, i) => (
                        <button
                            onClick={() => handleChangeSlider(i)}
                            key={i}
                            className={clsx(Styles.sliderSlickBtn, {
                                [Styles.active]: curSlider == i,
                            })}
                        ></button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Slider
