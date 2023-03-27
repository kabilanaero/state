import React, { Component } from 'react'

export class One extends Component {
     constructor(){
        super()
        this.state ={
            mobiles : [{
                id:"001",
                name :"oneplus11",
                price : 56999,
                isPurchased: true
            },
                {
                id:"002",
                name : "Vivi Y100",
                price : 24999,
                isPurchased: false
            },
                {
                id:"003",
                name : "Redmi 10",
                price : 56999,
                isPurchased : true
            },
                {
                id:"004",
                name : "iphone 13",
                price : 62990,
                isPurchased : false
            },
                {
                id:"005",
                name : "Nokia",
                price : 12000,
                isPurchased : true
            },
                {
                id:"006",
                name : "Poco M4",
                price : 13999,
                isPurchased : true
            }
            ]
        }
     }
     ascending = () => {
        var names = this.state.mobiles.sort((a,b) => {
        let frstObj = a.name.toLowerCase();
        let secObj = b.name.toLowerCase();
        if(frstObj < secObj){
            return -1;
        }else if(frstObj > secObj){
            return 1;
        }    
      })
      this.setState({mobiles: names});
}


descending = () =>{
var names = this.state.mobiles.reverse()
this.setState({mobiles: names});
}

ascPrice = () => {
    var price =  this.state.mobiles.sort((a,b) => {
         return a.price - b.price;
     })
     this.setState({mobiles:price});
 }
 dscPrice = () => {
 var price = this.state.mobiles.reverse();
 this.setState({mobiles:price});
 }
 
 purchase = () => {
 this.setState(
 {mobiles: this.state.mobiles.filter((e) => {
 if(e.isPurchased === true){
   return e.name;
 }
 })}
 );
 
 };


render() {

return (
<div>
<button onClick={() => this.ascending()}>letterasc</button>
<button onClick={() => this.descending()}>letterDes</button>
<button onClick={() => this.ascPrice()}>AscPrice</button>
<button onClick={() => this.dscPrice()}>DesPrice</button>
<button onClick={() => this.purchase()}>Purchase</button>


{this.state.mobiles.map((value,index) => {
    return  <h1 key={index}>{value.name} : {value.price} </h1>
})}

</div>
)
};
}

export default One


