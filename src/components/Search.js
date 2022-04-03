import React, { Component } from 'react';
import './search.css';

// className Search extends Component {
//     state = {  }
//     render() {
//         return (
//             <div className="container-search">
//                 <div className="row">
//                     <div className="col-sm align-middle">
//                         Filter options 1
//                     </div>
//                     <div className="col-sm align-middle">
//                         Filter options 2
//                     </div>
//                     <div className="col-sm align-middle search">
//                         <div className="input-group mb-3">
//                             <input type="text" className="form-control border-end-0 border rounded-pill" placeholder="Search..."/>
//                             <div className="input-group-append">
//                                 <button className="btn btn-outline-secondary bg-white border-start-0 border rounded-pill ms-n3" type="button">
//                                     <i className="fa fa-search"></i>
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

class Search extends Component {
    state = {  }
    render() {
        return (
            <div className="container-search">
              <div className="input-group mb-3">
                <input type="text" className="form-control border-end-0 border rounded-pill" placeholder="Search..."/>
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary bg-white border-start-0 border rounded-pill ms-n3" type="button">
                        <i className="fa fa-search"></i>
                    </button>
                </div>
              </div>
            </div>
        );
    }
}

export default Search;
