class PostList { 
    _posts; 
    
    
    constructor(postsList = []) { 
    this._posts = postsList.slice(); 
    
    } 
    
    
    clear() { 
    this._posts = []; 
    } 
    
    
    addAll(posts) { 
    if (posts) { 
    var photos = this; 
    var error = []; 
    posts.forEach(function (item) { 
    if (!photos.add(item)) { 
    error.push(item); 
    } 
    }); 
    return error; 
    } 
    return posts; 
    } 
    
    
    get(id) { 
    if (typeof id !== "string") { 
    console.log("В функцию были переданы аргументы неподходящего типа"); 
    return undefined; 
    } 
    var num = Number.parseInt(id, 10); 
    var found = photoPosts.find(function (element) { 
    return element.id === id; 
    }) 
    if (!found) { 
    console.log("Нет элемента с таким id либо он был удален"); 
    return undefined; 
    } 
    return found; 
    } 
    
    
    remove(id) { 
    if (typeof id !== "string") { 
    console.log("В функцию были переданы аргументы неподходящего типа"); 
    return undefined; 
    } 
    if (!this.get(id)) { 
    console.log("Нет элемента с таким id"); 
    return false; 
    } 
    const remIndex = photoPosts.indexOf(this.get(id)); 
    photoPosts.splice(remIndex, 1); 
    return true; 
    } 
    
    
    static validate(photoPost) { 
    if (!photoPost) { 
    return false; 
    } 
    if (!('likes' in photoPost && 'author' in photoPost && 'photoLink' in photoPost && 'createdAt' in photoPost && 'id' in photoPost && 'description' in photoPost && 'hashTags' in photoPost)) { 
    return false; 
    } 
    if (photoPost.id === '' || typeof photoPost.id !== 'string') { 
    return false; 
    } 
    if (photoPost.description === '' || typeof photoPost.description !== 'string' || photoPost.description.length > 200) { 
    return false; 
    } 
    if (!(photoPost.createdAt instanceof Date) || photoPost.createdAt.toString() === "Invalid Date") { 
    return false; 
    } 
    if (photoPost.author === '' || typeof photoPost.author !== 'string') { 
    return false; 
    } 
    if (photoPost.photoLink === '' || typeof photoPost.photoLink !== 'string') { 
    return false; 
    } 
    if (photoPost.likes === null) { 
    return false; 
    } 
    return true; 
    } 
    
    
    add(photoPost) { 
    if (!PostList.validate(photoPost)) { 
    return false; 
    } 
    photoPost.id = "" + (photoPosts.length + 1); 
    photoPosts.push(photoPost); 
    return true; 
    } 
    
    edit(id, photoPost) { 
    if (!this.get(id)) { 
    return false; 
    } 
    let obj = this.get(id); 
    if ('hashTags' in photoPost) { 
    obj.hashTags = photoPost.hashTags; 
    } 
    if ('photoLink' in photoPost) { 
    obj.photoLink = photoPost.photoLink; 
    } 
    if ('description' in photoPost) { 
    obj.description = photoPost.description; 
    } 
    if (!PostList.validate(obj)) { 
    return false; 
    } 
    this.get(id) === obj; 
    return true; 
    } 
    
    
    
    
    static _checkObject(post) { 
    return !!post; 
    } 
    
