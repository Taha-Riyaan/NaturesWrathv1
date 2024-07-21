import "../Styles/InfoDisc.css"

const InfoDisc = () => {
    return ( 
        <div>
            <center className='MajorTitle'>
                <h1>Information Disclaimer</h1>
            

                <div className="infodisc">
                    <p>
                        The information on this website consists mainly of <strong>direct quotes</strong> and summaries from 
                        <br />
                        <br />
                        <ul>
                            <li>
                            <strong>Public Safety Canada</strong> <br />[1] “Natural Hazards,” Public Safety Canada, [Online].<br />     Available: https://www.publicsafety.gc.ca/cnt/mrgnc-mngmnt/ntrl-hzrds/index-en.aspx. 
                            </li>
                            <li>
                            <strong>Esri Story Maps</strong> <br />[2] “Timeline of Major Natural Disasters in Canada,” Esri Story Maps, [Online]<br />     Available: https://storymaps.arcgis.com/stories/29825a590ed24f1581e1b25395ffe53c. 
                            </li>
                            <li>
                            <strong>Wikipedia - 2016 Fort McMurray Wildfire</strong> <br />[3] “2016 Fort McMurray wildfire,” Wikipedia, The Free Encyclopedia, [Online]. <br />     Available: https://en.wikipedia.org/wiki/2016_Fort_McMurray_wildfire. 
                            </li>
                            <li>
                            <strong>Wikipedia - 2013 Alberta Floods</strong><br /> [4] “2013 Alberta floods,” Wikipedia, The Free Encyclopedia, [Online].<br />     Available: https://en.wikipedia.org/wiki/2013_Alberta_floods. 
                            </li>
                            <li>
                            <strong>Wikipedia - Regina Cyclone</strong> <br />[5] “Regina Cyclone,” Wikipedia, The Free Encyclopedia, [Online]. <br />     Available: https://en.wikipedia.org/wiki/Regina_Cyclone.
                            </li>
                        </ul>
                        
                        <br />
                        Additionally, not all information has been fact checked and should be verified before being followed.
                        
                    </p>
                    
                </div>
            </center>

        </div>

     );
}
 
export default InfoDisc;