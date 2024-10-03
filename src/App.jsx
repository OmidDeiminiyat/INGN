import React, { useState, useEffect } from 'react';
import { ApolloProvider, useQuery } from '@apollo/client';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import BlogList from './pages/BlogList';
import CategoryNav from './components/Navigation/CategoryNav';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layouts } from "./layouts/MainLayouts";
import { Login } from './pages/Login';
import { NotFound } from './pages/NoPage';
import { Footer } from './components/Navigation/footer/Footer';



// Apollo Client Setup
const client = new ApolloClient({
  uri: 'https://eu-west-2.cdn.hygraph.com/content/cm1kc5um9021e07w68dz5uhr0/master',
  cache: new InMemoryCache(),
});

const BLOG_QUERY = gql`
  query MyQuery {
    newBlogs {
      category
      created
      description
      id
      image {
        url
      }
      title
      mainBlog
    }
  }
`;

const App = () => {
  const queryClient = new QueryClient();
  const { loading, error, data } = useQuery(BLOG_QUERY);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [categories, setCategories] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  // Process data and set categories
  useEffect(() => {
    if (data) {
      const uniqueCategories = ['All', ...new Set(data.newBlogs.map(blog => blog.category))];
      setCategories(uniqueCategories);
      setFilteredBlogs(data.newBlogs);
    }
  }, [data]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredBlogs(data.newBlogs);
    } else {
      const filtered = data.newBlogs.filter(blog => blog.category === category);
      setFilteredBlogs(filtered);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading blogs</p>;

  return (
    <>
    <QueryClientProvider client={queryClient}>
    <div>
      
      <CategoryNav
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryClick={handleCategoryClick}
      />
      <BlogList blogs={filteredBlogs} />
      <Footer />
    </div>
    </QueryClientProvider>
    </>
  );
};

const RootApp = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

export default RootApp;
