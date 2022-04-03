import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './tutorsFilter.css';
import Select from 'react-select';
import Search from './Search';
const options1 = [
  { value: 'beginner', label: 'Beginner' },
  { value: 'intermediate', label: 'Intermediate' },
  { value: 'advanced', label: 'Advanced' }
]
const options2 = [
    { value: 'North American Accent', label: 'North American Accent' },
    { value: 'British Accent', label: 'British Accent' },
    { value: 'Australian Accent', label: 'Australian Accent' },
    { value: 'Other Accent', label: 'Other Accent' }
  ]

const options3 = [
    { value: 'Kind and Patient', label: 'Kind and Patient' },
    { value: 'Fun and Gregarious', label: 'Fun and Gregarious' },
    { value: 'Scholarly and Knowledgeable', label: 'Scholarly and Knowledgeable' }
  ]


  class TutorsFilter extends Component {
    state = {
      selectedOption: null,
      selectedOption2: null,
      selectedOption3: null
    };
    handleChange = selectedOption => {
      this.setState({ selectedOption });
      console.log(`Option selected:`, selectedOption);
    };
    handleChange2 = selectedOption2 => {
      this.setState({ selectedOption2 });
      console.log(`Option selected:`, selectedOption2);
    };
    handleChange3 = selectedOption3 => {
      this.setState({ selectedOption3 });
      console.log(`Option selected:`, selectedOption3);
    };

    render() {
      const { selectedOption } = this.state;
      const { selectedOption2 } = this.state;
      const { selectedOption3 } = this.state;
      return (
        <div className="button-container" >
          <Select
            isMulti={true}
            value={selectedOption}
            onChange={this.handleChange}
            options={options1}
            placeholder="Select Course level"
          />
          <Select
            isMulti={true}
            value={selectedOption2}
            onChange={this.handleChange2}
            options={options2}
            placeholder="Select Accent"
          />
          <Select
            isMulti={true}
            value={selectedOption3}
            onChange={this.handleChange3}
            options={options3}
            placeholder="Select tutor Quality"
          />
          <Search className="searchClass"/>
        </div>
      );
    }

  }

  export default TutorsFilter;
