import Image from "next/image";
import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { IoShareSocialOutline } from "react-icons/io5";
import { LiaCommentDotsSolid } from "react-icons/lia";

// data for blog posts
const blogPosts = [
  {
    id: 1,
    date: "10 February 2022",
    title: "Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis",
    imageSrc: "/assets/blogpost/blog-post1.png",
    imageAlt: "Blog Post 1",
  },
  {
    id: 2,
    date: "12 February 2022",
    title: "Aliquam Convallis Mi Quis Pellentesque Non Efficitur",
    imageSrc: "/assets/blogpost/blog-post2.png",
    imageAlt: "Blog Post 2",
  },
  {
    id: 3,
    date: "15 February 2022",
    title: "Quis Aliquam Convallis Mi Pellentesque Non Efficitur",
    imageSrc: "/assets/blogpost/blog-post3.png",
    imageAlt: "Blog Post 3",
  },
];

const BlogPost = () => {
  return (
    <div>
      <div className="mx-auto w-full max-w-[1560px] body-font ">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-primaryYellow font-greatVibes">
              Blog Post
            </h1>
            <p className="text-[32px] sm:text-[48px] lg:text-[60px] text-primaryYellow font-bold mt-4 leading-tight">
              La
              <span className="text-myWhite">test News & Blog</span>
            </p>
          </div>

          {/* Image Grid Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="relative group w-full h-auto bg-black border-[1px] border-myWhite"
              >
                <Image
                  alt={post.imageAlt}
                  className="w-full h-[349px] object-cover"
                  src={post.imageSrc}
                  width={423}
                  height={349}
                />
                <div className="px-8">
                  <p className="text-primaryYellow text-[16px] mt-5">
                    {post.date}
                  </p>
                  <p className="text-myWhite text-[24px] font-bold mt-3">
                    {post.title}
                  </p>
                  <p className="text-myWhite text-[16px] mb-5 mt-10">Learn More</p>
                </div>

                {/* Icons container */}
                <div className="absolute bottom-4 right-8 flex space-x-4">
                  <AiOutlineLike className="text-myWhite text-[20px]" />
                  <LiaCommentDotsSolid className="text-primaryYellow text-[20px]" />
                  <IoShareSocialOutline className="text-myWhite text-[20px]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
