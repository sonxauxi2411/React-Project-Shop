import React, { useState } from 'react'
import style from './LiveChat.module.css'
import IconAdmin from '../../Resource/admin.jpg'

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
        <span className="text-end">xin chào</span>
        <span className="text-end">làm thế nào để xem được sản phẩm</span>
        <span>
          <img src={IconAdmin} alt="admin" width="30px" /> ADMIN: chào bạn !
        </span>
        <span> ADMIN: bạn có thể vào mục shop để xem sản phẩm</span>
      </div>

      <div>
        <input />
      </div>
    </div>
  )
}

export default LiveChat
