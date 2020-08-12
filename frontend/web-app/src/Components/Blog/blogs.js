import React from "react";
import axios from "axios";
import ReactPaginate from 'react-paginate';
import '../../styles/blogs.css'
import moment from "moment";

class Blogs extends React.Component {
  state = {
      blogs: [], 
      total: null, 
      currentPage: 1
  };

  componentDidMount() {
    this.handlePageClick(1);
  }

  handlePageClick = page => {
    axios.get(`https://runaway-practicum.herokuapp.com/api/volunteer/blog/get/${page}`)
        .then((response) => {
            console.log(response.data);
            this.setState({
                blogs: response.data.blogs,
                total: response.data.totalBlogs,
                currentPage: response.data.page
            })
            console.log(this.state.total);
        }) 
    }

  render() {
    const pageCount = Math.ceil(this.state.total/20);

    return (
        <div>
              { this.state.blogs.map(blog => (
                  <div key={blog._id} style={{ textAlign: "left", margin: "10px", border: "2px solid black" }}> 
                    <div style={{marginLeft: "10px"}}> 
                        <h1>{blog.title}</h1>
                        <h4>{blog.author}</h4>
                        <h6>{moment(blog.date).format("MMM DD Y ")}</h6>
                        <img src={blog.imageURL} alt="img" style={{ height: "300px", width: "450px"}}/>
                        <p dangerouslySetInnerHTML={{ __html: blog.content }}/>
                    </div>
                </div>
              )) }
        
        <ReactPaginate
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={(e) => this.handlePageClick(e.selected)}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>

      </div>
    );
  }
}

export default Blogs;
