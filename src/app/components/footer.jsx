import Link from "next/link"

const Footer = ({
    footerInformation,
    footerInformationOptional = 'Studying in Europe is always a good idea! But you have to know if you are able to do it',
    returnPage = '/',
    returnText = <>Go Back</>,
    optionalCredit = 'Developed by Faisal Abusharar',
    returnButton = true,

}) => {
return(
    <div className="footerContainer">
        <p id="footer">{footerInformation}
          <br />{footerInformationOptional}</p>
        <div className="credit-container">
          <p id="leftCredit">{optionalCredit}</p>
          {returnButton ? <Link href={`/${returnPage}`}><button id="footerReturnButton" className="bg-custom-gradient text-white font-bold py-2 px-4 rounded">{returnText}</button></Link> : <p id="rightCredit">{returnText}</p>} 
        </div>
      </div>
)
}


export default Footer