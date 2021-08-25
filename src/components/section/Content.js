import React from 'react';

const Content = () => {
    return (
        <>
           <div className="content">
               <div className="description">
               <h1 className="title">Look at shoes </h1>
                <p className="descr">For a stand out look that transitions 
                from work to the dance floor, go with the Joy Box .
                 These cool shoes and snickers 
                are the perfect addition to any  shoe collection and appearance.</p>
                <button className="btn1"><a className="link" href="/goods">Show cataloque</a></button>
               {/* </div> */}
               <div className="imgShoes">
                   <img src="/img/snicers.png" alt="shoes"/>
               </div>
               </div>
            
            </div> 
        </>
    );
};

export default Content;