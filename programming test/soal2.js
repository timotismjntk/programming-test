const friendSort = (arr) => {
    const submitedList = []
    submitedList.push(...arr)
    submitedList.sort((a, b) => b.nilaiSuka - a.nilaiSuka);

    console.log('Input')
    console.log('-------')
    for(var i = 0; i < arr.length; i++) {
        console.log(`${arr[i].nama} ${arr[i].nilaiSuka}`)
    }
    console.log('\n')
    console.log('Output')
    console.log('-------')
    for(var i = 0; i < submitedList.length; i++) {
        console.log(submitedList[i].nama)
    }
}
const data = [
    {
        nama: 'Adi',
        nilaiSuka: 1
    },
    {
        nama: 'Roy',
        nilaiSuka: 3
    },
    {
        nama: 'Reno',
        nilaiSuka: 2
    },
    {
        nama: 'Joe',
        nilaiSuka: 10
    },
    {
        nama: 'Revi',
        nilaiSuka: 4
    }
]
friendSort(data)