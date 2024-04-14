import React, { useEffect, useState } from 'react'

const NewsList = () => {
    const [news, setNews] = useState([])

    useEffect(() => {
        const fetchNews = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await response.json()
            setNews(data)
        }

        fetchNews()
    }, [])

    return (
        <div>
            <h2>뉴스 목록</h2>
            <ul>
                {news.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default NewsList
