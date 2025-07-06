import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
 name : 'pipelearn'
})
export class learnPipe implements PipeTransform{
   transform(val:any,total:any,decimal:any) {
    return ((val/total)*100).toFixed(decimal) +" %"

   }
}
