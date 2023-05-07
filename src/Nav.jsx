import React from 'react'

function Nav() {
    const links=[
        {
            id:1,
            title:"YouTube",
            svg:<svg className='h-[18px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="youtube"><g fill-rule="evenodd" clip-rule="evenodd"><path fill="#F44336" d="M15.32 4.06c-.434-.772-.905-.914-1.864-.968C12.498 3.027 10.089 3 8.002 3c-2.091 0-4.501.027-5.458.091-.957.055-1.429.196-1.867.969C.23 4.831 0 6.159 0 8.497v.008c0 2.328.23 3.666.677 4.429.438.772.909.912 1.866.977.958.056 3.368.089 5.459.089 2.087 0 4.496-.033 5.455-.088.959-.065 1.43-.205 1.864-.977.451-.763.679-2.101.679-4.429v-.008c0-2.339-.228-3.667-.68-4.438z"></path><path fill="#FAFAFA" d="M6 11.5v-6l5 3z"></path></g></svg>

        },
        {
            id:2,
            title :"Netflix",
            svg:<svg className='h-[18px]'  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="netflix"><path fill="#AD080F" d="m10.17 13.46-.01 5.06c0 4.81-.01 5.08-.06 5.08-.18 0-1.7.1-2.21.15-.33.03-1 .1-1.48.16-.49.06-.89.1-.9.09 0-.01-.01-5.41-.01-12.01V0l4.67 13.46zM18.49.01h-4.63l-.01 5.31v5.329l4.63 13.341c.02-.01.02-5.42.02-12.01L18.49.01z"></path><path fill="#DF0D12" d="M18.48 23.99h-.04c-.08 0-.24-.01-.43-.03-1.07-.13-2.48-.26-3.62-.31-.37-.02-.68-.04-.69-.04 0 0-.29-.84-.84-2.41-.53-1.53-1.31-3.77-2.32-6.68l-.37-1.06L5.5 0h4.65l.2.57.88 2.53 7.25 20.89z"></path></svg>
        }

    ];
  return (
    <div className="bg-black h-[10px] flex flex-row gap-6 items-center p-4">
        {links.map(links=>(
            <div className='flex flex-row gap-1.5 justify-center rounded-lg hover:bg-[#B8C1C950]'>
                <div className='h-[10px]'>{links.svg}</div>
                <div className="text-white font-roboto text-sm">{links.title}</div>

            </div>
            
        ))
            
        }
    
    </div>
  )
}

export default Nav