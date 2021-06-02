import { Component } from 'react';
import { Dropdown } from 'semantic-ui-react'
import './CategorySelect.css';

  const options = [
    { key: 1, text: 'One', value: 1 },
    { key: 2, text: 'Two', value: 2 },
    { key: 3, text: 'Three', value: 3 },
  ]

class CategorySelect extends Component {    
    render(){
        return(
            <div className="Select">
                <div>
                    <Dropdown placeholder='1차 카테고리 선택' scrolling options={options}></Dropdown>
                </div>
                <div>
                    <Dropdown placeholder='2차 카테고리 선택' scrolling options={options}></Dropdown>
                </div>
                <div>
                    <Dropdown placeholder='3차 카테고리 선택' scrolling options={options}></Dropdown>
                </div>
            </div>
        );
    }
}

export default CategorySelect;