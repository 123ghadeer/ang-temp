import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from "ngx-spinner";

@Injectable({
  providedIn: 'root'
})

export class DeliveryServiceService {
orders:any[]=[];
choosedOrders:any[]=[];
orderItems:any[]=[];
user:any[]=[];
data:any[]=[{}];
summations:any=[{}];
summations2:any=[{}];
profit :number=0;
del :number=0;
DeliveredOrders: any[]=[];
  toaster: any;
  constructor(private http:HttpClient,public spinner:NgxSpinnerService) { }
  getAllOrders()
  {
    // debugger
    this.http.get('https://localhost:44376/api/Orders/GetOrders').subscribe((result:any)=>{
       
      this.orders=result;
      console.log(result);
      // this.toastr.success('Wow!', 'getAllTrainers works well!');
    },err=>{
      console.log(err);
      // this.toastr.error(err);
    })
    // debugger
    return this.orders
  }
  getChoosedOrders(deliveryId:number){ 
      this.http.post('https://localhost:44376/api/Orders/GetChoosedOrders',deliveryId).subscribe((result:any)=>{
        this.choosedOrders=result;
      console.log(result);
      },err =>{
        console.log(err);
      })
    }
    getDeliveredOrders(deliveryId:number){ 
      console.log("This is delivery id: " + deliveryId)
      this.http.post('https://localhost:44376/api/Orders/GetDeliveredOrders',deliveryId).subscribe((result:any)=>{
        this.DeliveredOrders=result;
      console.log("lllllllllll"+result);
      },err =>{
        console.log(err);
      })
    }
    getOrderItem(orderId:number){ 
      this.http.post('https://localhost:44376/api/Orders/GetOrderDetails',orderId).subscribe((result:any)=>{
        this.orderItems=result;
      console.log("orderItems is:" + this.orderItems + result);
      },err =>{
        console.log(err);
      })
    }
    
  getUserInfo(userId:number){ 
    this.http.post('https://localhost:44376/api/Users/GetUserById',userId).subscribe((result:any)=>{
      this.user=result;
    console.log(result);
    return this.user;
    },err =>{
      console.log(err);
    })
  }
  chooseOrder(orderId:number){ 
    this.http.post('https://localhost:44376/api/Orders/ChooseOrder',orderId).subscribe((result:any)=>{
        console.log("Choosed Order Successfully");
    },err =>{
      console.log(err);
    })
  }
  UnChooseOrder(orderId:number){ 
    this.http.post('https://localhost:44376/api/Orders/UnChooseOrder',orderId).subscribe((result:any)=>{
        console.log("unChoosed Order Successfully");
    },err =>{
      console.log(err);
    })
  }
  deliveredOrder(orderId:number){ 
    this.http.post('https://localhost:44376/api/Orders/DeliveredOrder',orderId).subscribe((result:any)=>{
        console.log("Choosed Order Successfully");
    },err =>{
      console.log(err);
    })
  }
  unDeliveredOrder(orderId:number){ 
    this.http.post('https://localhost:44376/api/Orders/UnDeliveredOrder',orderId).subscribe((result:any)=>{
        console.log("Choosed Order Successfully");
    },err =>{
      console.log(err);
    })
  }
  deleteDeliveryOrder(id:number)
  {
   
     this.http.delete('https://localhost:44376/api/Orders/deleteDeliveryOrder/'+id).subscribe((result)=>{

       console.log("delete"+id);
    },err=>{
      console.log(err);
       })
  } 
  createDeliveryOrder(UserId:number,OrderId:number)
  {
    var dO = {"UserId": UserId, "OrderId":OrderId};

    console.log("CreateDeliveryOrder"+ UserId + OrderId)
  
     this.http.post('https://localhost:44376/api/Orders/CreateDeliveryOrder',dO).subscribe((result)=>{

       console.log(OrderId);
    },err=>{
      console.log(err);
       })
  }
  
  getSummations()
  {
    
    console.log("console.log(this.summations)")
  
     this.http.get('https://localhost:44376/api/Orders/summations').subscribe((result:any)=>{
       this.summations=result;
      
       console.log(this.summations);
    },err=>{
      console.log(err);
       })
  }
  getSummations2(UserId:number)
  {
    
    console.log("console.log(this.summations)"+UserId)
  
     this.http.post('https://localhost:44376/api/Orders/summations2',UserId).subscribe((result:any)=>{
       this.summations2=result;
       this.del=result.totalOfOrders;
       this.profit=result.totalOfOrders*1.5;
       console.log(this.profit)
       console.log(this.summations2);
    },err=>{
      console.log(err);
       })
  }

  updataprofile(data:any)
  {
    this.spinner.show();

     this.http.put('https://localhost:44376/api/Users/UpdateUser',data).subscribe((result)=>{
     
     this.toaster.success('Trainer Updated');
     this.spinner.hide();
      console.log(data);
    },err=>{
      console.log(err);
      console.log(data);
      this.toaster.error(err);
       })
  }
}

