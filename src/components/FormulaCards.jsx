import React from 'react'
import { excelFormula } from '../data/data'
import Card from './Card'
import { getImageURL } from '../data/image-util'



function FormulaCards() {
  return (
    
    <>

        
        {

          excelFormula.map((y)=> (

            <Card 
              key={y.id}
              image={getImageURL(y.image,'../assets/formula/')}
              name={y.name} 
              link={y.name}
              para={y.para}
              content={y.content}
              sample={y.sample}
              application={y.application}
            />


          )

          )

        }

    </>

  )
}

export default FormulaCards


