function generator(start,end){
    for(start; start >= end; start--){
        console.log(`'${start}'=>'${start}',`)
    }
}
generator(2020,1970)