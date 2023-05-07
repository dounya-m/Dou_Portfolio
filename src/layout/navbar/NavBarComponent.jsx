import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {RxPerson} from 'react-icons/rx'
import {MdDesignServices} from 'react-icons/md'
import {GrServices} from 'react-icons/gr'
import {TbAlignBoxLeftTop} from 'react-icons/tb'
import {BsMailbox2} from 'react-icons/bs'


function NavBarComponent() {
  return (
    <div>
        <AiOutlineHome />
        <RxPerson />
        <MdDesignServices />
        <GrServices />
        <TbAlignBoxLeftTop />
        <BsMailbox2 />
    </div>
  )
}

export default NavBarComponent
