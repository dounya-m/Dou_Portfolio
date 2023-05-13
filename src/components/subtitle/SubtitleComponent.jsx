import React from 'react'

function SubtitleComponent({text, icon: Icon}) {
return (
    <div className='flex items-center gap-2 text-xs uppercase border-[1px] py-1 px-2 rounded-full text-gray-200 border-gray-400'>
        <Icon />
        {text}
    </div>
)
}

export default SubtitleComponent
