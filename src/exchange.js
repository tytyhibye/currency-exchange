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
