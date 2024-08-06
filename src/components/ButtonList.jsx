import React from 'react';
import Button from './Button';

const list = [
  'All', 'Live', 'Gaming', 'Music', 'Movies', 'Dance', 'Cartoon', 
  'Comedy', 'Horror', 'Reactions video', 'Ghosts', 'Recently uploaded', 
  'Watched', 'New to you'
];

function ButtonList() {
  return (
    <div className='  flex  text-sm space-x-4 p-2 w-full overflow-x-scroll'>
      {list.map((bt) => (
        <Button key={bt} text={bt} />
      ))}
    </div>
  );
}

export default ButtonList;
