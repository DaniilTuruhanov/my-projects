main = (function() {
    let photoPosts;
    let userName = '';
    let lastFilterConfig;
    let pageNumber = 1;
    let numMorePosts = 0;
    let showUserPage = function() {
      View.showUserHeader(userName);
      View.showAddButton();
      main.showPhotoPosts(lastFilterConfig);
    };
    return {
      getPhotoPost(id) {
        return photoPosts.get(id);
      },

      showPhotoPosts(filterConfig, skip = 0, top = 10) {
        View.clear();
        pageNumber = 1;
        if (filterConfig === undefined)
          filterConfig = {};
        //let filterConfig = View.getFilterConfig();
        let photoPosts1 = photoPosts.getPage(0, 10, filterConfig);
        numMorePosts = photoPosts1.length - skip - top;
        photoPosts1 = photoPosts1.slice(skip, skip + top);
        lastFilterConfig = filterConfig;
        if (photoPosts1 !== null)
          photoPosts1.forEach(item => View.showPost(item));
        if (numMorePosts > 0) {
          View.showLoadMoreButton();
        }
        // if (photoPosts1.length === 10 && photoPosts.getPage(10, 1, filterConfig).length === 1) {
        //   View.showLoadMoreButton();
        // }
      },

      getPageNumber() {
        return pageNumber;
      },

      incPageNumber() {
        pageNumber++;
        numMorePosts -= 10;
      },

      getLastFilter() {
        return lastFilterConfig;
      },

      addPhotoPost(post) {
        if (userName !== '') {
          post.author = userName;
          if (photoPosts.add(post)) {
            main.showPhotoPosts(lastFilterConfig);
            this.save();
            return true;
          }
        }
      },

      removePhotoPost(id) {
        if (userName !== '') {
          if (photoPosts.remove(id + "")) {
            View.removePost(id);
            main.showPhotoPosts(lastFilterConfig);
            this.save();
          }
        }
      },

      editPhotoPost(id, photoPost) {
        if (userName !== '') {
          if (photoPosts.edit(id, photoPost)) {
            View.replacePost(photoPosts.get(id));
            this.save();
            return true;
          } else return false;
        }
      },

      logIn(login) {
        if (login !== '') {
          userName = login;
          View.showHeader();
          this.save();
        }
      },

      logOut() {
        userName = "";
        View.showHeader();
      },

      getUser() {
        return userName;
      },

      showMoreButton() {
        View.showLoadMoreButton();
      },
      save() {
        localStorage.removeItem('pPL');
        localStorage.setItem('pPL', JSON.stringify(photoPosts._posts));
        localStorage.setItem('userName', userName);
      },

      restore() {
        let pPL = JSON.parse(localStorage.getItem('pPL'));
        if (pPL === null) {
          photoPosts = new PostList([{
              id: '1',
              desription: 'Минск',
              createdAt: new Date('2019-01-01T22:00:00'),
              author: 'Тюрюханов Даниил',
              hashTags: ["programming"],
              likes: ["Polya", "Polya332", "Polyafsdf"],
              photoLink: 'Minsk5.jpg'

            },
            {
              id: '2',
              desription: 'Лучший электромобиль Tesla Model S Signature Perfomance',
              createdAt: new Date('2019-01-01T22:01:02'),
              author: 'Иванов Иван',
              hashTags: ["programming"],
              likes: ["Polya", "danik"],
              photoLink: 'Minsk4.jpg'

            },

            {
              id: '3',
              desription: 'Лучший электромобиль Tesla Model S Signature Perfomance',
              createdAt: new Date('2019-01-22T22:15:00'),
              author: 'Петров Петр',
              hashTags: ["programming"],
              likes: ["Polya", "vwef", "Polya435"],
              photoLink: 'Minsk1.jpg'

            },

            {
              id: '4',
              desription: 'Лучший электромобиль Tesla Model S Signature Perfomance',
              createdAt: new Date('2019-04-05T22:00:00'),
              author: 'Федоров Федор',
              hashTags: ["programming"],
              likes: ["Polya"],
              photoLink: 'bgu_zdanie.jpg'

            },

            {
              id: '5',
              desription: 'Лучший электромобиль Tesla Model S Signature Perfomance',
              createdAt: new Date('2019-01-09T08:00:00'),
              author: 'Александров Александр',
              hashTags: ["programming"],
              likes: ["Polya"],
              photoLink: "Minsk6.jpg"

            },

            {
              id: '6',
              desription: 'Лучший электромобиль Tesla Model S Signature Perfomance',
              createdAt: new Date('2018-01-01T22:00:00'),
              author: 'DDD',
              hashTags: ["programming"],
              likes: ["Polya", "danik"],
              photoLink: 'bgu_zdanie.jpg'

            },

            {
              id: '7',
              desription: 'Лучший электромобиль Tesla Model S Signature Perfomance',
              createdAt: new Date('2019-05-05T22:00:00'),
              author: 'DDD',
              hashTags: ["programming", "BSU"],
              likes: ["Polya"],
              photoLink: 'Minsk1.jpg'

            },

            {
              id: '8',
              desription: 'Лучший электромобиль Tesla Model S Signature Perfomance',
              createdAt: new Date('2019-09-12T22:00:00'),
              author: 'danik',
              hashTags: ["programming", "thinking", "danik"],
              likes: ["Polya", "Polyaw", "danik"],
              photoLink: 'Minsk.jpg'

            },

            {
              id: '9',
              desription: 'Лучший электромобиль Tesla Model S Signature Perfomance',
              createdAt: new Date('2018-01-01T22:00:00'),
              author: 'Шаповалов Геннадий',
              hashTags: ["programming"],
              likes: ["Polya", "Polya2", "v3"],
              photoLink: 'Minsk2.jpg'

            },

            {
              id: '10',
              desription: 'Лучший электромобиль Tesla Model S Signature Perfomance',
              createdAt: new Date('2019-01-01T22:00:00'),
              author: 'Гусев Тимофей',
              hashTags: ["programming"],
              likes: ["Polya"],
              photoLink: "bgu_zdanie.jpg"

            },

            {
              id: '11',
              desription: 'Лучший электромобиль Tesla Model S Signature Perfomance',
              createdAt: new Date('2019-03-01T22:00:00'),
              author: 'Иванов Иван',
              hashTags: ["programming"],
              likes: ["Polya"],
              photoLink: 'Minsk8.jpg'

            },

            {
              id: '12',
              desription: 'Лучший электромобиль Tesla Model S Signature Perfomance',
              createdAt: new Date('2019-01-01T22:00:00'),
              author: 'Иванов Иван',
              hashTags: ["programming"],
              likes: ["Polya"],
              photoLink: 'Minsk1.jpg'

            },

            {
              id: '13',
              desription: 'Лучший электромобиль Tesla Model S Signature Perfomance',
              createdAt: new Date('2019-01-01T22:00:00'),
              author: 'Иванов Иван',
              hashTags: ["programming"],
              likes: ["Polya"],
              photoLink: 'bgu_zdanie.jpg'

            },

            {
              id: '14',
              desription: 'Лучший электромобиль Tesla Model S Signature Perfomance',
              createdAt: new Date('2019-01-01T22:00:00'),
              author: 'Иванов Иван',
              hashTags: ["programming"],
              likes: ["Polya"],
              photoLink: "Minsk5.jpg"

            },

            {
              id: '15',
              desription: 'Лучший электромобиль Tesla Model S Signature Perfomance',
              createdAt: new Date('2019-01-01T22:00:00'),
              author: 'Иванов Иван',
              hashTags: ["programming"],
              likes: ["Polya"],
              photoLink: 'Minsk7.jpg'

            },

            {
              id: '16',
              desription: 'Лучший электромобиль Tesla Model S Signature Perfomance',
              createdAt: new Date('2019-01-01T22:00:00'),
              author: 'Иванов Иван',
              hashTags: ["programming"],
              likes: ["Polya"],
              photoLink: 'Minsk2.jpg'

            },

            {
              id: '17',
              desription: 'Лучший электромобиль Tesla Model S Signature Perfomance',
              createdAt: new Date('2019-01-01T22:00:00'),
              author: 'Иванов Иван',
              hashTags: ["programming"],
              likes: ["Polya"],
              photoLink: 'bgu_zdanie.jpg'

            },

            {
              id: '18',
              desription: 'Лучший электромобиль Tesla Model S Signature Perfomance',
              createdAt: new Date('2019-01-01T22:00:00'),
              author: 'Иванов Иван',
              hashTags: ["programming"],
              likes: ["Polya"],
              photoLink: 'Minsk1.jpg'

            },

            {
              id: '19',
              desription: 'Лучший электромобиль Tesla Model S Signature Perfomance',
              createdAt: new Date('2019-01-01T22:00:00'),
              author: 'Иванов Иван',
              hashTags: ["programming"],
              likes: ["Polya"],
              photoLink: 'Minsk.jpg'

            },

            {
              id: '20',
              desription: 'Лучший электромобиль Tesla Model S Signature Perfomance',
              createdAt: new Date('2019-01-01T22:00:00'),
              author: 'Иванов Иван',
              hashTags: ["programming"],
              likes: ["Polya"],
              photoLink: 'bgu_zdanie.jpg'

            },
          ]);
        } else {
          pPL.forEach(item => item.createdAt = new Date(item.createdAt));
          photoPosts = new PostList(pPL);
        }
        userName = localStorage.getItem('userName');
      },
      start() {
        //main.save();
        main.restore();
        main.logIn("danik");
        main.showPhotoPosts();
      },
    }
  }
  ());
  if(localStorage["pPL"]==="undefined")
  localStorage.setItem("pPL",null);
//localStorage.removeItem("pPL")
// localStorage.setItem("Posts","a");
main.start();
//main.start();
