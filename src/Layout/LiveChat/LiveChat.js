import React, { useState } from 'react'
import style from './LiveChat.module.css'
import IconAdmin from '../../Resource/admin.jpg'
import { ImLink } from 'react-icons/im'
import { BsFillEmojiSmileFill } from 'react-icons/bs'
import { BsFillCursorFill } from 'react-icons/bs'
function LiveChat() {
  return (
    <div className={style.liveChat}>
      <div className="d-flex justify-content-between border-bottom p-2 align-items-center">
        <span>
          <strong>Customer Support</strong>
        </span>
        <span className="p-1 border bg-secondary bg-gradient text-black-50  bg-opacity-10">
          Let's Chat App
        </span>
      </div>

      <div className={style.box_chat}>
        <div className="text-end  p-1">
          <span className=" bg-primary bg-gradient text-light p-2  rounded">
            xin chào
          </span>
        </div>
        <div className="text-end p-1">
          <span className=" bg-primary bg-gradient text-light p-2 rounded ">
            làm thế nào để xem được sản phẩm
          </span>
        </div>
        <div className="d-flex align-items-center">
          <div>
            <img src={IconAdmin} alt="admin" width="30px" />
          </div>

          <span className="bg-dark p-2 text-dark bg-opacity-10">
            ADMIN: chào bạn !
          </span>
        </div>
        <div className="d-flex align-items-center">
          <div>
            <img src={IconAdmin} alt="admin" width="30px" />
          </div>

          <span className="bg-dark p-2 text-dark bg-opacity-10">
            ADMIN: bạn có thể vào mục shop để xem sản phẩm !
          </span>
        </div>
      </div>

      <div className={style.box_chat_input}>
        <img src={IconAdmin} alt="admin" width="30px" />
        <input placeholder="Enter Message!" />
        <div className="d-flex gap-2 align-items-center text-black-50 ">
          <button>
            <ImLink />
          </button>
          <button>
            <BsFillEmojiSmileFill />
          </button>
          <button>
            <BsFillCursorFill />
          </button>
        </div>
      </div>
    </div>
  )
}

export default LiveChat
