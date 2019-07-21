import React from "react";
import "./Posts.css";
// import { Navlink } from "react-router-dom";

const Posts = ({ posts, loading }) => {
  if (loading) {
    // return <h2 className="center">Loading...</h2>;
  }

  return (
    <React.Fragment>
      {posts.map(post => (
        <section className="section-teachings" key={post._id}>
          <h1 className="red center size-title">Teachings Adults</h1>
          <div className="bloc-slide-quotation center">
            <q>Je suis le chemin la vérité et la vie.</q>
            <span className="bold red"> Jean 6: 35</span>
          </div>
          <div className="container-posts">
            <div className="bloc-info-theme">
              <div>
                <div className="bloc-title-theme-and-img">
                  <h1 className="red bold">{post.title}</h1>
                  <div className="bloc-img-theme">
                    <img src={post.image} alt="" />
                  </div>
                </div>
                <div className="bloc-msg-theme mtop">
                  <h2>Title Part I</h2>
                  <br />
                  <h3>Title sub title</h3>
                  <br />
                  <p>
                    {post.text}
                    <br />
                    {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Asperiores tempore consequatur explicabo dolore excepturi
                    accusamus cumque molestias porro eum in. Optio ea cumque
                    inventore impedit quae doloribus hic, possimus ipsa. */}
                    <br />
                  </p>
                  <br />

                  <h2>Title Part II</h2>
                  <br />
                  <h3>Title sub title</h3>
                  <br />
                  <p>
                    {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Asperiores tempore consequatur explicabo dolore excepturi
                    accusamus cumque molestias porro eum in. Optio ea cumque
                    inventore impedit quae doloribus hic, possimus ipsa.
                    <br />
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Asperiores tempore consequatur explicabo dolore excepturi
                    accusamus cumque molestias porro eum in. Optio ea cumque
                    inventore impedit quae doloribus hic, possimus ipsa. */}
                    <br />
                  </p>
                  <br />
                  <h2>Conclusion</h2>
                  <br />
                  <p>
                    {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Asperiores tempore consequatur explicabo dolore excepturi
                    accusamus cumque molestias porro eum in. Optio ea cumque
                    inventore impedit quae doloribus hic, possimus ipsa.
                    <br />
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Asperiores tempore consequatur explicabo dolore excepturi
                    accusamus cumque molestias porro eum in. Optio ea cumque
                    inventore impedit quae doloribus hic, possimus ipsa.
                    <br /> */}
                  </p>
                </div>
              </div>
            </div>
            <div className="bloc-video-edification">
              <h2 className="red">
                Vidéos édifiantes sur la connaissance de Jésus
              </h2>
            </div>
          </div>
        </section>
      ))}
    </React.Fragment>
  );
};

export default Posts;
