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

const four = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("i will get print before three , yo man..")
        }, 2000);
    })
}

async function printSeries() {
    first();
    await second();
    var fourResult = await four();
    console.log(fourResult);
    third();
}


printSeries();