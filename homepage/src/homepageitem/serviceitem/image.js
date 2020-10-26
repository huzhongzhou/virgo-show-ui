import React,{Component} from 'react'

class Image extends Component{
    render(){
        return(
            <div>
                <img src={this.props.value} className='img1' alt=''></img>
            </div>
        )
    }
}
export default Image
