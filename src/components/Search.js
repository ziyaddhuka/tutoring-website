import React, { Component } from 'react';
import './search.css';

class Search extends Component {

    render() {
        return (
            <div>
            <div class="container-search">
              <div class="input-group mb-3">
                <input type="text" class="form-control border-end-0 border rounded-pill" placeholder="Search..."
                    onChange= {(event)=>{
                        this.props.parentCallback(event.target.value);
                        }
                    }
                />
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary bg-white border-start-0 border rounded-pill ms-n3" type="button">
                        <i class="fa fa-search"></i>
                    </button>
                </div>
              </div>
            </div>
            </div>
        );
    }
}

export default Search;
