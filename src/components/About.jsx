import React from 'react'

function About() {
  return (

    <div className='container-about'>
      <h2>關於</h2>
      <div className="container-about-body">
        <p>Excel 世界博大精深, 當中還有很多很多有用的功能, 但在此很難以文字逐一教學或解釋。本人係香港從事IT行業10多年, 見過不少Excel的實用情景, 如data migration, data validation, sql data extraction等等。識用Excel你己經比一般人優勝。</p>

        <p>對於不懂寫程式的人來說, excel是一個很好的工具, 只要你設計好你想要既template, 必定受益不少, 大大提高你的効率。</p>

        <p>如你有什麽excel template想設計, 又或者想為團體/學校教授 Excel, 亦可電郵予本人查詢有關收費。</p>
        <div className="container-email">
          <a href="mailto: tiger_yanghk@yahoo.com.hk_"><i className="fa-solid fa-envelope fa-4x"></i></a>
        </div>
      </div>
    </div>

    
  )
}

export default About