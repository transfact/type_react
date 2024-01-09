
interface MonthSale {
    month : string,
    values : number[]
}
interface YearSale {
    title : string,
    categories : string[],
    salesData : MonthSale[],
}

let myPromise1 = new Promise<YearSale>((resolve, reject) => {

    let myCustomData : YearSale ={
        title : "매출 통계 1",
        categories: ['Electronics', 'Clothing', 'Books', 'Home & Kitchen', 'Toys'],
        salesData: [
            { month: 'January', values: [1200, 800, 300, 600, 400] },
            { month: 'February', values: [1500, 900, 400, 700, 500] },
            { month: 'March', values: [1300, 850, 350, 550, 450] },
            { month: 'April', values: [1400, 820, 380, 620, 420] },
            { month: 'May', values: [1600, 950, 420, 750, 550] },
            { month: 'June', values: [1700, 980, 450, 780, 580] },
            { month: 'July', values: [1800, 1000, 500, 800, 600] },
            { month: 'August', values: [2000, 1100, 550, 850, 700] },
            { month: 'September', values: [1900, 1050, 530, 830, 680] },
            { month: 'October', values: [2100, 1200, 600, 900, 750] },
            { month: 'November', values: [2200, 1250, 620, 920, 780] },
            { month: 'December', values: [2400, 1400, 700, 1000, 900] },
        ],
    }

    setTimeout(function () {
      resolve(myCustomData); // 와! 문제 없음!
    }, 250);
  });
export default myPromise1;