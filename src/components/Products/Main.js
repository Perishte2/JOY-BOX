import React, {useState, useEffect} from 'react';
import Product from './Product';
import Pagination from '../Pagination';
import Posts from '../../Posts';
import axios from 'axios';






export default function Main(props) {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [favorite, setFavorite] = useState([]); 
 


  

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);



  
  

  const { products, onAdd } = props;
  return (
    
      
       

    <main className="block col-2">
      <h2>Products</h2>
      <div className="row">
      
        <div className="items">
          <div className="nav">
            <h1>Сортировка товара</h1>
        <br/>
      
      <button id="sort-asc">Ascending price</button>
      <button id="sort-desc">Descending price</button>
      <button id="sort-rating">Sort Rating</button>
      </div>
        
        {products.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}
         
        </div>
        <br /><br/>
        <Pagination className="pagination"
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
      </div>
    </main>
  );
}