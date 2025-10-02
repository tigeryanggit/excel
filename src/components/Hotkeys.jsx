import React from 'react'
import { hotKey } from '../data/data'
import hotkeyvideo from '../assets/videos/excel_hotkey.mp4'

function Hotkeys() {
  return (
    <div className="container-knowledge-detail" id="#knowledge_hotkey">
        <h3>常用快捷鍵(Hotkey)</h3>
        
        <ul>在Excel中, 為了提高效率, 我們經常都會用到一些快速鍵, 以散卻一些用以切換鍵盤與滑鼠的時間, 以下是一些常用的快捷鍵：
        <br />
        <br />
          {
            hotKey.map((item) => (
              <li key={item.id}>
                {item.name}:   {item.content}
              </li>
            ))
          }

        </ul>

        <div className="iframe">
          <iframe src={hotkeyvideo} title="hotkey video" frameborder="0" allowfullscreen ></iframe>
        </div>

    </div>
  )
}

export default Hotkeys