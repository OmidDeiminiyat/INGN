
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
    <main className="div1">
        <section className={style.mainBody} >
                <div>
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
     </section>

     <section className={style.secondMain} >
            <div className={style.secondSection}>
                {blogs.slice(1,5).map(post => (
                    <article key={post.id}>                        
                        <h3>{post.title}</h3>
                        <p className={style.times}>{post.created} by: Omid </p>
                        <a onClick={() => handleClick(post.id)} >Read more</a>
                        <img src={post.image.url} alt="" />
                    </article>
                ))}
            </div>
        </section>

        <section className={style.thirdMain} >
            <div className={style.secondSection}>
                {blogs.slice(5,6).map(post => (
                    <article key={post.id}>  
                        <img src={post.image.url} alt="" />
                        <header>        
                            <h3>{post.title}</h3>
                            <p className={style.times}>{post.created} By: Omid</p>
                            <p>{post.description}</p>
                            <a onClick={() => handleClick(post.id)} >Read more</a>
                        </header>  
                    </article>
                ))}
            </div>
        </section>
        <section className={style.thirdMain} >
                <div className={style.secondSection}>
                {blogs.slice(6,7).map(post => (
                    <article key={post.id}>  
                        <header>        
                            <h3>{post.title}</h3>
                            <p className={style.times}>{post.created} By: Omid</p>
                            <p>{post.description}</p>
                            <a onClick={() => handleClick(post.id)} >Read more</a>
                        </header> 
                        <img src={post.image.url} alt="" /> 
                    </article>
                ))}
                </div>
        </section>
        <section className={style.forthMain} >
                <div className={style.secondSection}>
                {blogs.slice(7,9).map(post => (
                    <article key={post.id}>  
                        <header>        
                            <h3>{post.title}</h3>
                            <p className={style.times}>{post.created} By: Omid</p>
                            <a onClick={() => handleClick(post.id)} >Read more</a>
                        </header> 
                        <img src={post.image.url} alt="" /> 
                    </article>
                ))}
                </div>
            </section>
        </main>
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
