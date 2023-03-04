
export default function Home(props) {
  props.pageStatus('Home')


    return (
      <>
      <div className="home_container">
     <h1>{props.authUser === '' ?  "Welcome to J NEWS" : 'Get started'}</h1>
     </div>
     </>
    );
  }
 
 