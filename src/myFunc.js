
function verifyName(name, data){
    if (data.find(dictionary => dictionary.name === name) !== undefined){
        return false
    }else if(name === ''){
        return false
    }else if(name.indexOf(' ') >= 0){
        return false
    }else{
        return true
    }
}

function verifyNameText(name, data){
    if (data.find(dictionary => dictionary.name === name) !== undefined){
        return 'Already have this name!';
    }else if(name === ''){
        return 'This name is empty!';
    }else if(name.indexOf(' ') >= 0){
        return 'This name have spaces!';
    }else{
        return 'Success!';
    }
}

function verifyPrice(price){
    if (Number.isNaN(Number(price)) === true){
        return false
    }else if(price === ''){
        return false
    }else if(price.indexOf(' ') >= 0){
        return false
    }else{
        return true
    }
}

function verifyPriceText(price){
    if (Number.isNaN(Number(price)) === true){
        return 'This price is not a number';
    }else if(price === ''){
        return 'This price is empty!';
    }else if(price.indexOf(' ') >= 0){
        return 'This price have spaces!';
    }else{
        return 'Success!';
    }
}

export { verifyName, verifyNameText, verifyPrice, verifyPriceText };