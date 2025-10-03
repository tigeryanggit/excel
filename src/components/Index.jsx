import excelSample from '../assets/excel_index.png'

function Index() {
  return (
    
    <div className='container-index'>

          <div className="index-title">
            <h1><span className='index-title-text'>Tiger</span> Excel 必殺技教學!!!</h1>
          </div>

          <div className="container-index-body">

            <p>在現今的辦公室,差不多所有人都會利用到Excel來製作報表，報告，用作計算，資料輸入等等，應用範圍可以話層出不窮!</p>
            <p>無論你係文員,會計人員,還是項目管理的人員,你都必定有機會接觸到Excel。Excel已經成為必要技能,但你又對Excel了解幾多呢?</p>
            <p>其實Excel除了一般的報表資料輸入功能,計算加減乘除外,還有很多不為人知的功能,當你學識呢d功能後,你就可以將佢發陽光大,將你既資料表變得更人性化及自動化,大大提升你的工作効率!</p>
            <p>Excel其實內置了很多很好用的公式(formula),大家只要識當地運用,便能得心應手做出你想要的資料表及結果!</p>
            <p>由於Excel提供的formula實在太多,所以在此網站絕對無可能一一作出試範及解釋,但我會精心挑選一些大家日常會用到的formual及功能,為大家一一介紹,希望能給予大家多一點的認識!</p>
            
            <div className="container-index-img">

              <img src={excelSample} alt="excel sample" />
            </div>

          </div>

    </div>
  )
}

export default Index