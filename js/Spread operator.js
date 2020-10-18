const listC = [1, 2, 3]
const listD = [...listC]
listD.push(4)
console.log('listC:', listC)
console.log('listD:', listD)
const article = {
    title: 'How to Use the Spread Operator (...) in JavaScript',
    claps: 1000000,
    author: {
        name: 'Juan',
        publication: 'LiveCodeStream'
    }
}

const articleCopy = {...article }


articleCopy.title = 'Strange behaviours with spread operator and deep copy';
articleCopy.author.name = 'JC';

console.log('Original title:', article.title);
console.log('Original authors:', article.author.name)

console.log('Copy title:', articleCopy.title)
console.log('Copy authors:', articleCopy.author.name)
const obj1 = { a: 1, b: 2 }
const obj2 = { c: 3 }

const mergedObj = {...obj1, ...obj2 }

console.log('Merged Object: ', mergedObj)