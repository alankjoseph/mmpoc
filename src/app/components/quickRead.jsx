"use client"
import { CircularProgress } from '@mui/material';
import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react';
const LazyCard = dynamic(() => import("../components/card"), {
    loading: () => <CircularProgress />,
  });
  

export default function QuickRead() {

    const [data, setData] = useState([]);
    const [count, setCount] = useState(1);

    const fetchMoreData = () => {
        fetch(`https://65f0377eda8c6584131b2640.mockapi.io/api/v1/news-quick-read?page=${count}&limit=3`).then(async d => {
            let tem = [...data]
            let resp = await d.json()
            tem.push(...resp)
            setCount(count + 1)
            setData(tem)
        })
    };

    useEffect(() => {
        if (count === 1) {
            fetchMoreData()
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [data]);

    const handleScroll = () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            fetchMoreData();
        }
    };

    return (
        <>
            <div className="mx-[20px]">
                {/* <Suspense fallback={<CircularProgress />}> */}
                    {data.map((item, index) => (
                        <LazyCard
                            key={index}
                            title={item.headline}
                            desc={item.description}
                            img={item.image}
                        />
                    ))}
                {/* </Suspense> */}
            </div>
        </>
    )
}