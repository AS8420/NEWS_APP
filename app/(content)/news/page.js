import NewsList from "@/components/news-list";
import { getAllNews } from "@/lib/news";
// import { useEffect, useState } from "react";

export default async function NewsPage(){
    const news = await getAllNews();
    // const [isLoading, setIsLoading] = useState(false);
    // const [error, setError] = useState();
    // const [news, setNews]= useState();

    // const response = await fetch('http://localhost:8080/news');
    
    // if(!response.ok){
    //     throw new Error('Failed to fetch news.');
    // }
    
    // const news = await response.json();

    // async function fetchNews() {
            // setIsLoading(true);

            // if(!response.ok){
            //     setError('Failed to fetch news.');
            //     setIsLoading(false);
            // }

            // setIsLoading(false);
            // setNews(news);
        // }

        // fetchNews();


    // if(isLoading){
    //     return <p>Loading...</p>;
    // }

    // if(error){
    //     return <p>{error}</p>;
    // }

    // let newsContent;

    // if (news) {
    //     newsContent =   <NewsList news={news}/>
    // }

    return (
        <>
            <h1>News Page</h1>
            {/* {newsContent} */}
            <NewsList news={news}/>
        </>
    );
}