export class Xchange {

  async getData(url) {
    try {
      let request = await fetch(url);
      if (request.ok && request.status === 200) {
        let data = await request.json();
        return data;
      } else {
        request = false;
      }
    } catch (error) {
      return false;
    }
  }
}




  //  async getRate() {
//     let currencyResponse;
//     try {
//       let response = await fetch(`https://prime.exchangerate-api.com/v5/${process.env.API_KEY}/latest/USD`);
//       console.log(response)
//       if (response.ok && response.status == 200) {
//         currencyResponse = await response.conversion_rates.AUD.json(); 
//       } else {
//         currencyResponse = false;
//       }
//     } catch (error) {
//       console.log('in the catch');
//       return false;
//     }  
//     return currencyResponse;  
//   }
// }
