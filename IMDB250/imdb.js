const fs = require('fs')

const request = require('syncrequest')
const cheerio = require('cheerio')

const log = console.log.bind(console)

class Movie {
    constructor() {
        // 分别是电影名/评分/排名/类型/年份……
        this.name = ''
        this.score = 0
        this.ranking = 0
        this.type = ''
        this.year = ''
    }
}

const movieFromDiv = (div) => {
    let e = cheerio.load(div)

    let movie = new Movie()

    movie.name = e('.lister-item-header').find('a').text()
    movie.score = Number(e('.ratings-imdb-rating').find('strong').text())
    movie.ranking = Number(e('.lister-item-header').find('span').eq(0).text().split('.')[0])
    movie.year = e('.lister-item-header').find('span').eq(-1).text().slice(1, 5)
    movie.type = e('.genre').text().split(',')[0].trim()

    return movie
}

const ensureDir = (dir) => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir)
    }
}

const cachedUrl = (url) => {
    let dir = 'cached_html'
    ensureDir(dir)

    let cacheFile = dir + '/' + url.split('?')[1] + '.html'
    let exists = fs.existsSync(cacheFile)
    if (exists) {
        let data = fs.readFileSync(cacheFile)
        return data
    } else {
        let r = request.get.sync(url)
        let body = r.body
        fs.writeFileSync(cacheFile, body)
        return body
    }
}

const moviesFromUrl = (url) => {
    let body = cachedUrl(url)
    let e = cheerio.load(body)
    let movieDivs = e('.lister-item')
    let movies = []
    for (let i = 0; i < movieDivs.length; i++) {
        let div = movieDivs[i]
        let m = movieFromDiv(div)
        movies.push(m)
    }
    return movies
}

const saveMovie = (movies) => {
    let s = JSON.stringify(movies, null, 2)
    let path = 'imdb.json'
    fs.writeFileSync(path, s)
}

const downloadCovers = (movies) => {
    let dir = 'cover'
    ensureDir(dir)

    for (let i = 0; i < movies.length; i++) {
        let m = movies[i]
        let url = m.coverUrl
        let path = dir + '/' + String(m.ranking) + '_' + m.name + '.jpg'
        request.sync(url, {
            pipe: path,
        })
    }
}

const __main = () => {
    let movies = []
    console.time('IMDB')
    let url
    for (let i = 0; i < 5; i++) {
        let index = i * 50 + 1
        if (index === 1) {
            url = `https://www.imdb.com/search/title/?groups=top_250&sort=user_rating,desc&ref_=adv_prv`
        } else {
            url = `https://www.imdb.com/search/title/?groups=top_250&sort=user_rating,desc&start=${index}&ref_=adv_nxt`
        }
        let moviesInPage = moviesFromUrl(url)
        movies = [...movies, ...moviesInPage]
    }
    log('movies', movies.length)
    saveMovie(movies)
    // downloadCovers(movies)
    console.timeEnd('IMDB')
    log('抓取成功, 数据已经写入到 imdb.json 中')
}
__main()
