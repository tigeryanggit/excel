import React from 'react'


function ExcelKnowledge({name, link, content, video}) {
  return (
    <div className="container-knowledge-detail" id={link}>

        <h3>{name}</h3>

        <p>{content}</p>

        <div className="iframe" >
           <iframe src={video} title={name} frameborder="0" allowfullscreen ></iframe>
        </div>

    </div>
  )
}

export default ExcelKnowledge


        // <h2>常用快捷鍵(Hotkey)</h2>
        
        // <ul>在Excel中, 為了提高效率, 我們經常都會用到一些快速鍵, 以散卻一些用以切換鍵盤與滑鼠的時間, 以下是一些常用的快捷鍵：
        // <br />
        // <br />
        //   {
        //     hotKey.map((item) => (
        //       <li key={item.id}>
        //         {item.name}:   {item.content}
        //       </li>
        //     ))
        //   }

        // </ul>

        // <div className="iframe">
        //   <iframe src={hotkeyvideo} title="hotkey video" frameborder="0" allowfullscreen ></iframe>
        // </div>