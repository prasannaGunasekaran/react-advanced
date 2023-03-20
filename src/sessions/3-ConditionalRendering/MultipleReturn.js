import React,{useState,useEffect}from 'react'
//multiple returns used in creating loading website
const MultipleReturn = () => {
  const [isLoading,setIsLoading]=useState(false);
  const [user,setUser]=useState('');

  useEffect(()=>{
    setTimeout(()=>{
      setUser('prasanna')
      setIsLoading(true)
    },5000)
  },[])

  if(isLoading){
    return(
      <div className='container'>
        <h1>{user}</h1>
  
      </div>
    )
  }else{
    return(
      <div className='container'>
         <img
     src='https://images.search.yahoo.com/images/view;_ylt=Awr9zn0GLvRjmWwWfGyJzbkF;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzc3NzA1NGY1YjRhNWY2YTcxOTczYzE5Y2ZhODFiN2JhBGdwb3MDNgRpdANiaW5n?back=https%3A%2F%2Fimages.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dgif%2Bloading%26type%3DE211US714G91729%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D6&w=498&h=498&imgurl=media1.tenor.com%2Fimages%2Fd6cd5151c04765d1992edfde14483068%2Ftenor.gif%3Fitemid%3D5662595&rurl=https%3A%2F%2Ftenor.com%2Fsearch%2Floading-gifs&size=322.8KB&p=gif+loading&oid=777054f5b4a5f6a71973c19cfa81b7ba&fr2=piv-web&fr=mcafee&tt=Loading+GIFs+%7C+Tenor&b=0&ni=21&no=6&ts=&tab=organic&sigr=ERz0_FoMJkyx&sigb=vPH.Kx8q5fVR&sigi=godY5offGOA7&sigt=ue3iitWtGMHK&.crumb=EkHEnxL3VsC&fr=mcafee&fr2=piv-web&type=E211US714G91729' 
     alt='loading...'/>
    </div>
    )
  }
}

export default MultipleReturn