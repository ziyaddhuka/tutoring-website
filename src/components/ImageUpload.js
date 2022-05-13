import React, { Component } from 'react';
import axios from 'axios';

const BASE_URL = 'http://localhost:3000/';

class ImageUploader extends Component {
    constructor(props) {
        super(props);
        this.state = {
        	images: [],
        	imageUrls: [],
        	message: ''
        }
    }

    selectFiles = (event) => {
    	let images = [];
    	for (var i = 0; i < event.target.files.length; i++) {
            images[i] = event.target.files.item(i);
        }
        images = images.filter(image => image.name.match(/\.(jpg|jpeg|png|JPG|JPEG|PNG)$/))
        let message = `${images.length} valid image(s) selected`
        this.setState({ images, message })
    }

    uploadImages = () => {
    
    	const uploaders = this.state.images.map(image => {
		    const data = new FormData();
		    data.append("image", image, image.name);
            console.log(data)
	    	// Make an AJAX upload request using Axios
	    	return axios.post(BASE_URL + 'upload', data)
	    	.then(response => {
				this.setState({imageUrl: [response.data.imageUrls, ...this.state.imageUrls]});
			})
		});

	 	// Once all the files are uploaded 
		axios.all(uploaders).then(() => {
			console.log('done');
		}).catch(err => alert(err.message));

    }

    render() {
        return (
        	<div class="text-center">
	        	<div class="row d-flex justify-content-center my-4">
        			<h6>Upload Image</h6>
	        		<div class="row d-flex justify-content-center my-4">
		        		<input className="form-control " type="file" onChange={this.selectFiles} multiple/>
		        	</div>
		        	{ this.state.message? <p className="text-info">{this.state.message}</p>: ''}
		        	<br/><br/><br/>
		        	<div className="col-sm-4">
		            	<button className="btn btn-primary" value="Submit" onClick={this.uploadImages}>Submit</button>
		        	</div>
	            </div>
	            <br/><br/>
	            <div className="row d-flex justify-content-center my-4">
		        	{ 
			          	this.state.imageUrls.map((url, i) => (
				          		<div key={i}>
				          			<img src={BASE_URL + url} className="img-rounded img-responsive" alt="not available"/><br/>
				          		</div>
				          	))
			        }
		        </div>
		    </div>
        );
    }
}

export default ImageUploader; 			