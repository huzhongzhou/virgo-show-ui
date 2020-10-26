import React,{Component} from 'react';
import Serviceitem from './serviceitem/serviceitem'


interface IItem{
    cate:string;
    imgsrc:Array<string>;
    text:string;
}
interface Istate{
    first:IItem;
    second:IItem;
    third:IItem;
    fourth:IItem;
    fifth:IItem;
}
interface Iprops{
    toggleHoverclose:()=>void
}
class Service extends Component<Iprops,Istate>{
    state :Istate={
        first:{cate:'SHOES',imgsrc:['/images/circle.png','/images/circle.png','/images/circle.png','/images/circle.png','/images/circle.png','/images/circle.png'],text:'内外全部清洗护理、磨损修护、翻新、整体改色、商标抛光翻新补色、五金抛光翻新补色'},
        second:{cate:'BAGS',imgsrc:['/images/circle.png','/images/circle.png','/images/circle.png','/images/circle.png','/images/circle.png','/images/circle.png'],text:'内外全部清洗护理、磨损修护、翻新、整体改色、商标抛光翻新补色、鞋底贴新膜'},
        third:{cate:'CLOTHES',imgsrc:['/images/circle.png','/images/circle.png','/images/circle.png','/images/circle.png','/images/circle.png','/images/circle.png'],text:'内外全部清洗护理、去污、裂面修护、翻新、划口补伤、整体改色、商标抛光翻新补色、局部换皮、貂毛护理、稀有皮种'},
        fourth:{cate:'OTHERS',imgsrc:['/images/circle.png','/images/circle.png','/images/circle.png','/images/circle.png','/images/circle.png','/images/circle.png'],text:''},
        fifth:{cate:'座椅',imgsrc:['/images/circle.png','/images/circle.png','/images/circle.png','/images/circle.png','/images/circle.png','/images/circle.png'],text:''},
    }
    render(){
        return(
        <div onMouseLeave={this.props.toggleHoverclose} className ='hidepicture1 jc--center1'>
            { Object.keys(this.state).map((data,index)=>{
                return(<Serviceitem key={index} value={this.state[data]}></Serviceitem>)
            })}   
        <div className='flexserviceblank'></div>
        </div>
        )
        
    }
}
export default Service