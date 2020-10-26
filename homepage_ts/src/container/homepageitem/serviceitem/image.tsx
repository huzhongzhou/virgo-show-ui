import React,{Component} from 'react'

interface Iprops{
    value:string
}
class Image extends Component<Iprops>{
    render(){
        return(
            <div>
                <img src={this.props.value} className='img1' alt=''></img>
            </div>
        )
    }
}
export default Image
