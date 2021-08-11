const first = () => {
    console.log('first');
}

const second = () => {
    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve("second")
    //   }, 2000);
    // })
    setTimeout(() => {
        console.log('im two')
    }, 2000);
}

const third = () => {
    console.log('third')
}


async function printSeries() {
    first();
    await second();
    //console.log(store);
    third();
}

printSeries();