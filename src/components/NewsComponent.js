import React, { Component } from 'react'
import NewItem from './NewItem'
import Loading from './loading.js'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";




export default class NewsComponent extends Component {


    articles = []
    // = [
    //     {
    //         "source": {
    //             "id": "bbc-news",
    //             "name": "BBC News"
    //         },
    //         "author": "BBC News",
    //         "title": "Why this Trump loyalist is willing to serve months in Rikers prison",
    //         "description": "The former president's family ${this.props.category} is sticking by the man whose evidence saw it convicted of tax crimes. Why?",
    //         "url": "http://www.bbc.co.uk/news/world-us-canada-63893268",
    //         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/6347/production/_126351452_hi078032895.jpg",
    //         "publishedAt": "2022-12-08T09:07:18.8503775Z",
    //         "content": "The fifteenth of November was a significant day for Donald Trump. That evening, in an opulent, chandeliered ballroom in his Mar-a-Lago resort, he announced to the world that he was running for Presid… [+7922 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "bbc-news",
    //             "name": "BBC News"
    //         },
    //         "author": "BBC News",
    //         "title": "Harry and Meghan Netflix series to make revelations about Royals",
    //         "description": "The Duke and Duchess of Sussex's Netflix series promises to lift the lid on tensions in the Royal Family.",
    //         "url": "http://www.bbc.co.uk/news/live/uk-63876934",
    //         "urlToImage": "https://m.files.bbci.co.uk/modules/bbc-morph-news-waf-page-meta/5.3.0/bbc_news_logo.png",
    //         "publishedAt": "2022-12-08T08:22:27.2405954Z",
    //         "content": "There will be apprehension in the\r\nRoyal Family about this series.\r\nHow far will it go? How toxic are\r\nthe claims that are going to be made? And how should the palace respond? Should\r\nthey offer a lo… [+1135 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "bbc-news",
    //             "name": "BBC News"
    //         },
    //         "author": "BBC News",
    //         "title": "Iran carries out first execution over anti-government protests",
    //         "description": "Mohsen Shekari was hanged after being convicted of \"enmity against God\", state media report.",
    //         "url": "http://www.bbc.co.uk/news/world-middle-east-63900099",
    //         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/543A/production/_127926512_3c1cdcae26b63d2a8f9ce63144ce8455437981d3.jpg",
    //         "publishedAt": "2022-12-08T08:22:18.0085178Z",
    //         "content": "Iran has announced the first execution of a protester convicted over the recent anti-government unrest.\r\nMohsen Shekari was hanged on Thursday morning after being found guilty by a Revolutionary Cour… [+1348 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "bbc-news",
    //             "name": "BBC News"
    //         },
    //         "author": "BBC News",
    //         "title": "Pedro Castillo: Peru's ousted president detained by police in Lima",
    //         "description": "Local media report that Pedro Castillo has been moved to a police-run prison following his arrest.",
    //         "url": "http://www.bbc.co.uk/news/world-latin-america-63899457",
    //         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/11AF0/production/_127923427_mediaitem127923423.jpg",
    //         "publishedAt": "2022-12-08T08:07:18.5840909Z",
    //         "content": "Peru's ousted President Pedro Castillo has been detained by police and accused of \"rebellion\" and \"conspiracy\" to break the constitutional order.\r\nHe was reportedly detained on his way to the Mexican… [+4753 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "bbc-news",
    //             "name": "BBC News"
    //         },
    //         "author": "BBC News",
    //         "title": "Umar Patek: Anger and fear in Australia as Bali bomber freed",
    //         "description": "Survivors of the 2002 attacks tell the BBC they don't believe Umar Patek has been deradicalised.",
    //         "url": "http://www.bbc.co.uk/news/world-australia-63883431",
    //         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/17216/production/_127924749_gettyimages-146616522.jpg",
    //         "publishedAt": "2022-12-08T03:52:25.1633794Z",
    //         "content": "After the deadly bombings on two Bali nightclubs in 2002, some survivors say they got a \"life sentence\".\r\n\"My life changed forever,\" Australian man Andrew Csabi told the BBC.\r\nOn Wednesday, the man w… [+2107 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "bbc-news",
    //             "name": "BBC News"
    //         },
    //         "author": "BBC News",
    //         "title": "Jaylen Smith: Arkansas elects youngest black mayor in US",
    //         "description": "Fresh out of high school, 18-year-old Jaylen Smith has big plans for the little town of Earle, Arkansas.",
    //         "url": "http://www.bbc.co.uk/news/world-us-canada-63897771",
    //         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/10FA6/production/_127924596_screenshot2022-12-07at6.14.11pm.png",
    //         "publishedAt": "2022-12-08T03:37:21.6162805Z",
    //         "content": "An 18-year-old college student in the US state of Arkansas has reportedly become the youngest black mayor to be elected in the US.\r\nJaylen Smith just left high school in May. On Tuesday, he was voted… [+2370 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "bbc-news",
    //             "name": "BBC News"
    //         },
    //         "author": "BBC News",
    //         "title": "Elon Musk turns Twitter into 'hotel' for staff",
    //         "description": "One photo shows a double room with wardrobe and slippers, as Elon Musk seeks to instil a \"hardcore\" work culture.",
    //         "url": "http://www.bbc.co.uk/news/technology-63897608",
    //         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/A246/production/_127924514_elon'sbed.jpeg.jpg",
    //         "publishedAt": "2022-12-08T02:22:21.8942603Z",
    //         "content": "The BBC has been given photos of Twitter office space that has been converted into bedrooms, which San Francisco authorities are probing as a possible building code violation.\r\nOne image showed a roo… [+2812 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "bbc-news",
    //             "name": "BBC News"
    //         },
    //         "author": "BBC News",
    //         "title": "Wordle: The most Googled word globally and in the US in 2022",
    //         "description": "Lottery numbers, the Queen's death and elections couldn't outperform US search interest in Wordle.",
    //         "url": "http://www.bbc.co.uk/news/world-us-canada-63895493",
    //         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/8234/production/_127923333_wordle.jpg",
    //         "publishedAt": "2022-12-07T23:07:29.4937333Z",
    //         "content": "Americans dug for new word definitions in Google this year, looking up terms like tacit, cacao and foray, driven by a nearly singular pursuit - Wordle. \r\nThe word Wordle itself crowned the top spot a… [+2067 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "bbc-news",
    //             "name": "BBC News"
    //         },
    //         "author": "BBC News",
    //         "title": "Sunny Balwani: Former Theranos executive gets nearly 13 years in prison",
    //         "description": "Second-in-command Sunny Balwani receives a heavier sentence than the start-up's founder Elizabeth Holmes.",
    //         "url": "http://www.bbc.co.uk/news/world-us-canada-63895825",
    //         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/98DC/production/_127923193_gettyimages-1385734053.jpg",
    //         "publishedAt": "2022-12-07T23:07:22.1518084Z",
    //         "content": "Ramesh \"Sunny\" Balwani, the ${this.props.category} partner of disgraced Theranos founder Elizabeth Holmes, has been sentenced to nearly 13 years in prison. \r\nBalwani was convicted in July of 12 counts of wire frau… [+2481 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "bbc-news",
    //             "name": "BBC News"
    //         },
    //         "author": "BBC News",
    //         "title": "Idaho murders: Police release victims' belongings to grieving families",
    //         "description": "Police say the belongings are no longer needed in the ongoing investigation into the four deaths.",
    //         "url": "http://www.bbc.co.uk/news/world-us-canada-63896059",
    //         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/155EC/production/_127923578_idahopolice.jpg",
    //         "publishedAt": "2022-12-07T21:07:19.0069212Z",
    //         "content": "Over three weeks after a murder left four Idaho university students dead, police plan to return the victims' belongings to their grieving families. \r\nThe four students, all 20 or 21, were found stabb… [+2317 chars]"
    //     }
    // ]
    static defaultProps = {
        pageSize: 9,
        country: 'in',
        category: 'general'
    }
    static propTypes = {
        pageSize: PropTypes.number,
        country: PropTypes.string,
        category: PropTypes.string


    }
    constructor() {

        super();

        this.state = {
            articles: this.articles,
            loading: true,
            page: 1
            , totalArticles: 0

        }
    }

