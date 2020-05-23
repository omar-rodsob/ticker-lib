import React, {Component} from "react";
import PropTypes from 'prop-types';
import styles from './ticker.scss';



let googleNewsAPI = require('google-news-json');
export class GetTicker extends Component {
    constructor(props) {
      super(props);
      this.state={
        tickerObj:props.tickerObj
      }
    }
    render() {
        let {tickerObj}=this.state;
        let time = tickerObj.length*10;
        const styleParam={
        	"--size":time+'s'
        }
       const htmlTicker = tickerObj.map((item,index) => (
         <div key={index} className={styles.ticker__item}>{item.title}</div>
        ));
        return (
            <div className="App">
                     <div className={styles.tickerWrap} >
                       <div className={styles.ticker} style={styleParam}>
                         {htmlTicker}
                       </div>
                     </div>

                    
            </div>
        );
    }
}
 GetTicker.propTypes = {
  tickerObj: PropTypes.array.isRequired
};
