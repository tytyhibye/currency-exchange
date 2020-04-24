export class Xchange {
  async getRate() {
   
    let jsonifiedResponse;
    try {
      let response = await fetch(` https://prime.exchangerate-api.com/v5/${process.env.API_KEY}/latest/USD`);
      // console.log(await);
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json(); 
      } else {
        jsonifiedResponse = false;
      }
    } catch (error) {
      // console.log(catch);
      return false;
    }  
    return jsonifiedResponse;  
  }

  
  
}
