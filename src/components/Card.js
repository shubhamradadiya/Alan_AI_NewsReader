import React from 'react'
import './Card.css'

const Card = ({article}) => {

 

  return (
    <div className=" max-w-md  w-full lg:flex bg-white shadow-lg rounded-lg overflow-hidden m-4 ">
      <div
        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover bg-center rounded-lg overflow-hidden"
        style={{ backgroundImage: `url(${article.urlToImage})` }}
      ></div>
      <div className="p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-gray-900 font-bold text-xl mb-2">
            {article.title}
          </div>
          <p className="text-gray-700 text-base">{article.description}</p>
        </div>
        <div className="flex items-center">
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-800 text-sm"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card