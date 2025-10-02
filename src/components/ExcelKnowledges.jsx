import React from 'react'
import ExcelKnowledge from './ExcelKnowledge'
import { excelKnowledge } from '../data/data'


function ExcelKnowledges() {
  return (

    
    <div>
      {excelKnowledge.map((item) => (
        <ExcelKnowledge key={item.id} {...item} />
      ))}
    </div>

  )
}

export default ExcelKnowledges