import React from 'react'
import { formatDate } from '@/lib/utils';  
const StartupCard = ({post}: {post: StartupCardType}) => {
  return (
    <li className='startup-card group'>
        <div className='felx-between'>
            <p className='startup_card_date'>
                {formatDate(post?._createdAt)}
            </p>
            <p className='startup_card_views'>
                {post?.views}
            </p>
        </div>
        <div className='flex-between'>
            <p className='startup_card_author'>
                {post?.author?._id}
            </p>
            <p className='startup_card_title'>
                {post?.title}
            </p>
            
        </div>
   </li>
  )
}

export default StartupCard