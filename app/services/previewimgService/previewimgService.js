 export default class PreviewimgService {
   getReader(resolve, reject) {
     let reader = new FileReader();
     reader.onload = this.Onload(reader, resolve);
     reader.onerror = this.OnError(reader, reject);
     return reader;
   }
   readAsDataUrl(file) {
     let that = this;
     return new Promise(function (resolve, reject) {
       let reader = that.getReader(resolve, reject);
       reader.readAsDataURL(file);
     })
   }
   Onload(reader, resolve) {
     return () => {
       resolve(reader.result);
     }
   }
   OnError(reader, reject) {
     return () => {
       reject(reader.result);
     }
   }
 }
