import preloader from '../../../assets/images/preLoader.gif'
import * as Style from './Style';

const Preloader = (props) => {
    return (
        <Style.Preloader> <img src={preloader} alt='Preloader'></img> </Style.Preloader>
    );
}

export default Preloader;