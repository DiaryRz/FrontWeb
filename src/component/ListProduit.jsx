import './css/ListProduit.css';
function ImageListe(props){
    return(
    <>
        <div className="image">
            <div className="GandImage">
                <img src={props.image} width={100} height={100} alt="" />
            </div>
            <div className="SousImage">
                <ul className='SousImage1'>
                    <li><img src="./image/1.jpg" alt="" width={50} height={50} /></li>
                    <li><img src="./image/1.jpg" alt="" width={50} height={50} /></li>
                    <li><img src="./image/1.jpg" alt="" width={50} height={50} /></li>
                </ul>
            </div>
        </div>
    </>);
}

export function DetailsPrix(props){
    return(
    <>
        <div className="tout">
            <ImageListe image = {props.donnee.img1} />
            <p className='Prix'> Prix : {props.donnee.prix }</p>
            <p className='Quantite'>{props.donnee.nomproduit} : { props.donnee.nombre } </p>
            <p><button>Acheter</button></p>
        </div>
    </>);
}

export function MenuDroite(){
    return(
        <>
            <div className="menu">
                <p>Filter</p>
                <p>Prix Min :<input type="text" name="min" id="min" placeholder='min' /></p>
                <p> Prix Max:<input type="text" name="max" id="max" placeholder='max' /></p>
                <p><input type="submit" value="Valider" /></p>
            </div>
        </>
    );
}

// export default DetailsPrix;
