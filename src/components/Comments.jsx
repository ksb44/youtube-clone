import React from 'react';

const comments=[
    {
        name:"jagdish",
        text:"this is a good one",
        replies:[
            {
                name:"jagdish",
                text:"this is a good one",
                replies:[ {
                    name:"jagdish",
                    text:"this is a good one",
                    replies:[ {
                        name:"jagdish",
                        text:"this is a good one",
                        replies:[ {
                            name:"jagdish",
                            text:"this is a good one",
                            replies:[]
                        }, {
                            name:"jagdish",
                            text:"this is a good one",
                            replies:[ {
                                name:"jagdish",
                                text:"this is a good one",
                                replies:[]
                            }, {
                                name:"jagdish",
                                text:"this is a good one",
                                replies:[]
                            },]
                        }, {
                            name:"jagdish",
                            text:"this is a good one",
                            replies:[]
                        },]
                    },]
                },]
            },
            {
                name:"jagdish",
                text:"this is a good one",
                replies:[]
            },
            {
                name:"jagdish",
                text:"this is a good one",
                replies:[]
            },
        ]
    },
    {
        name:"jagdish",
        text:"this is a good one",
        replies:[]
    },
    {
        name:"jagdish",
        text:"this is a good one",
        replies:[]
    },
    {
        name:"jagdish",
        text:"this is a good one",
        replies:[]
    },
    {
        name:"jagdish",
        text:"this is a good one",
        replies:[]
    },
]

const CommentList=({comments})=>{

    return (

        comments.map((comment,index)=>(
            <>
        <Comment key={index} data={comment} />
        <div className='ml-5 pl-5 border-l-black  border'>
      <CommentList key={index} comments={comment.replies} />
        </div>
    
        </>
    ))
    )

}
const Comment=({data})=>{

    const {name,text,replies}=data
    return (
    <div className='flex '>
        
        <img className='w-12 h-12' src="https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg" alt="user" />
        <div className='px-3'>
        <p className='font-bold'>{name}</p>
        <p className=''>{text}</p>
        </div>
    </div>)
}

function Comments() {
    return (
        <div>
            <h3 className='font-bold'>Comments</h3>
            
        <CommentList comments={comments}/>
        </div>
    )
}
export default Comments;