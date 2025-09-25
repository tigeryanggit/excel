import Formula from './Formula';
import { excelFormula } from '../data/data';
import Card from './Card';
import FormulaCards from './FormulaCards';
import { getImageURL } from '../data/image-util';

function Formulas() {
  return (
    
    <div className="container-formula">
      <div className="container-formula-menu">
        <ul>
            {/* <li>1111</li> */}
            {/* <Formula /> */}

            {
                excelFormula.map((x)=>(

                    <Formula 
                      key={x.id} 
                      name={x.name} 
                      // id={x.name}
                      link={x.link}
                      
                    />
                )

                )

            }
            {/* {
              formula.map((f)=>(
                <Formula 
                  key={f.id}  
                  name={f.name}  
                />

              )
              )
            } */}
        </ul>
      </div>

      {/* <FormulaCards /> */}
      <div className="container-formula-detail">
        <FormulaCards />
        {/* {

          excelFormula.map((y)=> (

            <Card 
              key={y.id}
              image={getImageURL(y.image,'../assets/formula/')}
              name={y.name} 
              id={y.name}
              link={y.link}
              para={y.para}
              content={y.content}
              sample={y.sample}
              application={y.application}
            />


          )

          )

        } */}
      </div>
    </div>



  )
}

export default Formulas