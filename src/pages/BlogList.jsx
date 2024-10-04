
import style from './BlogList.module.scss';
import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { SingleQuery } from '../query/query';
import request from 'graphql-request';
import { SinglePage } from './SinglePage';


const BlogList = ({ blogs }) => {
    
    const [isListVisible, setIsListVisible] = useState(true);
    const [selectedPost, setSelectedPost] = useState(null);
    const handleClick = (recivedId) => {
 
        console.log(recivedId);
        setSelectedPost(recivedId);
        setIsListVisible(false);

      };
     
    

        

  return (
    <>
    {isListVisible && (
        <div className={style.container}>
        <div className={style.head}> 
        {blogs.slice(0,1).map(post => (
            <article key={post.id}>  
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <p className={style.times}>{post.created} By: Omid</p>
                <a onClick={() => handleClick(post.id)} >Read more</a>
                <img src={post.image.url} alt="" />
            </article>
        ))}
        </div>
        <div className={style.second}>
        {blogs.slice(1,2).map(post => (
            <article key={post.id}>                        
                <h3>{post.title}</h3>
                <p className={style.times}>{post.created} by: Omid </p>
                <a onClick={() => handleClick(post.id)} >Read more</a>
                <img src={post.image.url} alt="" />
            </article>
        ))}
        </div>


        <div className={style.secRight}>
        {blogs.slice(2,3).map(post => (
            <article key={post.id}>                        
                <h3>{post.title}</h3>
                <p className={style.times}>{post.created} by: Omid </p>
                <a onClick={() => handleClick(post.id)} >Read more</a>
                <img src={post.image.url} alt="" />
            </article>
        ))}
        </div>
        <div className={style.secl}>
        {blogs.slice(3,4).map(post => (
            <article key={post.id}>                        
                <h3>{post.title}</h3>
                <p className={style.times}>{post.created} by: Omid </p>
                <a onClick={() => handleClick(post.id)} >Read more</a>
                <img src={post.image.url} alt="" />
            </article>
        ))}
        </div>
        <div className={style.secure}>
        {blogs.slice(4,5).map(post => (
            <article key={post.id}>                        
                <h3>{post.title}</h3>
                <p className={style.times}>{post.created} by: Omid </p>
                <a onClick={() => handleClick(post.id)} >Read more</a>
                <img src={post.image.url} alt="" />
            </article>
        ))}
        </div>
        <div className={style.forth}>
        {blogs.slice(5,6).map(post => (
            <article key={post.id}>       
                <div>
                    <img src={post.image.url} alt="" />
                </div>  
                <div>               
                    <h3>{post.title}</h3>
                    <p className={style.times}>{post.created} by: Omid </p>
                    <a onClick={() => handleClick(post.id)} >Read more</a>
                </div> 
            </article>
        ))}
        </div>
        <div className={style.fifth}>
        {blogs.slice(6,7).map(post => (
            <article key={post.id}>       
                <div>               
                    <h3>{post.title}</h3>
                    <p className={style.times}>{post.created} by: Omid </p>
                    <a onClick={() => handleClick(post.id)} >Read more</a>
                </div> 
                <div>
                    <img src={post.image.url} alt="" />
                </div>  
            </article>
        ))}
        </div>
        <div className={style.sixthR}>
        {blogs.slice(7,8).map(post => (
            <article key={post.id}>                        
                <h3>{post.title}</h3>
                <p className={style.times}>{post.created} by: Omid </p>
                <a onClick={() => handleClick(post.id)} >Read more</a>
                <img src={post.image.url} alt="" />
            </article>
        ))}
        </div>
        <div className={style.SexthL}>
        {blogs.slice(8,9).map(post => (
            <article key={post.id}>                        
                <h3>{post.title}</h3>
                <p className={style.times}>{post.created} by: Omid </p>
                <a onClick={() => handleClick(post.id)} >Read more</a>
                <img src={post.image.url} alt="" />
            </article>
        ))}
        </div>
    </div>
        )}
        {!isListVisible && selectedPost && (
            <main>
                <SinglePage reciv={selectedPost} />
            </main>
        )}
     </>
  );
};

export default BlogList;