    async componentDidMount() {
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c56fe5f10ae3411a9f61f9ef2ff6e0d8&page=${this.state.page}&pagesize=${this.props.pageSize}`
        // this.setState({ loading: true });

        // let data = await fetch(url);
        // let parsedData = await data.json()
        // this.setState({ articles: parsedData.articles, loading: false })
        // console.log(totalArticles);
        this.updatenews();
    }
    // uPdate news by fetchung data
    updatenews = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=c56fe5f10ae3411a9f61f9ef2ff6e0d8&page=${this.state.page}&pagesize=21`
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json()

        this.setState({
            articles: parsedData.articles,
            loading: false
            , totalArticles: parsedData.totalResults

        })
    }
    fetchMoreData = async() => {
        this.setState({
            page: this.state.page + 1
        })
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=c56fe5f10ae3411a9f61f9ef2ff6e0d8&page=${this.state.page}&pagesize=21`
       
        let data = await fetch(url);
        let parsedData = await data.json()

        this.setState({
            articles: this.state.articles.concat(parsedData.articles)

        })
    };
    // handling next and previous click button
    handlenextclick = async () => {


        // let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=c56fe5f10ae3411a9f61f9ef2ff6e0d8&page=${this.state.page + 1}&pagesize=21`
        // this.setState({ loading: true });
        // let data = await fetch(url);
        // let parsedData = await data.json()
        // this.setState({ articles: parsedData.articles })

        // this.setState({
        //     page: this.state.page + 1
        //     , loading: false
        // })
        this.setState({
            page: this.state.page + 1

        })
        this.updatenews();
    }
    handleprevclick = async () => {
        // let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=c56fe5f10ae3411a9f61f9ef2ff6e0d8&page=${this.state.page - 1}&pagesize=21`
        // this.setState({ loading: true });

        // let data = await fetch(url);
        // let parsedData = await data.json()
        // this.setState({ articles: parsedData.articles })

        // this.setState({
        //     page: this.state.page - 1
        //     , loading: false
        // })
        this.setState({
            page: this.state.page - 1

        })

        this.updatenews();


    }

    render() {



        return (
            <div className='container my-3 '>
                <h2> NEWS APP's - TOP HEADLINES {this.props.category}</h2>
                {this.state.loading && <Loading />}


                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalArticles}
                    loader={ <Loading />}
                >
                    { <div className='row my-3  '>
                        {
                            this.state.articles.map((item) => {
                                return (
                                    <div className=' col-md-3 col-sm-4  mx-3 ' key={item.url} >
                                        <NewItem title={item.title} description={item.description} imageUrl={item.urlToImage} newsUrl={item.url} date={item.publishedAt} author={item.author} source={item.source.name} />
                                    </div>
                                )
                            })}
                    </div>}
                </InfiniteScroll>
                {/* <div className='container d-flex justify-content-between'>
                    <button disabled={this.state.page == 1} type="button" className="btn btn-primary" onClick={this.handleprevclick}> &larr; prev </button>
                    <button disabled={this.state.totalArticles / 21 < this.state.page} type="button" className="btn btn-primary" onClick={this.handlenextclick}>next   &rarr; </button>
                </div> */}
            </div>
        )
    }
}
