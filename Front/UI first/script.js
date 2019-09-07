(function(){
let photoPosts =[
{
    id: '1',
    desription: 'Минск',
    createdAt:new Date ('2019-01-01T22:00:00'),
    author:'Тюрюханов Даниил',
    photoLink: 'https://www.google.com/search?q=%D0%BC%D0%B8%D0%BD%D1%81%D0%BA&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjEx_P71PjgAhUEGuwKHUSMDo8Q_AUIDigB&biw=1083&bih=660#imgrc=7LF-JgCYIHWzeM:'

},
{
    id: '2',
    desription: 'Лучший электромобиль Tesla Model S Signature Perfomance',
    createdAt: new Date ('2019-01-01T22:01:02'),
    author:'Иванов Иван',
    photoLink: 'https://www.google.com/search?q=%D0%BC%D0%B8%D0%BD%D1%81%D0%BA&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjEx_P71PjgAhUEGuwKHUSMDo8Q_AUIDigB&biw=1083&bih=660#imgrc=7LF-JgCYIHWzeM:'

},

{
    id: '3',
    desription: 'Лучший электромобиль Tesla Model S Signature Perfomance',
    createdAt: new Date ('2019-01-22T22:15:00'),
    author:'Петров Петр',
    photoLink: 'https://www.google.com/search?q=%D0%BC%D0%B8%D0%BD%D1%81%D0%BA&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjEx_P71PjgAhUEGuwKHUSMDo8Q_AUIDigB&biw=1083&bih=660#imgrc=7LF-JgCYIHWzeM:'

},

{
    id: '4',
    desription: 'Лучший электромобиль Tesla Model S Signature Perfomance',
    createdAt:new Date ('2019-04-05T22:00:00'),
    author:'Федоров Федор',
    photoLink: 'https://www.google.com/search?q=%D0%BC%D0%B8%D0%BD%D1%81%D0%BA&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjEx_P71PjgAhUEGuwKHUSMDo8Q_AUIDigB&biw=1083&bih=660#imgrc=7LF-JgCYIHWzeM:'

},

{
    id: '5',
    desription: 'Лучший электромобиль Tesla Model S Signature Perfomance',
    createdAt: new Date ('2019-01-09T08:00:00'),
    author:'Александров Александр',
    photoLink: 'https://www.google.com/search?q=%D0%BC%D0%B8%D0%BD%D1%81%D0%BA&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjEx_P71PjgAhUEGuwKHUSMDo8Q_AUIDigB&biw=1083&bih=660#imgrc=7LF-JgCYIHWzeM:'

},

{
    id: '6',
    desription: 'Лучший электромобиль Tesla Model S Signature Perfomance',
    createdAt: new Date ('2018-01-01T22:00:00'),
    author:'Киселев Кисель',
    photoLink: 'https://www.google.com/search?q=%D0%BC%D0%B8%D0%BD%D1%81%D0%BA&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjEx_P71PjgAhUEGuwKHUSMDo8Q_AUIDigB&biw=1083&bih=660#imgrc=7LF-JgCYIHWzeM:'

},

{
    id: '7',
    desription: 'Лучший электромобиль Tesla Model S Signature Perfomance',
    createdAt:new Date ('2019-05-05T22:00:00'),
    author:'Голынский Андрей',
    photoLink: 'https://www.google.com/search?q=%D0%BC%D0%B8%D0%BD%D1%81%D0%BA&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjEx_P71PjgAhUEGuwKHUSMDo8Q_AUIDigB&biw=1083&bih=660#imgrc=7LF-JgCYIHWzeM:'

},

{
    id: '8',
    desription: 'Лучший электромобиль Tesla Model S Signature Perfomance',
    createdAt:new Date ('2019-09-12T22:00:00'),
    author:'Данилков Егор',
    photoLink: 'https://www.google.com/search?q=%D0%BC%D0%B8%D0%BD%D1%81%D0%BA&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjEx_P71PjgAhUEGuwKHUSMDo8Q_AUIDigB&biw=1083&bih=660#imgrc=7LF-JgCYIHWzeM:'

},

{
    id: '9',
    desription: 'Лучший электромобиль Tesla Model S Signature Perfomance',
    createdAt:new Date ('2018-01-01T22:00:00'),
    author:'Шаповалов Геннадий',
    photoLink: 'https://www.google.com/search?q=%D0%BC%D0%B8%D0%BD%D1%81%D0%BA&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjEx_P71PjgAhUEGuwKHUSMDo8Q_AUIDigB&biw=1083&bih=660#imgrc=7LF-JgCYIHWzeM:'

},

{
    id: '10',
    desription: 'Лучший электромобиль Tesla Model S Signature Perfomance',
    createdAt:new Date ('2019-01-01T22:00:00'),
    author:'Гусев Тимофей',
    photoLink: 'https://www.google.com/search?q=%D0%BC%D0%B8%D0%BD%D1%81%D0%BA&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjEx_P71PjgAhUEGuwKHUSMDo8Q_AUIDigB&biw=1083&bih=660#imgrc=7LF-JgCYIHWzeM:'

},

{
    id: '11',
    desription: 'Лучший электромобиль Tesla Model S Signature Perfomance',
    createdAt:new Date ('2019-03-01T22:00:00'),
    author:'Иванов Иван',
    photoLink: 'https://www.google.com/search?q=%D0%BC%D0%B8%D0%BD%D1%81%D0%BA&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjEx_P71PjgAhUEGuwKHUSMDo8Q_AUIDigB&biw=1083&bih=660#imgrc=7LF-JgCYIHWzeM:'

},

{
    id: '12',
    desription: 'Лучший электромобиль Tesla Model S Signature Perfomance',
    createdAt:new Date ('2019-01-01T22:00:00'),
    author:'Иванов Иван',
    photoLink: 'https://www.google.com/search?q=%D0%BC%D0%B8%D0%BD%D1%81%D0%BA&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjEx_P71PjgAhUEGuwKHUSMDo8Q_AUIDigB&biw=1083&bih=660#imgrc=7LF-JgCYIHWzeM:'

},

{
    id: '13',
    desription: 'Лучший электромобиль Tesla Model S Signature Perfomance',
    createdAt:new Date ('2019-01-01T22:00:00'),
    author:'Иванов Иван',
    photoLink: 'https://www.google.com/search?q=%D0%BC%D0%B8%D0%BD%D1%81%D0%BA&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjEx_P71PjgAhUEGuwKHUSMDo8Q_AUIDigB&biw=1083&bih=660#imgrc=7LF-JgCYIHWzeM:'

},

{
    id: '14',
    desription: 'Лучший электромобиль Tesla Model S Signature Perfomance',
    createdAt:new Date ('2019-01-01T22:00:00'),
    author:'Иванов Иван',
    photoLink: 'https://www.google.com/search?q=%D0%BC%D0%B8%D0%BD%D1%81%D0%BA&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjEx_P71PjgAhUEGuwKHUSMDo8Q_AUIDigB&biw=1083&bih=660#imgrc=7LF-JgCYIHWzeM:'

},

{
    id: '15',
    desription: 'Лучший электромобиль Tesla Model S Signature Perfomance',
    createdAt: new Date ('2019-01-01T22:00:00'),
    author:'Иванов Иван',
    photoLink: 'https://www.google.com/search?q=%D0%BC%D0%B8%D0%BD%D1%81%D0%BA&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjEx_P71PjgAhUEGuwKHUSMDo8Q_AUIDigB&biw=1083&bih=660#imgrc=7LF-JgCYIHWzeM:'

},

{
    id: '16',
    desription: 'Лучший электромобиль Tesla Model S Signature Perfomance',
    createdAt:new Date ('2019-01-01T22:00:00'),
    author:'Иванов Иван',
    photoLink: 'https://www.google.com/search?q=%D0%BC%D0%B8%D0%BD%D1%81%D0%BA&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjEx_P71PjgAhUEGuwKHUSMDo8Q_AUIDigB&biw=1083&bih=660#imgrc=7LF-JgCYIHWzeM:'

},

{
    id: '17',
    desription: 'Лучший электромобиль Tesla Model S Signature Perfomance',
    createdAt:new Date ('2019-01-01T22:00:00'),
    author:'Иванов Иван',
    photoLink: 'https://www.google.com/search?q=%D0%BC%D0%B8%D0%BD%D1%81%D0%BA&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjEx_P71PjgAhUEGuwKHUSMDo8Q_AUIDigB&biw=1083&bih=660#imgrc=7LF-JgCYIHWzeM:'

},

{
    id: '18',
    desription: 'Лучший электромобиль Tesla Model S Signature Perfomance',
    createdAt:new Date ('2019-01-01T22:00:00'),
    author:'Иванов Иван',
    photoLink: 'https://www.google.com/search?q=%D0%BC%D0%B8%D0%BD%D1%81%D0%BA&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjEx_P71PjgAhUEGuwKHUSMDo8Q_AUIDigB&biw=1083&bih=660#imgrc=7LF-JgCYIHWzeM:'

},

{
    id: '19',
    desription: 'Лучший электромобиль Tesla Model S Signature Perfomance',
    createdAt: new Date ('2019-01-01T22:00:00'),
    author:'Иванов Иван',
    photoLink: 'https://www.google.com/search?q=%D0%BC%D0%B8%D0%BD%D1%81%D0%BA&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjEx_P71PjgAhUEGuwKHUSMDo8Q_AUIDigB&biw=1083&bih=660#imgrc=7LF-JgCYIHWzeM:'

},

{
    id: '20',
    desription: 'Лучший электромобиль Tesla Model S Signature Perfomance',
    createdAt: new Date ('2019-01-01T22:00:00'),
    author:'Иванов Иван',
    photoLink: 'https://www.google.com/search?q=%D0%BC%D0%B8%D0%BD%D1%81%D0%BA&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjEx_P71PjgAhUEGuwKHUSMDo8Q_AUIDigB&biw=1083&bih=660#imgrc=7LF-JgCYIHWzeM:'

},
 
];
function getPhotoPosts(skip,top,filterConfig=''){
    var photo1=new Array();
    let j=false;
    for (var i=0;i<photoPosts.length;i++){
        photo1.push(photoPosts[i]);
    }
     photo1.sort(function(a,b){return a.createdAt - b.createdAt});
    if (filterConfig==''){
        var photo=photo1.slice(skip,skip+top);
        return photo;
    }
    else{
            photo1 = photo1.filter(function(element){
           if (element.author==filterConfig.author) 
           return true ;
           else return false;
           
            });
        }
        var photo=photo1.slice(skip,skip+top);
        return photo;
    }
    
    function getPhotoPost(id){
       for(let i=0;i<photoPosts.length;i++){
           if (photoPosts[i].id==id){
               return photoPosts[i];
           }
       }
        }
        function validatePhotoPost(photopost){
            if(typeof(photopost.id) === undefined) return false;
            if(typeof(photopost.description) === undefined) return false;
            if(typeof(photopost.createdAt) === undefined) return false;
            if(typeof(photopost.author) === undefined) return false;
            if(typeof(photopost.photoLink) === undefined) return false;
            return true;
        }
        function addPhotoPost(photopost){
            if(validatePhotoPost(photopost) === true){
                photoPosts.push(photopost);
                return true;
            }
            return false;
        }

        function removePhotoPost(id){
            post = getPhotoPost(id);
            if(post !== undefined){
                index = photoPosts.indexOf(post);
                photoPosts.splice(index, 1);
            }
        }
        function editPhotoPost(id, photoPost){
            let post = getPhotoPost(id);
            if(validatePhotoPost(post) == true){
                for(x in photoPost){
                    post[x] = photoPost[x];
                }
                return true;
            }
            return false;
        }

editPhotoPost('1', { photoLink: 'http://haradok.info/static/news/5/4565/preview.jpg' }) 
console.log(photoPosts);

}());
