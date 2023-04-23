import React, { useState } from 'react'
import MovieList from './MovieList'
import { useSelector, useDispatch } from 'react-redux'
import { setMode } from '../redux/counterSlice';

const movies = [{ name: "Interstellar", type: "Movie", genre: "Space Sci-Fi All", trailer:"https://youtu.be/2LqzF5WauAw" ,imdb: "8.6", desc: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.", imgSrc: "https://img.movies2watch.cc/xxrz/250x400/265/82/71/82718ed9a7ece105be98bb3d48dd57bf/82718ed9a7ece105be98bb3d48dd57bf.jpg" },
{ name: "The Office", type: "Series", genre: "Comedy All", imdb: "9", trailer: "https://youtu.be/tNcDHWpselE", desc: "A motley group of office workers go through hilarious misadventures at the Scranton, Pennsylvania, branch of the Dunder Mifflin Paper Company.", imgSrc: "https://img.movies2watch.cc/xxrz/250x400/265/fc/38/fc3856cba820c1db3597515c8fcd7191/fc3856cba820c1db3597515c8fcd7191.jpg" },
{ name: "Breaking Bad", type: "Series", genre: "Thriller Crime All", trailer: "https://youtu.be/XZ8daibM3AE", imdb: "9.5", desc: "Walter White, a chemistry teacher, discovers that he has cancer and decides to get into the meth-making business to repay his medical debts. His priorities begin to change when he partners with Jesse.", imgSrc: "https://img.movies2watch.cc/xxrz/250x400/265/7a/78/7a78d2a44e33d64d6c35e1a2c1e2cdc9/7a78d2a44e33d64d6c35e1a2c1e2cdc9.jpg" },
{ name: "Friends", type: "Series", genre: "Comedy All", imdb: "8.9", trailer: "https://youtu.be/lGTOru7pwL8", desc: "Follow the lives of six reckless adults living in Manhattan, as they indulge in adventures which make their lives both troublesome and happening.", imgSrc: "https://img.movies2watch.cc/xxrz/250x400/265/aa/72/aa72cef5070d8019fa2c26b9ad236ad3/aa72cef5070d8019fa2c26b9ad236ad3.jpg" },
{ name: "Better Call Saul", type: "Series", genre: "Thriller Crime All", trailer: "https://youtu.be/1ouIqZJ1elE", imdb: "8.9", desc: "Ex-con artist Jimmy McGill turns into a small-time attorney and goes through a series of trials and tragedies, as he transforms into his alter ego Saul Goodman, a morally challenged criminal lawyer.", imgSrc: "https://img.movies2watch.cc/xxrz/250x400/265/13/ea/13ea88f1c3d1af3ba32fcf058dada140/13ea88f1c3d1af3ba32fcf058dada140.jpg" },
{ name: "Modern Family", type: "Series", genre: "Comedy All", imdb: "8.5", trailer: "https://youtu.be/U7dLXjZfXV8", desc: "Three modern-day families from California try to deal with their kids, quirky spouses and jobs in their own unique ways, often falling into hilarious situations.", imgSrc: "https://img.movies2watch.cc/xxrz/250x400/265/22/3f/223f5b8c44309cc1bbb9d1c49c59e845/223f5b8c44309cc1bbb9d1c49c59e845.jpg" },
{ name: "The Big Bang Theory", type: "Series", genre: "Comedy All", trailer: "https://youtu.be/mQLV9qjnK60", imdb: "8.2", desc: "The lives of four socially awkward friends, Leonard, Sheldon, Howard and Raj, take a wild turn when they meet the beautiful and free-spirited Penny.", imgSrc: "https://img.movies2watch.cc/xxrz/250x400/265/1a/29/1a290349294683dc2dc4879e2ca13b3d/1a290349294683dc2dc4879e2ca13b3d.jpg" },
{ name: "The Walking Dead", type: "Series", genre: "Horror Fiction Action All", trailer: "https://youtu.be/R1v0uFms68U", imdb: "8.1", desc: "In the wake of a zombie apocalypse, various survivors struggle to stay alive. As they search for safety and evade the undead, they are forced to grapple with rival groups and difficult choices.", imgSrc: "https://img.movies2watch.cc/xxrz/250x400/265/5b/f9/5bf933d3055d8b9ccc0c1291e1961a46/5bf933d3055d8b9ccc0c1291e1961a46.jpg" },
{ name: "Prison Break", type: "Series", genre: "Mystery Thriller Action All", trailer: "https://youtu.be/AL9zLctDJaU", imdb: "8.3", desc: "An engineer installs himself in a prison he helped design, in order to save his falsely accused brother from a death sentence.", imgSrc: "https://img.movies2watch.cc/xxrz/250x400/265/90/35/9035e9fd6129b4d5bbecd6a8351269cc/9035e9fd6129b4d5bbecd6a8351269cc.jpg" },
{ name: "Avengers: Endgame", type: "Movie", genre: "Sci-Fi Action All", trailer: "https://youtu.be/hA6hldpSTF8", imdb: "8.4", desc: "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.", imgSrc: "https://img.movies2watch.cc/xxrz/250x400/265/d5/c9/d5c931df6080a426ed559d24896d5349/d5c931df6080a426ed559d24896d5349.jpg" },
{ name: "Avengers: Infinity War", type: "Movie", genre: "Sci-Fi Action All", trailer: "https://youtu.be/6ZfuNTqbHE8", imdb: "8.4", desc: "The Avengers must stop Thanos, an intergalactic warlord, from getting his hands on all the infinity stones. However, Thanos is prepared to go to any lengths to carry out his insane plan.", imgSrc: "https://img.movies2watch.cc/xxrz/250x400/265/bd/d3/bdd34eb241bf3d74098aaf29529a2f02/bdd34eb241bf3d74098aaf29529a2f02.jpg" },
{ name: "Thor: Ragnarok", type: "Movie", genre: "Comedy Action Sci-Fi All", trailer: "https://youtu.be/ue80QwXMRHg", imdb: "7.9", desc: "Deprived of his mighty hammer Mjolnir, Thor must escape the other side of the universe to save his home, Asgard, from Hela, the goddess of death.", imgSrc: "https://img.movies2watch.cc/xxrz/250x400/265/07/7c/077cc0b86e2cad3267f323ea15fc1d86/077cc0b86e2cad3267f323ea15fc1d86.jpg" },
{ name: "The Prestige", type: "Movie", genre: "Thriller Sci-Fi All",trailer:"https://youtu.be/ijXruSzfGEc", imdb: "8.5", desc: "Two friends and fellow magicians become bitter enemies after a sudden tragedy. As they devote themselves to this rivalry, they make sacrifices that bring them fame but, with terrible consequences.", imgSrc: "https://img.movies2watch.cc/xxrz/250x400/265/3a/6b/3a6be33857c387793d5f4a578b1aa65c/3a6be33857c387793d5f4a578b1aa65c.jpg" },
{ name: "Stranger Things", type: "Series", genre: "Sci-Fi Horror Thriller All",trailer:"https://youtu.be/b9EkMc79ZSU", imdb: "8.7", desc: "In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries.", imgSrc: "https://img.movies2watch.cc/xxrz/250x400/265/1b/38/1b38bad49c555d94ed6e308a3f597d5a/1b38bad49c555d94ed6e308a3f597d5a.jpg" },
{ name: "Dark", type: "Series", genre: "Sci-Fi Crime Thriller All",trailer:"https://youtu.be/ESEUoa-mz2c", imdb: "8.7", desc: "A missing child causes four families to help each other for answers. What they could not imagine is that this mystery would be connected to innumerable other secrets of the small town.", imgSrc: "https://img.movies2watch.cc/xxrz/250x400/265/d8/c8/d8c89e3a326c9ab4427f7a93ad821170/d8c89e3a326c9ab4427f7a93ad821170.jpg" },
{ name: "Squid Game", type: "Series", genre: "thriller Action All",trailer:"https://youtu.be/oqxAJKy0ii4", imdb: "8", desc: "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits — with deadly high stakes.", imgSrc: "https://img.movies2watch.cc/xxrz/250x400/265/8d/a6/8da6cf7c651db423de7a502e25084ac7/8da6cf7c651db423de7a502e25084ac7.jpg" },
{ name: "Suits", type: "Series", genre: "Thriller All",trailer:"https://youtu.be/2Q18TnxZxLI", imdb: "8.5", desc: "Mike Ross, a talented young college dropout, is hired as an associate by Harvey Specter, one of New York's best lawyers. They must handle cases while keeping Mike's qualifications a secret.", imgSrc: "https://img.movies2watch.cc/xxrz/250x400/265/a9/8b/a98be403de59e54346baa765027443f8/a98be403de59e54346baa765027443f8.jpg" },
{ name: "Brooklyn Nine-Nine", type: "Series", genre: "Comedy Crime All",trailer:"https://youtu.be/icTOP9F17pU", imdb: "8.4", desc: "A single-camera ensemble comedy following the lives of an eclectic group of detectives in a New York precinct, including one slacker who is forced to shape up when he gets a new boss.", imgSrc: "https://img.movies2watch.cc/xxrz/250x400/265/d8/6f/d86f60e52f85e1203c755318c6147fca/d86f60e52f85e1203c755318c6147fca.jpg" },
{ name: "Money Heist", type: "Series", genre: "Thriller Crime All",trailer:"https://youtu.be/cQYvQIrM1FY", imdb: "8.2", desc: "An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.", imgSrc: "https://img.movies2watch.cc/xxrz/250x400/265/00/f3/00f3cff0f4f09b6cffa5c6a59878b027/00f3cff0f4f09b6cffa5c6a59878b027.jpg" },
{ name: "Reacher", type: "Series", genre: "Action Thriller Crime All",trailer:"https://youtu.be/u-YNd31tSZg", imdb: "8.1", desc: "Jack Reacher, a veteran military police investigator, has recently entered civilian life when he is falsely accused of murder.", imgSrc: "https://img.movies2watch.cc/xxrz/250x400/265/37/48/3748160109295e8d7ce639c846edfe35/3748160109295e8d7ce639c846edfe35.jpg" },
{ name: "Loki", type: "Series", genre: "Sci-Fi Action All",trailer:"https://youtu.be/G4JuopziR3Q", imdb: "8.2", desc: "Loki, the God of Mischief, steps out of his brother's shadow to embark on an adventure that takes place after the events of Avengers: Endgame.", imgSrc: "https://img.movies2watch.cc/xxrz/250x400/265/09/18/09181cd4682cb40a50bc539d4ef25379/09181cd4682cb40a50bc539d4ef25379.jpg" },
{ name: "Spider-Man: No Way Home", type: "Movie", genre: "Sci-Fi Action All",trailer:"https://youtu.be/UV2ZWTSHjSs", imdb: "8.3", desc: "Spider-Man seeks the help of Doctor Strange to forget his exposed secret identity as Peter Parker. However, Strange's spell goes horribly wrong, leading to unwanted guests entering their universe.", imgSrc: "https://img.movies2watch.cc/xxrz/250x400/265/44/54/4454b905c18670de60b09fd624fccd0c/4454b905c18670de60b09fd624fccd0c.jpg" }]

export default function Search() {

    const mode = useSelector((state) => state.mode.value)
    const dispatch = useDispatch()

    const [seriesGenre, setGenre] = useState('All');
    const [searchText, setSearchText] = useState('');
    const [temp, setTemp] = useState('');
    const [choice, setChoice] = useState('tab');


    const handleGeneral = () => {
        window.scrollTo(0,0);
        setChoice('tab');
        setGenre('All');
    }

    const handleComedy = () => {
        window.scrollTo(0,0);
        setChoice('tab');
        setGenre('Comedy');
    }

    const handleThriller = () => {
        window.scrollTo(0,0);
        setChoice('tab');
        setGenre('Thriller');
    }

    const handleAction = () => {
        window.scrollTo(0,0);
        setChoice('tab');
        setGenre('Action');
        
    }

    const handleSciFi = () => {
        window.scrollTo(0,0);
        window.scr
        setChoice('tab');
        setGenre('Sci-Fi');
    }

    const handleCrime = () => {
        window.scrollTo(0,0);
        window.scr
        setChoice('tab');
        setGenre('Crime');
    }

    const handleChange = () => {
        setSearchText(event.target.value);
    }

    const handleSearch = () => {
        window.scrollTo(0,0);
        setGenre('Found Results')
        setTemp(searchText)
        setSearchText('');
        setChoice('button');
    }
    
    const handleEnter = (e) => {
        if(e.key==="Enter"){
        e.preventDefault();
        window.scrollTo(0,0);
        setGenre('Found Results')
        setTemp(searchText)
        setSearchText('');
        setChoice('button');}
    }

    const handleToggle = () => {
        if(mode=='light'){
            dispatch(setMode('dark'));
            document.body.style.backgroundColor = 'black';
    }
        else{
            dispatch(setMode('light'))
            document.body.style.backgroundColor = 'white';
        }
    }

    return (
        <div>
            <nav className={`navbar fixed-top navbar-expand-lg navbar-${mode}`} style={{backgroundColor:`${mode=='light'?'#e3f2fd':'#2C2D2D'}`}} >
                <div className="container-fluid">
                    <span className="navbar-brand">WhatMovieToWatch</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <label className="nav-link active" aria-current="page" onClick={handleGeneral} >General</label>
                            </li>
                            <li className="nav-item">
                                <label className="nav-link active" aria-current="page" onClick={handleSciFi} >Sci-Fi</label>
                            </li>
                            <li className="nav-item">
                                <label className="nav-link active" aria-current="page" onClick={handleComedy} >Comedy</label>
                            </li>
                            <li className="nav-item">
                                <label className="nav-link active" aria-current="page" onClick={handleThriller} >Thriller</label>
                            </li>
                            <li className="nav-item">
                                <label className="nav-link active " aria-current="page" onClick={handleAction} >Action</label>
                            </li>
                            <li className="nav-item">
                                <label className="nav-link active " aria-current="page" onClick={handleCrime} >Crime</label>
                            </li>
                            <li className="nav-item">
                                <form className="d-flex" role="search">
                                    <input className="form-control me-2" type="search"  aria-label="Search" placeholder='Type Keywords'
                                        value={searchText} onChange={handleChange} onKeyPress={handleEnter} />
                                    <span className="btn btn-outline-success" type="submit" onClick={handleSearch} >Search</span>
                                </form>
                            </li>

                        </ul>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={handleToggle} />
                                <label className={`text-${mode==='light'?'dark':'white'}`} htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                        </div>
                    </div>
                </div>
            </nav>
            <div className={`container text-${mode=='dark'? 'white': 'black'}`} style={{marginTop:'60px'}} >
                <h1 className='text-center'>{seriesGenre == "All" ? "General" : seriesGenre}</h1>
            </div>
            <div className='container'>
                <div className='row'>

                    {/* 1st way of rendering movie lists (tabs and button) */}
                    {   choice=='tab' ?
                        movies.map((element, index) => {

                            if (element.genre.includes(seriesGenre)) {
                                return <div className='col-md-3' key={index}>
                                    <MovieList name={element.name} imgSrc={element.imgSrc} imdb={element.imdb} desc={element.desc}
                                        trailer={element.trailer} type={element.type} />
                                </div>
                            }
                        }) : 
                        movies.map((element, index) => {
                            
                            if (element.name.toLowerCase().includes(temp.toLowerCase())) {
                                return <div className='col-md-3' key={index}>
                                    <MovieList name={element.name} imgSrc={element.imgSrc} imdb={element.imdb} desc={element.desc}
                                        trailer={element.trailer} type={element.type} />
                                </div>
                            }
                        })
                    }


                    {/* 2nd Way of rendering movie lists (tabs and button) */}
                    {/* { 
                        movies.map((element, index) => {
                            if(choice=='tab'){
                                if (element.genre.includes(seriesGenre)) {
                                    return <div className='col-md-3' key={index}>
                                        <MovieList name={element.name} imgSrc={element.imgSrc} imdb={element.imdb} desc={element.desc}
                                            trailer={element.trailer} type={element.type} />
                                    </div>
                                }
                            }
                            else if(choice=='button'){
                                if (element.name.includes(temp)) {
                                    return <div className='col-md-3' key={index}>
                                        <MovieList name={element.name} imgSrc={element.imgSrc} imdb={element.imdb} desc={element.desc}
                                            trailer={element.trailer} type={element.type} />
                                    </div>
                                }
                            }
                        })
                    } */}

                    {/* {movies.map((element, index) => {

                        if (element.genre.includes(seriesGenre)) {
                            return <div className='col-md-3' key={index}>
                                <MovieList name={element.name} imgSrc={element.imgSrc} imdb={element.imdb} desc={element.desc}
                                    trailer={element.trailer} type={element.type} />
                            </div>
                        }
                    })} */}
                </div>
            </div>

        </div>
    )
}
