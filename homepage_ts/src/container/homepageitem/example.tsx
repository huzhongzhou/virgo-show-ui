import React,{Component} from 'react';


interface IItem{
    itemname:string;
    style:string
}
interface Istate{
    item:{
        first:Array<IItem>;
        second:Array<string>
    }
}
interface Iprops{
    toggleHoverclose:()=>void
}
class Example extends Component<Iprops,Istate>{
    state:Istate={
        item:{first:[{itemname:'SHOES',style:'efg1'},{itemname:'BAGS',style:'efg1'},
                     {itemname:'服饰',style:'efg4'},{itemname:'手套',style:'efg1'},
                     {itemname:'帽子',style:'efg1'},{itemname:'皮带',style:'efg1'},
                     {itemname:'手表',style:'efg1'}, {itemname:'饰品',style:'efg1'}],
               second:['座椅','...']}
    }
    render(){
        return(
        <div onMouseLeave={this.props.toggleHoverclose} className ='hidepictureex jc--center1  '>
            <div className='example1 '>
                {
                    Object.keys(this.state.item.first).map((data,index)=>{
                        return(
                        <div key={index} className={`${this.state.item.first[data].style} ai--center jc--center`}>{this.state.item.first[data].itemname}</div>
                        )
                    })
                }
            </div>
            <div className='example1'>
                {
                    this.state.item.second.map((data,index)=>{
                        return(
                            <div key={index} className='efg2 ai--center jc--center'>{data}</div>
                        )
                    })
                }
            </div>
        </div>
        )
    }
}
export default Example