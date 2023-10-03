import RootLayout from '@/components/Layouts/RootLayout';
import { useGetNewsQuery } from '@/redux/api/apiSlice';
import dynamic from 'next/dynamic';
import React from 'react';



//Here we fetch data by using RTK query. And CLIENT SIDE RENDERING

const Posts = () => {
    const { data, isLoading } = useGetNewsQuery(undefined);
    console.log(data);

    const DynamicBanner = dynamic(() => import('@/components/UI/Banner'), {
        loading: () => <h1>Loading...</h1>,
        ssr: false
    })
    return (
        <div>

            <DynamicBanner />
            <h2> Post :{data?.length}</h2>
        </div>
    );
};

export default Posts;


Posts.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};