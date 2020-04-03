import CommonHead from './commonHead';
import Header from './header';
import Footer from './footer';
import Colors from './colors';

export default function Layout(props){
    return(
        <main>
            <CommonHead />
            <Header/>
            <section>
                {props.children} 
            </section>  
            <Footer/>
            <style jsx global>{`
                html{    
                    font-family: 'Roboto', sans-serif;
                    background-color: ${Colors.white};
                }
                body{
                    background-color: ${Colors.white};
                }
            `}</style>         
        </main>
    )
}