    getPage(skip = 0, top = 10, filterConfig = {}) { 
    let foundPosts = this._posts.sort((post1, post2) => post2.createdAt.getTime() - post1.createdAt.getTime()); 
    if (filterConfig) { 
    if (Object.prototype.hasOwnProperty.call(filterConfig, 'author')) { 
    foundPosts = foundPosts.filter(post => post.author.includes(filterConfig.author)); 
    } else if (Object.prototype.hasOwnProperty.call(filterConfig, 'hashTags')) { 
    if (filterConfig.hashTags.length !== 0) { 
    foundPosts = foundPosts.filter((post) => { 
    for (let i = 0; i < filterConfig.hashTags.length; i++) { 
    for (let j = 0; j < post.hashTags.length; j++) { 
    if (post.hashTags[j] === filterConfig.hashTags[i]) { 
    return true; 
    } 
    } 
    } 
    return false; 
    }); 
    } 
    } 
    } 
    foundPosts = foundPosts.slice(skip, skip + top); 
    if (PostList._checkObject(foundPosts) && foundPosts.length !== 0) { 
    return foundPosts; 
    } 
    
    return null; 
    } 
    
    
    
    } 
    
    
    
    let photoPosts =[
{
    id: '1',
    desription: 'Минск',
    createdAt:new Date ('2019-01-01T22:00:00'),
    author:'Тюрюханов Даниил',
    hashTags: ["programming"], 
    likes: ["?"] ,
    photoLink: 'https://www.google.com/search?q=%D0%BC%D0%B8%D0%BD%D1%81%D0%BA&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjEx_P71PjgAhUEGuwKHUSMDo8Q_AUIDigB&biw=1083&bih=660#imgrc=7LF-JgCYIHWzeM:'

},
{
    id: '2',
    desription: 'Лучший электромобиль Tesla Model S Signature Perfomance',
    createdAt: new Date ('2019-01-01T22:01:02'),
    author:'Иванов Иван',
    hashTags: ["programming"], 
    likes: ["?"] ,
    photoLink: 'https://www.google.com/search?q=%D0%BC%D0%B8%D0%BD%D1%81%D0%BA&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjEx_P71PjgAhUEGuwKHUSMDo8Q_AUIDigB&biw=1083&bih=660#imgrc=7LF-JgCYIHWzeM:'

},

{
    id: '3',
    desription: 'Лучший электромобиль Tesla Model S Signature Perfomance',
    createdAt: new Date ('2019-01-22T22:15:00'),
    author:'Петров Петр',
    hashTags: ["programming"], 
    likes: ["?"] ,
    photoLink: 'https://www.google.com/search?q=%D0%BC%D0%B8%D0%BD%D1%81%D0%BA&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjEx_P71PjgAhUEGuwKHUSMDo8Q_AUIDigB&biw=1083&bih=660#imgrc=7LF-JgCYIHWzeM:'

},

{
    id: '4',
    desription: 'Лучший электромобиль Tesla Model S Signature Perfomance',
    createdAt:new Date ('2019-04-05T22:00:00'),
    author:'Федоров Федор',
    hashTags: ["programming"], 
    likes: ["?"] ,
    photoLink: 'https://www.google.com/search?q=%D0%BC%D0%B8%D0%BD%D1%81%D0%BA&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjEx_P71PjgAhUEGuwKHUSMDo8Q_AUIDigB&biw=1083&bih=660#imgrc=7LF-JgCYIHWzeM:'

},

{
    id: '5',
    desription: 'Лучший электромобиль Tesla Model S Signature Perfomance',
    createdAt: new Date ('2019-01-09T08:00:00'),
    author:'Александров Александр',
    hashTags: ["programming"], 
    likes: ["?"] ,
    photoLink: 'https://www.google.com/search?q=%D0%BC%D0%B8%D0%BD%D1%81%D0%BA&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjEx_P71PjgAhUEGuwKHUSMDo8Q_AUIDigB&biw=1083&bih=660#imgrc=7LF-JgCYIHWzeM:'

},

{
    id: '6',
    desription: 'Лучший электромобиль Tesla Model S Signature Perfomance',
    createdAt: new Date ('2018-01-01T22:00:00'),
    author:'Киселев Кисель',
    hashTags: ["programming"], 
    likes: ["?"] ,
    photoLink: 'https://www.google.com/search?q=%D0%BC%D0%B8%D0%BD%D1%81%D0%BA&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjEx_P71PjgAhUEGuwKHUSMDo8Q_AUIDigB&biw=1083&bih=660#imgrc=7LF-JgCYIHWzeM:'

},

{
    id: '7',
    desription: 'Лучший электромобиль Tesla Model S Signature Perfomance',
    createdAt:new Date ('2019-05-05T22:00:00'),
    author:'Голынский Андрей',
    hashTags: ["programming"], 
    likes: ["?"] ,
    photoLink: 'https://www.google.com/search?q=%D0%BC%D0%B8%D0%BD%D1%81%D0%BA&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjEx_P71PjgAhUEGuwKHUSMDo8Q_AUIDigB&biw=1083&bih=660#imgrc=7LF-JgCYIHWzeM:'

},

{
    id: '8',
    desription: 'Лучший электромобиль Tesla Model S Signature Perfomance',
    createdAt:new Date ('2019-09-12T22:00:00'),
    author:'Данилков Егор',
    hashTags: ["programming"], 
    likes: ["?"] ,
    photoLink: 'https://www.google.com/search?q=%D0%BC%D0%B8%D0%BD%D1%81%D0%BA&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjEx_P71PjgAhUEGuwKHUSMDo8Q_AUIDigB&biw=1083&bih=660#imgrc=7LF-JgCYIHWzeM:'

},

{
    id: '9',
    desription: 'Лучший электромобиль Tesla Model S Signature Perfomance',
    createdAt:new Date ('2018-01-01T22:00:00'),
    author:'Шаповалов Геннадий',
    hashTags: ["programming"], 
    likes: ["?"] ,
    photoLink: 'https://www.google.com/search?q=%D0%BC%D0%B8%D0%BD%D1%81%D0%BA&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjEx_P71PjgAhUEGuwKHUSMDo8Q_AUIDigB&biw=1083&bih=660#imgrc=7LF-JgCYIHWzeM:'

},

{
    id: '10',
    desription: 'Лучший электромобиль Tesla Model S Signature Perfomance',
    createdAt:new Date ('2019-01-01T22:00:00'),
    author:'Гусев Тимофей',
    hashTags: ["programming"], 
    likes: ["?"] ,
    photoLink: 'https://www.google.com/search?q=%D0%BC%D0%B8%D0%BD%D1%81%D0%BA&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjEx_P71PjgAhUEGuwKHUSMDo8Q_AUIDigB&biw=1083&bih=660#imgrc=7LF-JgCYIHWzeM:'

},

{
    id: '11',
    desription: 'Лучший электромобиль Tesla Model S Signature Perfomance',
    createdAt:new Date ('2019-03-01T22:00:00'),
    author:'Иванов Иван',
    hashTags: ["programming"], 
    likes: ["?"] ,
    photoLink: 'https://www.google.com/search?q=%D0%BC%D0%B8%D0%BD%D1%81%D0%BA&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjEx_P71PjgAhUEGuwKHUSMDo8Q_AUIDigB&biw=1083&bih=660#imgrc=7LF-JgCYIHWzeM:'

},

{
    id: '12',
    desription: 'Лучший электромобиль Tesla Model S Signature Perfomance',
    createdAt:new Date ('2019-01-01T22:00:00'),
    author:'Иванов Иван',
    hashTags: ["programming"], 
    likes: ["?"] ,
    photoLink: 'https://www.google.com/search?q=%D0%BC%D0%B8%D0%BD%D1%81%D0%BA&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjEx_P71PjgAhUEGuwKHUSMDo8Q_AUIDigB&biw=1083&bih=660#imgrc=7LF-JgCYIHWzeM:'

},

{
    id: '13',
    desription: 'Лучший электромобиль Tesla Model S Signature Perfomance',
    createdAt:new Date ('2019-01-01T22:00:00'),
    author:'Иванов Иван',
    hashTags: ["programming"], 
    likes: ["?"] ,
    photoLink: 'https://www.google.com/search?q=%D0%BC%D0%B8%D0%BD%D1%81%D0%BA&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjEx_P71PjgAhUEGuwKHUSMDo8Q_AUIDigB&biw=1083&bih=660#imgrc=7LF-JgCYIHWzeM:'

},

{
    id: '14',
    desription: 'Лучший электромобиль Tesla Model S Signature Perfomance',
    createdAt:new Date ('2019-01-01T22:00:00'),
    author:'Иванов Иван',
    hashTags: ["programming"], 
    likes: ["?"] ,
    photoLink: 'https://www.google.com/search?q=%D0%BC%D0%B8%D0%BD%D1%81%D0%BA&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjEx_P71PjgAhUEGuwKHUSMDo8Q_AUIDigB&biw=1083&bih=660#imgrc=7LF-JgCYIHWzeM:'

},

{
    id: '15',
    desription: 'Лучший электромобиль Tesla Model S Signature Perfomance',
    createdAt: new Date ('2019-01-01T22:00:00'),
    author:'Иванов Иван',
    hashTags: ["programming"], 
    likes: ["?"] ,
    photoLink: 'https://www.google.com/search?q=%D0%BC%D0%B8%D0%BD%D1%81%D0%BA&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjEx_P71PjgAhUEGuwKHUSMDo8Q_AUIDigB&biw=1083&bih=660#imgrc=7LF-JgCYIHWzeM:'

},

{
    id: '16',
    desription: 'Лучший электромобиль Tesla Model S Signature Perfomance',
    createdAt:new Date ('2019-01-01T22:00:00'),
    author:'Иванов Иван',
    hashTags: ["programming"], 
    likes: ["?"] ,
    photoLink: 'https://www.google.com/search?q=%D0%BC%D0%B8%D0%BD%D1%81%D0%BA&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjEx_P71PjgAhUEGuwKHUSMDo8Q_AUIDigB&biw=1083&bih=660#imgrc=7LF-JgCYIHWzeM:'

},

{
    id: '17',
    desription: 'Лучший электромобиль Tesla Model S Signature Perfomance',
    createdAt:new Date ('2019-01-01T22:00:00'),
    author:'Иванов Иван',
    hashTags: ["programming"], 
    likes: ["?"] ,
    photoLink: 'https://www.google.com/search?q=%D0%BC%D0%B8%D0%BD%D1%81%D0%BA&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjEx_P71PjgAhUEGuwKHUSMDo8Q_AUIDigB&biw=1083&bih=660#imgrc=7LF-JgCYIHWzeM:'

},

{
    id: '18',
    desription: 'Лучший электромобиль Tesla Model S Signature Perfomance',
    createdAt:new Date ('2019-01-01T22:00:00'),
    author:'Иванов Иван',
    hashTags: ["programming"], 
    likes: ["?"] ,
    photoLink: 'https://www.google.com/search?q=%D0%BC%D0%B8%D0%BD%D1%81%D0%BA&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjEx_P71PjgAhUEGuwKHUSMDo8Q_AUIDigB&biw=1083&bih=660#imgrc=7LF-JgCYIHWzeM:'

},

{
    id: '19',
    desription: 'Лучший электромобиль Tesla Model S Signature Perfomance',
    createdAt: new Date ('2019-01-01T22:00:00'),
    author:'Иванов Иван',
    hashTags: ["programming"], 
    likes: ["?"] ,
    photoLink: 'https://www.google.com/search?q=%D0%BC%D0%B8%D0%BD%D1%81%D0%BA&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjEx_P71PjgAhUEGuwKHUSMDo8Q_AUIDigB&biw=1083&bih=660#imgrc=7LF-JgCYIHWzeM:'

},

{
    id: '20',
    desription: 'Лучший электромобиль Tesla Model S Signature Perfomance',
    createdAt: new Date ('2019-01-01T22:00:00'),
    author:'Иванов Иван',
    hashTags: ["programming"], 
    likes: ["?"] ,
    photoLink: 'https://www.google.com/search?q=%D0%BC%D0%B8%D0%BD%D1%81%D0%BA&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjEx_P71PjgAhUEGuwKHUSMDo8Q_AUIDigB&biw=1083&bih=660#imgrc=7LF-JgCYIHWzeM:'

},
 
];
    
    let test = new PostList(photoPosts); 
    console.log("let test = new PostList(photoPosts);"); 
    console.log(""); 
    console.log(""); 
    console.log("test._posts"); 
    console.log(test._posts); 
    console.log(""); 
    console.log(""); 
    console.log("test.getPage(0, 10)"); 
    console.log(test.getPage(0, 10)); 
    console.log("test.getPage(10, 10)"); 
    console.log(test.getPage(10, 10)); 
    console.log("test.getPage(0, 10, {author: 'Mas'})"); 
    console.log(test.getPage(0, 10, {author: 'Mas'}));
    
    
    console.log(""); 
    console.log(""); 
    console.log("test.get('10')"); 
    console.log(test.get("10")); 
    console.log("test.get('ыыыыыыыыыыыыыыы')"); 
    console.log(test.get("ыыыыыыыыыыыыыыы")); 
    console.log('test.get(10)'); 
    console.log(test.get(10)); 
    console.log(""); 
    console.log(""); 
    console.log("PostList.validate({ id: '23', description: 'Nexus 10', createdAt: new Date('2019-03-08T21:57:49'), author: 'KillerMask', photoLink: 'http://photoportal.by/photos/18', hashTags: [], likes: [] })"); 
    console.log(PostList.validate({ id: '23', description: 'Nexus 10', createdAt: new Date('2019-03-08T21:57:49'), author: 'KillerMask', photoLink: 'http://photoportal.by/photos/18', hashTags: [], likes: [] })); 
    console.log("PostList.validate({ id: '', description: 'Nexus 10', createdAt: new Date('2019-03-08T21:57:49'), author: 'KillerMask', photoLink: 'http://photoportal.by/photos/18', hashTags: [], likes: [] })"); 
    console.log(PostList.validate({ id: '', description: 'Nexus 10', createdAt: new Date('2019-03-08T21:57:49'), author: 'KillerMask', photoLink: 'http://photoportal.by/photos/18', hashTags: [], likes: [] })); 
    console.log(""); 
    console.log(""); 
    console.log("test.add({ id: '23', description: 'Nexus 10', createdAt: new Date('2019-03-08T21:57:49'), author: 'KillerMask', photoLink: 'http://photoportal.by/photos/18', hashTags: [], likes: [] })"); 
    console.log(test.add({ id: '23', description: 'Nexus 10', createdAt: new Date('2019-08-08T21:57:49'), author: 'KillerMask', photoLink: 'http://photoportal.by/photos/18', hashTags: [], likes: [] })); 
    console.log(""); 
    console.log(""); 
    console.log("test.get('1')"); 
    console.log(test.get("1")); 
    console.log("test.edit('1', { photoLink: 'http://haradok.info/static/news/5/4565/preview.jpg,de.. })"); 
    console.log(test.edit('1', { photoLink: 'http://haradok.info/static/news/5/4565/preview.jpg', description: "Поменяли!" })); 
    console.log("test.get('1')"); 
    console.log(test.get("1")); 
    console.log(""); 
    console.log(""); 
    console.log("test.clear();"); 
    test.clear(); 
    console.log("test._posts"); 
    console.log(test._posts);