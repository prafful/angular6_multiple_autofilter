import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(value: any, searchName: string, searchUserName:string): any {
    if(value && value.length){
      return value.filter((v)=>{
        if(searchName && v.name.toLowerCase().indexOf(searchName.toLowerCase())=== -1){
          return false
        }
        if(searchUserName && v.username.toLowerCase().indexOf(searchUserName.toLowerCase())=== -1){
          return false
        }
        return true
      })
    }else{
      return value
    }
  } 
/* 
  transform(users:any, args:any){
    if(args === undefined){
      return users
    }

    return users.filter(function(v){
      return Object.keys(v).some( key => v[key].toLowerCase().indexOf(args) > -1)
    })

  } */

}
